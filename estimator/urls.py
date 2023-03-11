from django.urls import path
from . import views


urlpatterns = [
    path('estimator/estimation', views.get_predictions),
    path('estimator/send-email', views.send_email_xlsx),
    path('estimator/set-estimation', views.set_estimation),
    path('estimator/get-pending', views.get_pending_tasks),
    path('estimator/get-approved', views.get_approved_tasks),
    path('estimator/get-rejected', views.get_rejected_tasks),
    path('estimator/update-estimate', views.update_estimate),
]
