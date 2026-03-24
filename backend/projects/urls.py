from django.urls import path
from .views import ProjectListCreate

urlpatterns = [
    path('projects/', ProjectListCreate.as_view()),
]