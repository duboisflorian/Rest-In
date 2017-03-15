from pollsAPI.models import Hotel , City , RoomType , Room , RoomR, RoomD, RoomImage, User
from pollsAPI.serializers import HotelSerializer , UserHSerializer, RoomTypeImagesSerializer,HotelRTSerializer , UserSerializer ,CitySerializer, RoomTypeSerializer, CityHSerializer, RoomDSerializer , RoomImageSerializer, RoomRSerializer, RoomSerializer
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
def UserList(request, format=None):

    if request.method == 'GET':
        u = User.objects.all()
        serializer = UserSerializer(u, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def HotelRTList(request, format=None):

    if request.method == 'GET':
        hotels = Hotel.objects.all()
        serializer = HotelRTSerializer(hotels, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = HotelRTSerializer(data=request.data)
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

@api_view(['GET', 'POST'])
def RoomList(request, format=None):

    if request.method == 'GET':
        room = Room.objects.all()
        serializer = RoomSerializer(room, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RoomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def RoomRList(request, format=None):

    if request.method == 'GET':
        room = RoomR.objects.all()
        serializer = RoomRSerializer(room, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RoomRSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def RoomDList(request, format=None):

    if request.method == 'GET':
        room = RoomD.objects.all()
        serializer = RoomDSerializer(room, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RoomDSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def RoomImagesList(request, format=None):

    if request.method == 'GET':
        room_images = RoomImage.objects.all()
        serializer = RoomImageSerializer(room_images, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RoomImageSerializer(data=request.data)
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
def HotelRTDetail(request, pk,format=None):
    """
    Retrieve, update or delete a snippet instance.
    """
    try:
        hotel = Hotel.objects.get(pk=pk)
    except Hotel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = HotelRTSerializer(hotel)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = HotelRTSerializer(hotel, data=request.data)
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
        return Response("supprime")

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

@api_view(['GET', 'PUT', 'DELETE'])
def RoomImagesDetail(request, pk,format=None):
    """
    Retrieve, update or delete a snippet instance.
    """
    try:
        room_images = RoomImage.objects.get(pk=pk)
    except RoomImage.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RoomImageSerializer(room_images)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RoomImageSerializer(room_images, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        room_images.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def RoomDetail(request, pk,format=None):
    """
    Retrieve, update or delete a snippet instance.
    """
    try:
        room = Room.objects.get(pk=pk)
    except Room.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RoomSerializer(room)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RoomSerializer(room, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        room.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def RoomRDetail(request, pk,format=None):
    """
    Retrieve, update or delete a snippet instance.
    """
    try:
        room = RoomR.objects.get(pk=pk)
    except RoomR.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RoomRSerializer(room)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RoomRSerializer(room, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        room.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def RoomDDetail(request, pk,format=None):
    """
    Retrieve, update or delete a snippet instance.
    """
    try:
        room = RoomD.objects.get(pk=pk)
    except RoomD.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RoomDSerializer(room)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RoomDSerializer(room, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        room.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def UserDetail(request, pk,format=None):
    """
    Retrieve, update or delete a snippet instance.
    """
    try:
        u = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(u)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UserSerializer(u, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        u.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def UserAuth(request, pk,pr, format=None):

    try:
        u = User.objects.get(mail=pk,password=pr)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(u)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = UserSerializer(u, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        u.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def VerifMail(request, pk, format=None):

    try:
        u = User.objects.get(mail=pk)
    except User.DoesNotExist:
        return Response("existepas")

    if request.method == 'GET':
        serializer = UserSerializer(u)
        return Response("existe")

@api_view(['GET'])
def UserType(request, pk, format=None):

    try:
        u = User.objects.get(id=pk)
    except User.DoesNotExist:
        return Response("0")

    if request.method == 'GET':
        if u.type==0.0:
            return Response("0")
        else:
            return Response("1")

@api_view(['GET'])
def AddUser(request, name, mail, pwd, format=None):

        User.objects.create(name=name,mail=mail,password=pwd,type=0.0)
        return Response("cree")

@api_view(['GET', 'DELETE'])
def InfoHotel(request, pk, format=None):

    try:
        r = RoomType.objects.filter(hotel=pk)
    except RoomType.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RoomTypeImagesSerializer(r, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RoomTypeImagesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def UserH(request, pk, format=None):

    try:
        r = User.objects.get(id=pk)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserHSerializer(r)
        return Response(serializer.data)

@api_view(['GET'])
def RTImages(request, pk, format=None):

    try:
        r = RoomType.objects.filter(id=pk)
    except RoomType.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RoomTypeImagesSerializer(r, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def AddRT(request, name, desc, price,id, format=None):

    h = Hotel.objects.get(id=id)
    RoomType.objects.create(type_name=name,type_desc=desc,type_price=price,hotel=h)
    return Response("cree")
