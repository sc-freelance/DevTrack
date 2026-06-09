from django.contrib.auth.models import User 
from django.db.models import Count 
from rest_framework import generics, permissions, viewsets 
from .models import Project 
from .serializers import ProjectSerializer 

# 🌟 Name fixed to match what urls.py expects
class ProjectListCreateView(generics.ListCreateAPIView):
    serializer_class = ProjectSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        # Annotate so task_count is always available to the serializer
        return Project.objects.annotate(task_count=Count('tasks'))
    
    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(owner=self.request.user)
        else:
            serializer.save(owner=None) 

# 🌟 Updated this to RetrieveUpdateDestroyAPIView so it handles GET, PUT, and DELETE all in one place!
class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.annotate(task_count=Count('tasks'))
    serializer_class = ProjectSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'id' # Tells Django to look for 'id' instead of 'pk' in the URL