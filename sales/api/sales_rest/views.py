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
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"Message": "Could not create a salesperson"}
            )

            response.status_code = 400
            return response



@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_salesperson(request, pk):
    if request.method == "GET":
        try:
            salesperson = Salesperson.objects.get(id=pk)
            return JsonResponse(
                salesperson,
                encoder =SalespersonEncoder,
                safe=False,
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Employee does not exist"})
            response.status_code = 404
            return response

    elif request.method == "DELETE":
        try:
            salesperson = Salesperson.objects.get(id=pk)
            salesperson.delete()
            return JsonResponse(
                salesperson,
                encoder =SalespersonEncoder,
                safe=False,
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Employee does not exist"})
            response.status_code = 404
            return response

    else:
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.get(id=pk)
            props = ["name", "employee_id"]
            for prop in props:
                if prop in content:
                    setattr(salesperson, prop, content[prop])
            salesperson.save()
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False,
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Employee does not exist"})
            response.status_code = 404
            return response





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



@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_customer(request, pk):
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=pk)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Customer does not exist"})
            response.status_code = 404
            return response

    elif request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=pk)
            customer.delete()
            return JsonResponse(
                customer,
                encoder =CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Customer does not exist"})
            response.status_code = 404
            return response

    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.get(id=pk)
            props = ["name", "address", "phone"]
            for prop in props:
                if prop in content:
                    setattr(customer, prop, content[prop])
            customer.save()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Customer does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET"])
def api_list_automobileVO(request):
    if request.method == "GET":
        automobiles = AutomobileVO.objects.all()
        return JsonResponse({
            "automobiles": automobiles},
            encoder = AutomobileVOEncoder
        )


@require_http_methods(["GET", "POST"])
def api_list_sales_records(request, employee_id=None):
    if request.method == "GET":
        if employee_id == None:
            sales_records = SalesRecord.objects.all()
        else:
            sales_records = SalesRecord.objects.filter(salesperson=employee_id)
        return JsonResponse(
            {"sales_records": sales_records},
            encoder = SalesRecordEncoder,
            safe=False
        )

    else:
        try:
            content = json.loads(request.body)
            automobile_vin = content["automobile"]
            automobile = AutomobileVO.objects.get(vin=automobile_vin)
            content["automobile"] = automobile

            employee_id = content["salesperson"]
            salesperson = Salesperson.objects.get(id=employee_id)
            content["salesperson"] = salesperson

            customer_id = content["customer"]
            customer = Customer.objects.get(id=customer_id)
            content["customer"] = customer

            sales_record = SalesRecord.objects.create(**content)
            automobile.vehicleSold=True
            automobile.save()
            return JsonResponse(
                sales_record,
                encoder=SalesRecordEncoder,
                safe=False
            )

        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Salesrep does not exist"})
            response.status_code = 404
            return response
