from django.contrib.auth.models import User # Import User model for authentication
from django.db.models import Count # Import Count to annotate the number of tasks for each project
from rest_framework import generics, permissions # Import permissions to set access control
from .models import Project # Import the Project model
from .serializers import ProjectSerializer # Fixed mismatch

class ProjectListCreate(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer
    
    # For now, let's see ALL projects. 
    # We will add the "owner" filter once we set up Auth.
    queryset = Project.objects.annotate(task_count=Count('tasks'))
    
    # permissions.AllowAny is in a bracket because permission_classes expects a list or tuple.
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        # For now, we will just save the project without an owner.
        # In the future, we will set the owner to the authenticated user.
        serializer.save(owner=self.request.user)

    # We will also want to filter the queryset to only show projects owned by the authenticated user.
    def get_queryset(self):
        user = self.request.user

        # For now, we will return all projects to test the API.
        return Project.objects.annotate(task_count=Count('tasks'))    
    