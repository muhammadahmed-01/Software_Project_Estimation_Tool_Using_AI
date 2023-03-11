from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from keras.models import load_model
from keras.optimizers import Adam
from keras.losses import MeanSquaredError
from keras.metrics import RootMeanSquaredError
from django.core.mail import EmailMessage
from django.http import HttpResponse, JsonResponse
import pandas as pd
import numpy as np
import pickle
import os

from spetuai.models import Tasks

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

model = load_model('model/')

scaler_task = pickle.load(open('scaler_task.sav', 'rb'))
scaler_subtask = pickle.load(open('scaler_subtask.sav', 'rb'))


def send_email_xlsx(request):
    if request.method == 'POST':
        to = request.POST.getlist('to')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        xlsx = request.FILES['xlsx']

        email = EmailMessage(
            subject,
            message,
            to=to
        )
        email.attach(xlsx.name, xlsx.read(), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        email.send()

        return HttpResponse('Email sent successfully')


@api_view(['POST'])
def get_predictions(request):
    # print("request received")
    data = request.data

    scaled_task = scaler_task.transform([data['task_name'].lower()])
    scaled_subtask = scaler_subtask.transform([data['subtask_name'].lower()])

    data = [data['skill'], data['complexity'], scaled_task[0], scaled_subtask[0]]
    data = pd.DataFrame(data)
    data = data.transpose()
    data = data.astype('float32')
    prediction = model.predict(data)
    prediction = prediction[0][0]
    # print(f"prediction = {prediction}")
    prediction = round(prediction, 2)
    return Response(prediction, status=status.HTTP_200_OK)


@api_view(['POST'])
def set_estimation(request):
    data = request.data
    data['estimate_time'] = float(data['estimate_time'])
    print(f"estimate time = {data['estimate_time']} and type = {type(data['estimate_time'])}")

    # Freeze all layers except for the last one
    for layer in model.layers[:-1]:
        layer.trainable = False

    # Compile the model with a new optimizer and a lower learning rate
    model.compile(loss=MeanSquaredError(), optimizer=Adam(learning_rate=0.0001), metrics=[RootMeanSquaredError()])

    scaled_task = scaler_task.transform([data['task_name'].lower()])
    scaled_subtask = scaler_subtask.transform([data['subtask_name'].lower()])

    new_data = [data['skill'], data['complexity'], scaled_task[0], scaled_subtask[0]]
    new_data = pd.DataFrame(new_data)
    new_data = new_data.transpose()
    new_data = new_data.astype('float32')

    new_target = np.array([data['estimate_time']])  # shape is (1,)
    new_target = np.reshape(new_target, (1, 1))
    print(f"new target = {new_target}")
    model.fit(new_data, new_target, epochs=1, batch_size=1)
    model.save('./model')
    return Response(status=status.HTTP_200_OK)


@csrf_exempt
@api_view(['GET'])
def get_pending_tasks(request):
    assignee_id = request.GET.get('assignee_id', None)
    project_id = request.GET.get('project_id', None)
    if project_id is None:
        return JsonResponse({'error': 'ProjectID not provided'}, status=400)
    if assignee_id is None:
        return JsonResponse({'error': 'AssigneeID not provided'}, status=400)
    tasks = Tasks.objects.filter(project_id=project_id, assignee_id=assignee_id, status='pending')
    data = {
        'tasks': list(tasks.values())
    }
    return JsonResponse(data)


@csrf_exempt
def get_approved_tasks(request):
    assignee_id = request.GET.get('assignee_id', None)
    project_id = request.GET.get('project_id', None)
    if project_id is None:
        return JsonResponse({'error': 'ProjectID not provided'}, status=400)
    if assignee_id is None:
        return JsonResponse({'error': 'AssigneeID not provided'}, status=400)
    tasks = Tasks.objects.filter(project_id=project_id, assignee_id=assignee_id, status='approved')
    data = {
        'tasks': list(tasks.values())
    }
    return JsonResponse(data)


@csrf_exempt
def get_rejected_tasks(request):
    assignee_id = request.GET.get('assignee_id', None)
    project_id = request.GET.get('project_id', None)
    if project_id is None:
        return JsonResponse({'error': 'ProjectID not provided'}, status=400)
    if assignee_id is None:
        return JsonResponse({'error': 'AssigneeID not provided'}, status=400)
    tasks = Tasks.objects.filter(project_id=project_id, assignee_id=assignee_id, status='rejected')
    data = {
        'tasks': list(tasks.values())
    }
    return JsonResponse(data)


@api_view(['PATCH'])
def update_estimate(request):
    try:
        task_id = request.data.get('task_id')
        task = Tasks.objects.get(pk=task_id)
    except Tasks.DoesNotExist:
        return HttpResponse(status=404)
    
    new_time = request.data.get('new_time')
    if not new_time:
        return JsonResponse({'error': 'New time is required to confirm.'}, status=400)
    
    task.status = 'pending'
    task.estimated_time = new_time
    task.save()
    
    return JsonResponse({'status': 'success'})
