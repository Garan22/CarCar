from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import (AutoTechnicianEncoder, ServiceAppointmentEncoder, AutomobileVOEncoder)
from .models import AutoTechnician, ServiceAppointment, AutomobileVO

@require_http_methods(["GET","POST"])
def api_AutoTechnician_list(request):
    if request.method == "GET":
        technician = AutoTechnician.objects.all()
        return JsonResponse(
            {"technician": technician},
            encoder=AutoTechnicianEncoder, safe=False,
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
def api_AutoTechnician_detail(request, pk):
    if request.method == "GET":
        try:
            technician = AutoTechnician.objects.get(id=pk)
            return JsonResponse(
                technician, encoder=AutoTechnicianEncoder, safe=False,
            )
        except AutoTechnician.DoesNotExist:
            response = JsonResponse({
                "message": "Auto technician does not exist"
            })
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            technician = AutoTechnician.objects.get(id=pk)
            technician.delete()
            return JsonResponse(
                technician, encoder=AutoTechnicianEncoder,
                safe=False,
            )
        except AutoTechnician.DoesNotExist:
            return JsonResponse({
                "message": "Auto technician has been deleted"
            })
    else: #"PUT"
        try:
            content = json.loads(request.body)
            technician = AutoTechnician.objects.get(id=pk)
            properties = [
                "name",
                "employee_id",
            ]
            for property in properties:
                if property in content:
                    setattr(technician, property, content[property])
            technician.save()
            return JsonResponse(
                technician, encoder=AutoTechnicianEncoder,
                safe=False
            )
        except AutoTechnician.DoesNotExist:
            response = JsonResponse({
                "message": "Auto technician does not exist"
            })
            response.status_code = 404
            return response

@require_http_methods(["GET", "POST"])
def api_ServiceAppointments_list(request):
    if request.method == "GET":
        service_appointments = ServiceAppointment.objects.all()
        return JsonResponse(
            {"service_appointments": service_appointments}, encoder=ServiceAppointmentEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            service_appointments = ServiceAppointment.objects.create(**content)
            return JsonResponse(
                service_appointments, encoder=ServiceAppointmentEncoder,
                safe=False
            )
        except ServiceAppointment.DoesNotExist:
            response = JsonResponse (
                { "message": "Could not create this Service appointment"}
                )
            response.status_code = 400
            return response

@require_http_methods(["GET","PUT","DELETE"])
def api_ServiceAppointment_detail(request, pk):
    if request.method == "GET":
        try:
            service_appointment = ServiceAppointment.objects.get(id=pk)
            return JsonResponse(
                service_appointment, encoder=ServiceAppointmentEncoder, safe=False,
            )
        except ServiceAppointment.DoesNotExist:
            response = JsonResponse({
                "message": "Service appointment does not exist"
            })
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            service_appointment = ServiceAppointment.objects.get(id=pk)
            service_appointment.delete()
            return JsonResponse(
                service_appointment, encoder=ServiceAppointmentEncoder, safe=True
            )
        except ServiceAppointment.DoesNotExist:
            return JsonResponse({
                "message": "Service appointment has been deleted"
            })

@require_http_methods(["GET"])
def api_AutomovileVO_list(request):
    if request.method == "GET":
        autos = AutomobileVO.objects.all()
        return JsonResponse(
            {"autos": autos},
            AutomobileVOEncoder, safe=False
        )
