from rest_framework import serializers
from .model import Project

# Serializer for the project dashboard, including task count
class projectDashboardSerializer(serializers.ModelSerializer):
    task_count = serializers.IntegerField(read_only=True)

    class Meta:
        model = Project
        fields = ['id', 'name', 'description', 'set count', 'created_at', 'updated_at', 'task_count']