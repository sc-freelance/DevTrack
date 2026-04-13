from django.db import models
from datetime import datetime
from django.contrib.auth.models import User # Import User model for authentication

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True) # SlugField is a field that is used to create URL-friendly representations of the category name. It is unique to ensure that each category has a unique URL.
    

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Task(models.Model):
    project = models.ForeignKey(Project, related_name='tasks', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    is_completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    owner = models.ForeignKey(User, related_name='tasks', on_delete = models.CASCADE)
    category = models.ForeignKey(Category, related_name='tasks', on_delete=models.SET_NULL, null=True, blank=True) # SET_NULL means that if the category is deleted, the category field in the task will be set to null instead of deleting the task.
    priorities = [
        ('Low', 'Low'),
        ('Medium', 'Medium'),
        ('High', 'High'),
    ]
    priority = models.CharField(max_length=10, choices=priorities, default='Medium')
    null = True

    def __str__(self):
        return f"{self.title} ({self.project.title})"

