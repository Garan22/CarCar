from django.shortcuts import render
from .encoders import AutomobileVOEncoder, CustomerEncoder, SalespersonEncoder, SalesRecordEncoder
from .models import AutomobileVO, Customer, Salesperson, SalesRecord
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

# Create your views here.

@require_http_methods(["GET", "POST"])
def api_list_salespersons(request):
    if request.method == "GET":
        salesteam = Salesperson.objects.all()
        return JsonResponse(
            {"Sales_Team": salesteam},
            encoder=SalespersonEncoder
        )

    else:
        content = json.loads(request.body)
        salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False
        )

@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse({
            "customers": customers},
            encoder=CustomerEncoder,
        )

    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )
