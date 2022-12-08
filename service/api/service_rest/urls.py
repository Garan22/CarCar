from django.urls import path
from .views import (
    api_AutoTechnician_list,
)

urlpatterns = [
    path("autotechnician/", api_AutoTechnician_list, name="api_autotechnician"),
]
