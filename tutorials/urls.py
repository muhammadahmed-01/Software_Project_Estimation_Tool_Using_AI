from django.urls import re_path, path
from . import views

urlpatterns = [
    path('api/estimation', views.get_predictions)
]
