# Generated by Django 4.2 on 2024-06-14 19:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Hausmobel', '0003_carritos'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='carritos',
            name='fecha',
        ),
    ]
