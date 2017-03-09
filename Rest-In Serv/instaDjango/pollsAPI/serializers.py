from rest_framework import serializers
from pollsAPI.models import Hotel, City

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = '__all__'

class CitySerializer(serializers.ModelSerializer):
    hotels = HotelSerializer(
        read_only=True,
        many=True,
    )
    class Meta:
        model = City
        fields = ('id','city_name','city_lat','city_long','hotels')

