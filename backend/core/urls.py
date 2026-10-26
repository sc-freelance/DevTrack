from django.urls import path
from .views import health

urlpatterns = [
    path('health/', health, name='health'),  # GET /api/health/ - quick "is the API up?" check
]
