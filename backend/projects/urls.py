from django.urls import path
from .views import ProjectListCreateView, ProjectDetailView

urlpatterns = [
    # GET /api/projects/ - Lists all projects
    # POST /api/projects/ - Creates a new project
    path('projects/', ProjectListCreateView.as_view(), name='project-list-create'),
    
    # GET /api/projects/<id>/ - Retrieves a single project
    # PUT /api/projects/<id>/ - Updates a project
    # DELETE /api/projects/<id>/ - Deletes a project (Matches frontend perfectly!)
    path('projects/<int:id>/', ProjectDetailView.as_view(), name='project-detail'),
]