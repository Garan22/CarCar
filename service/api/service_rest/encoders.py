from common.json import ModelEncoder
from .models import AutoTechnician, ServiceAppointment, AutomobileVO

class AutoTechnicianEncoder(ModelEncoder):
    model = AutoTechnician
    properties = [
        "id",
        "name",
        "employee_number",
    ]

class ServiceAppointmentEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "id",
        "vin",
        "customer_name",
        "date",
        "time",
        "service_reason",
        "technician"
    ]
    encoders = {
        "technician": AutoTechnicianEncoder(),
    }

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "color",
        "year",
        "vin",
    ]
