# Generated by Django 4.0.3 on 2022-12-09 23:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_automobilevo_dealership_purchase'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='automobilevo',
            name='dealership_purchase',
        ),
        migrations.AddField(
            model_name='serviceappointment',
            name='dealership_purchase',
            field=models.BooleanField(default=False),
        ),
    ]