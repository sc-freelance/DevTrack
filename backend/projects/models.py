from django.utils.text import slugify # Import slugify to create URL-friendly slugs for categories
from django.db import models
from datetime import datetime
from django.contrib.auth.models import User # Import User model for authentication

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True) # SlugField is a field that is used to create URL-friendly representations of the category name. It is unique to ensure that each category has a unique URL.

    def save(self, *args, **kwargs): # *args and **kwargs are used to allow for any number of positional and keyword arguments to be passed to the save method. This is necessary because we are overriding the default save method of the model.
        if not self.slug:
            self.slug = slugify(self.name) # Automatically generate a slug from the category name if it doesn't already exist.
        super().save(*args, **kwargs) # Call the parent save method to save the category to the database.

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

class Developer(models.Model):
    user = models.CharField(max_length=100)
    tasks = models.ManyToManyField(Task, related_name='developers') # ManyToManyField is used to create a many-to-many relationship between developers and tasks. This means that a developer can be assigned to multiple tasks, and a task can have multiple developers assigned to it.

    def __str__(self):
        return self.user

