from django.db import models

class City(models.Model):
    city_name = models.CharField(max_length=200)
    city_lat = models.FloatField(default=0)
    city_long = models.FloatField(default=0)
    def __str__(self):
        return self.city_name

class Hotel(models.Model):
    city = models.ForeignKey(City, related_name='hotels', on_delete=models.CASCADE)
    hotel_name = models.CharField(max_length=200)
    hotel_lat = models.FloatField(default=0)
    hotel_long = models.FloatField(default=0)
    def __str__(self):
        return self.hotel_name