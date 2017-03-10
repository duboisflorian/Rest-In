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

class RoomImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomImage
        fields = '__all__'

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'

class RoomRSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomR
        fields = '__all__'

class RoomDSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomD
        fields = '__all__'

class CityHSerializer(serializers.ModelSerializer):
    hotels = HotelSerializer(
        read_only=True,
        many=True,
    )
    class Meta:
        model = City
        fields = '__all__'

