from django.http import JsonResponse, HttpResponse
from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from django.db.models import F
from rest_framework.decorators import api_view

from spetuai.models import Tasks, User, Project


@csrf_exempt
def get_assigned_tasks(request):
    if request.method == 'GET':
        project_id = request.GET.get('project_id', None)
        if project_id is None:
            return JsonResponse({'error': 'ProjectID not provided'}, status=400)
        tasks = Tasks.objects\
            .filter(project_id=project_id, assignee_id__isnull=False)\
            .annotate(assignee_username=F('assignee_id__username'))
        data = {'tasks': list(tasks.values())}
        return JsonResponse(data, status=200)
    else:
        return JsonResponse({'error': 'Invalid request method'})


@csrf_exempt
def get_unassigned_tasks(request):
    if request.method == 'GET':
        project_id = request.GET.get('project_id', None)
        if project_id is None:
            return JsonResponse({'error': 'ProjectID not provided'}, status=400)
        tasks = Tasks.objects\
            .filter(project_id=project_id, assignee_id__isnull=True)\
            .annotate(assignee_username=F('assignee_id__username'))
        data = {'tasks': list(tasks.values())}
        return JsonResponse(data, status=200)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)


@csrf_exempt
def get_rejected_tasks(request):
    if request.method == 'GET':
        project_id = request.GET.get('project_id', None)
        if project_id is None:
            return JsonResponse({'error': 'ProjectID not provided'}, status=400)
        assignee_id = request.GET.get('assignee_id', None)
        if assignee_id is None:
            return JsonResponse({'error': 'Assignee not provided'}, status=400)
        tasks = Tasks.objects.filter(project_id=project_id, assignee_id=assignee_id, status='rejected')\
            .annotate(assignee_username=F('assignee_id__username'))
        data = {'tasks': list(tasks.values())}
        return JsonResponse(data, status=200)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def get_approved_tasks(request):
    if request.method == 'GET':
        assignee_id = request.GET.get('assignee_id', None)
        if assignee_id is None:
            return JsonResponse({'error': 'Assignee not provided'}, status=400)
        project_id = request.GET.get('project_id', None)
        if project_id is None:
            return JsonResponse({'error': 'ProjectID not provided'}, status=400)
        tasks = Tasks.objects.filter(project_id=project_id, assignee_id=assignee_id, status='approved')\
            .annotate(assignee_username=F('assignee_id__username'))
        data = {'tasks': list(tasks.values())}
        return JsonResponse(data, status=200)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def get_pending_tasks(request):
    if request.method == 'GET':
        project_id = request.GET.get('project_id', None)
        if project_id is None:
            return JsonResponse({'error': 'ProjectID not provided'}, status=400)
        assignee_id = request.GET.get('assignee_id', None)
        if assignee_id is None:
            return JsonResponse({'error': 'Assignee not provided'}, status=400)
        tasks = Tasks.objects.filter(project_id=project_id, assignee_id=assignee_id, status='pending')\
            .annotate(assignee_username=F('assignee_id__username'))
        data = {'tasks': list(tasks.values())}
        return JsonResponse(data, status=200)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)


@api_view(['PATCH'])
def approve_estimate(request):
    try:
        task_id = request.data.get('task_id')
        task = Tasks.objects.get(pk=task_id)
    except Tasks.DoesNotExist:
        return HttpResponse(status=404)

    comments = request.data.get('comments', None)
    task.status = 'approved'
    task.comments = comments
    task.save()

    return JsonResponse({'status': 'success'})


@api_view(['PATCH'])
def reject_estimate(request):
    try:
        task_id = request.data.get('task_id')
        task = Tasks.objects.get(pk=task_id)
    except Tasks.DoesNotExist:
        return HttpResponse(status=404)

    comments = request.data.get('comments')
    if not comments:
        return JsonResponse({'error': 'Comments are required to confirm.'}, status=400)
    
    task.status = 'rejected'
    task.comments = comments
    task.save()

    return JsonResponse({'status': 'success'})


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


@api_view(['PATCH'])
def update_assignee(request):
    try:
        task_id = request.data.get('task_id')
        task = Tasks.objects.get(pk=task_id)
    except Tasks.DoesNotExist:
        return HttpResponse(status=404)
    
    assignee_id = request.data.get('assignee_id')
    if not assignee_id:
        return JsonResponse({'error': 'Assignee is not provided.'}, status=400)
    
    task.status = 'pending'

    task.assignee_id = User.objects.get(pk=assignee_id)
    task.save()
    
    return JsonResponse({'status': 'success'})

@api_view(['GET'])
def get_estimator_estimates(request):
    if request.method == "GET":
        estimator_username = request.GET.get('estimator_username', None)
        if estimator_username is None:
            return JsonResponse({'error': 'Estimator username not provided'}, status=400)
        
        estimator = User.objects.filter(username=estimator_username)
        
        tasks = Tasks.objects.filter(assignee_id=estimator.user_id)\
            .annotate(assignee_username=F('assignee_id__username'))
        data = {'tasks': list(tasks.values())}
        return JsonResponse(data, status=200)
    else:
        return JsonResponse({'error': 'Invalid request method'})


@api_view(['GET'])
def get_project_estimates(request):
    if request.method == "GET":
        project_name = request.GET.get('project_name', None)
        if project_name is None:
            return JsonResponse({'error': 'Estimator username not provided'}, status=400)
        
        project = Project.objects.filter(name=project_name)
        
        tasks = Tasks.objects.filter(project_id=project.project_id) \
            .annotate(assignee_username=F('assignee_id__username'))
        data = {'tasks': list(tasks.values())}
        return JsonResponse(data, status=200)
    else:
        return JsonResponse({'error': 'Invalid request method'})