from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

from keras.models import load_model
import pandas as pd
import pickle

model = load_model('model/')

scaler_task = pickle.load(open('scaler_task.sav', 'rb'))
scaler_subtask = pickle.load(open('scaler_subtask.sav', 'rb'))

@api_view(['POST'])
def get_predictions(request):
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

