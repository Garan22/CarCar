from django.urls import path
from .views import api_list_salespersons, api_list_customers

urlpatterns = [
    path("salesteam/", api_list_salespersons, name="api_create_salesperson"),
    path("customers/", api_list_customers, name="api_create_customer" ),
]
