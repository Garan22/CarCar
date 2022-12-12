from django.urls import path
from .views import (
    api_AutoTechnician_list, api_AutoTechnician_detail, api_ServiceAppointments_list, api_ServiceAppointment_detail, api_AutomovileVO_list
)

urlpatterns = [
    path("autotechnician/", api_AutoTechnician_list, name="api_autotechnician"),
    path("autotechnician/<int:pk>/", api_AutoTechnician_detail, name="api_autotechnician_detail"),
    path("serviceappointments/", api_ServiceAppointments_list, name="api_ServiceAppointments_list"),
    path("serviceappointments/<int:pk>/", api_ServiceAppointment_detail, name="api_ServiceAppointment_detail"),
    path("automobilesVO/", api_AutomovileVO_list, name="api_AutomovileVO_list" )

]
