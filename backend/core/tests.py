from django.test import TestCase
from .models import *, Project

# Create your tests here.
class ProjectModelTest(TestCase):
    def test_project_creation(self):
        project = Project.objects.create(
            title = "DevTrack",
            description = "A project management tool for developers.",
            status = "active"
        )
        self.assertEqual(project.title, "DevTrack")
        self.assertEqual(project.description, "A project management tool for developers.")
        self.assertEqual(project.status, "active")