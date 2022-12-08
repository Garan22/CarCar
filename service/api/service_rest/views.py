from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import (AutoTechnicianEncoder, ServiceAppointmentEncoder, AutomobileVO)
from .models import AutoTechnician, ServiceAppointment, AutomobileVO

@require_http_methods(["GET","POST"])
def api_AutoTechnician_list(request):
    if request.method == "GET":
        technician = AutoTechnician.objects.all()
        return JsonResponse(
            {"technician": technician},
            encoder=AutoTechnicianEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            technician = AutoTechnician.objects.create(**content)
            return JsonResponse(
                technician, encoder=AutoTechnicianEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"Message": "Could not create technician"}
            )
            response.status_code = 400
            return response

@require_http_methods(["GET","PUT","DELETE"])
def api_AutoTechnician_detail(request):
    if request.method == "GET":
        try:
            technician = AutoTechnician.objects.get(id=pk)
            return JsonResponse
