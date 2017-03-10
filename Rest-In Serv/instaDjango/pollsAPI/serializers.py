from rest_framework import serializers
from pollsAPI.models import Hotel, City, RoomType, Room, RoomD, RoomImage, RoomR

class RoomTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomType
        fields = '__all__'

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = '__all__'

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'

# class CityHSerializer(serializers.ModelSerializer):
#     hotels = HotelSerializer(
#         read_only=True,
#         many=True,
#     )
#     class Meta:
#         model = City
#         fields = '__all__'


