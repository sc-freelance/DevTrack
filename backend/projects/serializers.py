from rest_framework import serializers
from .models import Project, Task
from rest_framework.validators import UniqueTogetherValidator # Import UniqueTogetherValidator for enforcing unique constraints on fields

# Serializer for the project dashboard, including task count
class projectDashboardSerializer(serializers.ModelSerializer):
    task_count = serializers.IntegerField(read_only=True, default=0)

    # Ensure that the combination of 'name' and 'owner' is unique
    class Meta:
        model = Project
        fields = ['id', 'name', 'description', 'owner', 'created_at', 'updated_at', 'task_count']
        validators = [
            UniqueTogetherValidator(
                queryset=Project.objects.all(),
                fields=['title'],
                message="A project with this name already exists for this owner."
            )
        ]

class TaskSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Task
        fields = ['id', 'project', 'title', 'description', 'status', 'created_at', 'updated_at']