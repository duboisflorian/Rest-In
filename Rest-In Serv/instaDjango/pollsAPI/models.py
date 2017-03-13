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
    hotel_desc = models.CharField(max_length=200,blank=True)
    hotel_lat = models.FloatField(default=0)
    hotel_long = models.FloatField(default=0)
    adr = models.CharField(max_length=200,blank=True)
    image = models.CharField(max_length=200,blank=True)
    stars = models.FloatField(default=0)
    def __str__(self):
        return (self.hotel_name,self.hotel_desc,self.adress,self.image)

class RoomType(models.Model):
    hotel = models.ForeignKey(Hotel, related_name='roomtypes', on_delete=models.CASCADE)
    type_name = models.CharField(max_length=200)
    type_desc = models.CharField(max_length=200,blank=True)
    type_price = models.FloatField(default=0)
    def __str__(self):
        return (self.type_name,self.type_desc)

class RoomImage(models.Model):
    room_type = models.ForeignKey(RoomType, related_name='images', on_delete=models.CASCADE)
    image_path = models.CharField(max_length=200)

    def __str__(self):
        return self.image_path

class Room(models.Model):
    room_type = models.ForeignKey(RoomType, related_name='rooms', on_delete=models.CASCADE)
    room_name = models.CharField(max_length=200)
    room_floor = models.FloatField(default=0)

    def __str__(self):
        return self.room_name

class RoomD(models.Model):
    room = models.ForeignKey(Room, related_name='dispo', on_delete=models.CASCADE)
    dispo_start = models.DateField(null=True, blank=True)
    dispo_end = models.DateField(null=True, blank=True)

class RoomR(models.Model):
    room = models.ForeignKey(Room, related_name='reserv', on_delete=models.CASCADE)
    reserv_start = models.DateField(null=True, blank=True)
    reserv_end = models.DateField(null=True, blank=True)

class User(models.Model):
    name = models.CharField(max_length=200)
    mail = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    type = models.FloatField(default=0)

    def __str__(self):
        return self.name



