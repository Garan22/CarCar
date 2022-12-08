from common.json import ModelEncoder

from .models import AutomobileVO, Salesperson, Customer, Salesrecord

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["import_href", "color", "year", "vin", "vehicleSold"]

class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = ["id", "employee_id"]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = ["id", "name", "address", "phone"]

class SalesRecordEncoder(ModelEncoder):
    model = SalespersonEncoder
    properties = [
        "id",
        "automobile",
        "salesperson",
        "customer",
        "price"
    ]

    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalespersonEncoder(),
        "customer": CustomerEncoder(),
    }
