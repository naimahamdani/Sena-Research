# Generated by Django 4.1.7 on 2023-02-23 15:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user_account', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='promoter',
            name='bio',
        ),
        migrations.RemoveField(
            model_name='promoter',
            name='birth_date',
        ),
        migrations.RemoveField(
            model_name='promoter',
            name='location',
        ),
    ]
