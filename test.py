import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 

from keras.models import load_model
import numpy as np
import pandas as pd
import pickle

model = load_model('model/')

skill,complexity = 2, 0
task_name, subtask_name = "Categories page".lower(), "API to filter and sort results".lower()

# integer encode
scaler_task = pickle.load(open('scaler_task.sav', 'rb'))
scaler_subtask = pickle.load(open('scaler_subtask.sav', 'rb'))
scaled_task = scaler_task.transform([task_name])
scaled_subtask = scaler_subtask.transform([subtask_name])

data = [skill, complexity, scaled_task[0], scaled_subtask[0]]
# print(data)
# print(type(data))
data = pd.DataFrame(data)
data = data.transpose()
print(data)
print(data.shape)
prediction = model.predict(data)
print(f"prediction = {prediction}")