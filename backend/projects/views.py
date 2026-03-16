from django.db.models import Count # Import Count to annotate the number of tasks for each project
from rest_framework import generics, permissions # Import permissions to set access control
from .models import Project # Import the Project model
from .serializers import ProjectSerializer # Fixed mismatch

class ProjectListCreate(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer
    
    # For now, let's see ALL projects. 
    # We will add the "owner" filter once we set up Auth.
    queryset = Project.objects.annotate(task_count=Count('tasks'))
    
    # This allows anyone to see/create for testing purposes
    permission_classes = [permissions.AllowAny]