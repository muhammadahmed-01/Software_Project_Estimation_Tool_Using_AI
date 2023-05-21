from django.urls import path
from . import views

urlpatterns = [
    path('reviewer/get-assigned', views.get_assigned_tasks),
    path('reviewer/get-unassigned', views.get_unassigned_tasks),
    path('reviewer/get-rejected', views.get_rejected_tasks),
    path('reviewer/get-approved', views.get_approved_tasks),
    path('reviewer/get-pending', views.get_pending_tasks),
    path('reviewer/approve-estimate', views.approve_estimate),
    path('reviewer/reject-estimate', views.reject_estimate),
    path('reviewer/update-estimate', views.update_estimate),
    path('reviewer/update-assignee', views.update_assignee),
    path('reviewer/get-estimator-estimates', views.get_estimator_estimates),
    path('reviewer/get-project-estimates', views.get_project_estimates),
]





