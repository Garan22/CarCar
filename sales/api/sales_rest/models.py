from django.db import models
from django.urls import reverse

# Create your models here.

class AutomobileVO(models.Model):
    import_href=models.CharField(max_length=200, blank=True, null=True, unique=True)
    color=models.CharField(max_length=50)
    year=models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin



class Salesperson(models.Model):
    name = models.CharField(max_length=100)
    employee_id = models.PositiveIntegerField(unique=True)

    def __str__(self):
        return self.name

    def __str__(self):
        return self.employee_id


class Customer(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone = models.PositiveSmallIntegerField()

    def __str__(self):
        return self.name


class Salesrecord(models.Model):

    price = models.DecimalField(max_digits=12, decimal_places=2)

    automobile= models.ForeignKey(
        AutomobileVO,
        related_name ="salesrecords",
        on_delete=models.CASCADE,
    )

    salesperson=models.ForeignKey(
        Salesperson,
        related_name="salesrecords",
        on_delete=models.CASCADE,
    )

    customer=models.ForeignKey(
        Customer,
        related_name="salesrecords",
        on_delete=models.CASCADE,

    )

    def get_api_url(self):
        return reverse("api_sales_record", kwargs={"pk": self.id})
