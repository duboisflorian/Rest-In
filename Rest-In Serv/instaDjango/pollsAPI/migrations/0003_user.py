# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-13 13:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pollsAPI', '0002_auto_20170310_1030'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('mail', models.CharField(max_length=200)),
                ('password', models.CharField(max_length=200)),
                ('type', models.FloatField(default=0)),
            ],
        ),
    ]
