from django.test import TestCase
from .models import *, Project

# Create your tests here.
class ProjectModelTest(TestCase):
    def setUp(self):
        # This runs before every test to set up dummy data
        self.project = Project.objects.create(
            title = "DevTrack",
            description = "Building a dashboard for project management",
            status = "Active"
        )

    def test_project_creation(self):
        # Test that the project was actually saved to the SQLite DB
        self.assertTrue(isinstance(self.project, Project)) # the isinstance check ensures it's a Project instance

        # Test that the data matches
        self.assertEqual(self.project.title, "DevTrack")
        self.assertEqual(self.project.status, "Active")
        self.assertEqual(self.project.description, "Building a dashboard for project management")

    def test_string_representation(self):
        # Test that the __str__ method returns the title
        self.assertEqual(str(self.project), "DevTrack")