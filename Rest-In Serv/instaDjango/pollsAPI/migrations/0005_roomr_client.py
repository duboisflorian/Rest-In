# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-16 18:50
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pollsAPI', '0004_hotel_hotelier'),
    ]

    operations = [
        migrations.AddField(
            model_name='roomr',
            name='client',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='client', to='pollsAPI.User'),
            preserve_default=False,
        ),
    ]
