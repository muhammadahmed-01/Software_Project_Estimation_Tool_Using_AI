from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

from spetuai.models import User


@csrf_exempt
@api_view(['GET'])
def get_users(request):
    users = User.objects
    data = {
        'users': list(users.values())
    }
    return JsonResponse(data)

