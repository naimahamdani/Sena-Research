# Generated by Django 4.1.7 on 2023-04-09 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sena_research', '0003_remove_service_service_service_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='status',
            field=models.CharField(choices=[('Approved', 'Approved'), ('Rejected', 'Rejected'), ('Proccessing', 'Proccessing')], default='Proccessing', max_length=25),
        ),
    ]
