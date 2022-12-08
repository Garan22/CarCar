from django.urls import path
from .views import api_list_salespersons, api_list_customers, api_list_automobileVO, api_show_salesperson, api_show_customer

urlpatterns = [
    path("salesteam/", api_list_salespersons, name="api_create_salesperson"),
    path("customers/", api_list_customers, name="api_create_customer" ),
    path("automobiles/", api_list_automobileVO, name="api_list_automobiles" ),
    path("salesteam/<int:pk>/", api_show_salesperson, name="api_show_salesperson"),
    path("customers/<int:pk>/", api_show_customer, name="api_show_customer"),
]
