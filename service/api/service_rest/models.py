from django.db import models

# Create your models here.

class AutoTechnician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class ServiceAppointment(models.Model):
    vin = models.CharField(max_length=17)
    customer_name = models.CharField(max_length=20)
    date = models.CharField(max_length=10)
    time = models.CharField(max_length=10)
    service_reason = models.CharField(max_length=100)
    dealership_purchase = models.BooleanField(default=False)

    technician = models.ForeignKey(
        AutoTechnician, related_name="ServiceAppointment", on_delete=models.CASCADE
    )

    def __str__(self):
        return self.customer_name


class AutomobileVO(models.Model):
    import_href =  models.CharField(max_length=200, blank=True, null=True, unique=True)
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)


    def __str__(self):
        return "Auto Vin -" + self.vin
