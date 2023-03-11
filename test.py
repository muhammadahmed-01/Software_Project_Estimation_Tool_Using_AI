from keras.models import load_model
from keras.optimizers import Adam
from keras.losses import MeanSquaredError
from keras.metrics import RootMeanSquaredError
import pandas as pd
import pickle
import numpy as np
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 


model = load_model('model/')

# Freeze all layers except for the last one
for layer in model.layers[:-1]:
    layer.trainable = False

# Compile the model with a new optimizer and a lower learning rate
model.compile(loss=MeanSquaredError(), optimizer=Adam(learning_rate=0.0001), metrics=[RootMeanSquaredError()])

skill, complexity = 3, 1
task_name, subtask_name = "PLP".lower(), "API to filter and sort results".lower()
estimate_time = 3

# integer encode
scaler_task = pickle.load(open('scaler_task.sav', 'rb'))
scaler_subtask = pickle.load(open('scaler_subtask.sav', 'rb'))

scaled_task = scaler_task.transform([task_name])
scaled_subtask = scaler_subtask.transform([subtask_name])

# Prepare the new data
new_data = np.array([[skill, complexity, scaled_task[0], scaled_subtask[0]]]) # replace ... with the actual values of the new data
new_data = np.reshape(new_data, (1, 4)) # reshape the new data to match the input shape of the model


# data = [skill, complexity, scaled_task[0], scaled_subtask[0]]
# data = pd.DataFrame(data)
# data = data.transpose()
# data = data.astype('float32')
# print(data)
# print(type(data))
# estimation_time = []
# estimation_time.append(int(estimate_time))
new_target = np.array([estimate_time]) # shape is (1,)
new_target = np.reshape(new_target, (1, 1))
model.fit(new_data, new_target, epochs=1, batch_size=1)
model.save('./model')
