from django.contrib import admin

# Register your models here.
from .models import AutomobileVO, Salesperson, Customer, Salesrecord

admin.site.register(AutomobileVO)
admin.site.register(Salesperson)
admin.site.register(Customer)
admin.site.register(Salesrecord)
