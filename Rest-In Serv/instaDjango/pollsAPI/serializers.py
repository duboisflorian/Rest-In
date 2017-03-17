from rest_framework import serializers
from pollsAPI.models import Hotel, City, RoomType, Room, RoomD, RoomImage, RoomR, User

class RoomImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomImage
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class RoomTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomType
        fields = '__all__'

class RoomTypeImagesSerializer(serializers.ModelSerializer):
    images = RoomImageSerializer(
        read_only=True,
        many=True,
    )
    class Meta:
        model = RoomType
        fields = '__all__'


class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = '__all__'

class HotelRTSerializer(serializers.ModelSerializer):
    roomtypes = RoomTypeImagesSerializer(
        read_only=True,
        many=True,
    )
    class Meta:
        model = Hotel
        fields = '__all__'

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
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


class UserHSerializer(serializers.ModelSerializer):
    hotel = HotelSerializer(
        read_only=True,
        many=True,
    )

    class Meta:
        model = User
        fields = '__all__'

class RoomTypeRoomSerializer(serializers.ModelSerializer):

    rooms = RoomSerializer(
        read_only=True,
        many=True,
    )
    class Meta:
        model = RoomType
        fields = '__all__'

class RoomWDispoSerializer(serializers.ModelSerializer):
    dispo = RoomDSerializer(
        read_only=True,
        many=True,
    )
    class Meta:
        model = Room
        fields = '__all__'

class RoomWReservSerializer(serializers.ModelSerializer):
    reserv = RoomRSerializer(
        read_only=True,
        many=True,
    )
    class Meta:
        model = Room
        fields = '__all__'


class ReservationRTSerializer(serializers.ModelSerializer):
    rooms = RoomWReservSerializer(
        read_only=True,
        many=True,
    )
    class Meta:
        model = RoomType
        fields = '__all__'


class ReservationHotelSerializer(serializers.ModelSerializer):
    roomtypes = ReservationRTSerializer(
        read_only=True,
        many=True,
    )
    class Meta:
        model = Hotel
        fields = '__all__'

