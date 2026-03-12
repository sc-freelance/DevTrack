# importing necessary libraries and modules for views on the dashboard
from django.db.models import Count
from rest_framework import generics
from .model import Project
from .serializers import ProjectSerializer

# Serializer for the project dashboard, including task count
class ProjectListView(generics.ListAPIView):
    serializer_class = ProjectDashboardSerializer

    # Overriding the get_queryset method to filter projects by the logged-in user and annotate with task count
    def get_queryset(self): # queryset method to filter projects by the logged-in user and annotate with task count
        return Project.objects.filter(owner=self.request.user).annotate(
            task_count=Count('tasks')
        )