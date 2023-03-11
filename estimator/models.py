# from django.db import models
#
#
# # Create your models here.
#
# class User(models.Model):
#     class Meta:
#         db_table = 'users'
#
#     user_id = models.AutoField(primary_key=True)
#     username = models.CharField(max_length=50)
#     password = models.CharField(max_length=50)
#     role = models.CharField(max_length=50)
#
#     def __str__(self):
#         return self.username
#
#
# class Project(models.Model):
#     class Meta:
#         db_table = 'projects'
#
#     project_id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=50)
#     description = models.CharField(max_length=200)
#     supervisor_id = models.ForeignKey(User, on_delete=models.CASCADE)
#     start_date = models.DateField()
#     end_date = models.DateField()
#
#
# class Requirements(models.Model):
#     class Meta:
#         db_table = 'requirements'
#
#     requirements_id = models.AutoField(primary_key=True)
#     name = models.CharField(max_length=50)
#     description = models.CharField(max_length=200)
#     priority = models.CharField(max_length=20)
#     project_id = models.ForeignKey(Project, on_delete=models.CASCADE)
#
#
# class Tasks(models.Model):
#     class Meta:
#         db_table = 'tasks'
#
#     task_id = models.AutoField(primary_key=True)
#     skill = models.IntegerField()
#     complexity = models.IntegerField()
#     status = models.CharField(max_length=50)
#     comments = models.TextField(null=True, blank=True)
#     estimated_time = models.IntegerField()
#     name = models.CharField(max_length=50)
#     parent_id = models.ForeignKey('self', on_delete=models.CASCADE, null=True, db_column='parent_id')
#     assignee_id = models.ForeignKey(User, on_delete=models.CASCADE, null=True, db_column='assignee_id')
#     project_id = models.ForeignKey(Project, on_delete=models.CASCADE, db_column='project_id')
