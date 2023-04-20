# Generated by Django 4.1.7 on 2023-04-17 05:23

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('sena_research', '0006_alter_contactus_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='promoter',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='promoters', to=settings.AUTH_USER_MODEL),
        ),
    ]