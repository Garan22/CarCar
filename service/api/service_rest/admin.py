from django.contrib import admin
from .models import AutomobileVO, AutoTechnician, ServiceAppointment
# Register your models here.
admin.site.register(AutomobileVO)
admin.site.register(AutoTechnician)
admin.site.register(ServiceAppointment)
