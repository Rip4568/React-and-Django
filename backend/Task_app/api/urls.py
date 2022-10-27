from django.urls import path, include
from rest_framework import routers

from Task_app import views
from Task_app.api.viewsets import TaskViewSet

route = routers.DefaultRouter()
route.register('tasks',viewset=TaskViewSet, basename='tasks')


urlpatterns = [
    path('',include(route.urls))
]
