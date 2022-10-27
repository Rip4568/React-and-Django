from rest_framework import viewsets
from Task_app.api.serializers import TaskSerializer

from Task_app.models import Task

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    