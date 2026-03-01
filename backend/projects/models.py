from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200) # Title of the project
    description = models.TextField() # Brief description of the project
    content = models.JSONField(default=dict) # Store project content as JSON
    progress_percentage = models.IntegerField(default=0) # Progress percentage of the project

    