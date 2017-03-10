from pollsAPI.models import Hotel , City , RoomType
from pollsAPI.serializers import HotelSerializer , CitySerializer, RoomTypeSerializer, CityHSerializer
from rest_framework.decorators import api_view, detail_route
from rest_framework.response import Response
from rest_framework import status


@api_view(['GET', 'POST'])
def CityList(request, format=None):

    if request.method == 'GET':
        cities = City.objects.all()
        serializer = CitySerializer(cities, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def CityHList(request, format=None):

    if request.method == 'GET':
        citiesh = City.objects.all()
        serializer = CityHSerializer(citiesh, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CityHSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def HotelList(request, format=None):

    if request.method == 'GET':
        hotels = Hotel.objects.all()
        serializer = HotelSerializer(hotels, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = HotelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def RoomTypeList(request, format=None):

    if request.method == 'GET':
        room_types = RoomType.objects.all()
        serializer = RoomTypeSerializer(room_types, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RoomTypeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def CityDetail(request, pk,format=None):
    """
    Retrieve, update or delete a snippet instance.
    """
    try:
        city = City.objects.get(pk=pk)
    except City.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CitySerializer(city)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CitySerializer(city, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        city.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def HotelDetail(request, pk,format=None):
    """
    Retrieve, update or delete a snippet instance.
    """
    try:
        hotel = Hotel.objects.get(pk=pk)
    except Hotel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = HotelSerializer(hotel)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = HotelSerializer(hotel, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        hotel.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
def RoomTypeDetail(request, pk,format=None):
    """
    Retrieve, update or delete a snippet instance.
    """
    try:
        room_types = RoomType.objects.get(pk=pk)
    except RoomType.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RoomTypeSerializer(room_types)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RoomTypeSerializer(room_types, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        room_types.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def CityHDetail(request, pk,format=None):
    """
    Retrieve, update or delete a snippet instance.
    """
    try:
        cityh = City.objects.get(pk=pk)
    except City.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CityHSerializer(cityh)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CityHSerializer(cityh, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        cityh.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
