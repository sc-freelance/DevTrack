from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('projects.urls')), # This adds the "api/" prefix
]