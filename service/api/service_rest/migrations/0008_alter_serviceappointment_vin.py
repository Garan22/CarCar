# Generated by Django 4.0.3 on 2022-12-13 00:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0007_remove_serviceappointment_cancel_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='serviceappointment',
            name='vin',
            field=models.CharField(max_length=17),
        ),
    ]