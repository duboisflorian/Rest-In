from django.conf.urls import url, include
from pollsAPI import views
from rest_framework.routers import DefaultRouter
from rest_framework.schemas import get_schema_view
from rest_framework.urlpatterns import format_suffix_patterns


schema_view = get_schema_view(title='Polls API')

# Create a router and register our viewsets with it.
# router = DefaultRouter()
# router.register(r'pollsAPI/hotels', views.HotelDetail.as_view())
# router.register(r'pollsAPI/cities', views.CityDetail.as_view())

# The API URLs are now determined automatically by the router.
# Additionally, we include the login URLs for the browsable API.

urlpatterns = [
    url('^schema/$', schema_view),
    url('^hotels/$', views.HotelList),
    url('^hotels/(?P<pk>[0-9]+)$', views.HotelDetail),
    url('^infohotel/(?P<pk>[A-Za-z0-9]+)$', views.InfoHotel),
    url('^users/$', views.UserList),
    url('^usertype/(?P<pk>[0-9]+)$', views.UserType),
    url('^userh/(?P<pk>[0-9]+)$', views.UserH),
    url('^ajoutuser/(?P<name>[A-Za-z0-9]+)/(?P<mail>[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+)/(?P<pwd>[A-Za-z0-9]+)$', views.AddUser),
    url('^verifmail/(?P<pk>[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+)$', views.VerifMail),
    url('^users/(?P<pk>[0-9]+)$', views.UserDetail),
    url('^usersauth/(?P<pk>[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+)/(?P<pr>[A-Za-z0-9]+)$', views.UserAuth),
    url('^hotels_roomtypes/$', views.HotelRTList),
    url('^hotels_roomtypes/(?P<pk>[0-9]+)$', views.HotelRTDetail),
    url('^cities/$', views.CityList),
    url('^cities/(?P<pk>[0-9]+)$', views.CityDetail),
    url('^citiesh/$', views.CityHList),
    url('^citiesh/(?P<pk>[0-9]+)$', views.CityHDetail),
    url('^roomtypes/$', views.RoomTypeList),
    url('^roomtypes/(?P<pk>[0-9]+)$', views.RoomTypeDetail),
    url('^roomtypesroom/(?P<pk>[0-9]+)$', views.RoomTypeRoomDetail),
    url('^room/$', views.RoomList),
    url('^room/(?P<pk>[0-9]+)$', views.RoomDetail),
    url('^roombyrt/(?P<pk>[0-9]+)$', views.RoomByRT),
    url('^roomR/$', views.RoomRList),
    url('^roomR/(?P<pk>[0-9]+)$', views.RoomRDetail),
    url('^roomD/$', views.RoomDList),
    url('^roomDispo/(?P<pk>[0-9]+)$', views.RoomDipoList),
    url('^addroom/(?P<name>[A-Za-z0-9]+)/(?P<floor>[A-Za-z0-9]+)/(?P<id>[0-9]+)$', views.AddRoom),
    url('^roomD/(?P<pk>[0-9]+)$', views.RoomDDetail),
    url('^roomimages/$', views.RoomImagesList),
    url('^rtimages/(?P<pk>[0-9]+)$', views.RTImages),
    url('^addrt/(?P<name>[A-Za-z0-9]+)/(?P<desc>[A-Za-z0-9]+)/(?P<price>[A-Za-z0-9]+)/(?P<id>[0-9]+)$', views.AddRT),
    url('^roomimages/(?P<pk>[0-9]+)$', views.RoomImagesDetail),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

urlpatterns = format_suffix_patterns(urlpatterns)