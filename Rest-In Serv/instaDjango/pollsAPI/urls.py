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
    url('^users/$', views.UserList),
    url('^users/(?P<pk>[0-9]+)$', views.UserDetail),
    url('^hotels_roomtypes/$', views.HotelRTList),
    url('^hotels_roomtypes/(?P<pk>[0-9]+)$', views.HotelRTDetail),
    url('^cities/$', views.CityList),
    url('^cities/(?P<pk>[0-9]+)$', views.CityDetail),
    url('^citiesh/$', views.CityHList),
    url('^citiesh/(?P<pk>[0-9]+)$', views.CityHDetail),
    url('^roomtypes/$', views.RoomTypeList),
    url('^roomtypes/(?P<pk>[0-9]+)$', views.RoomTypeDetail),
    url('^room/$', views.RoomList),
    url('^room/(?P<pk>[0-9]+)$', views.RoomDetail),
    url('^roomR/$', views.RoomRList),
    url('^roomR/(?P<pk>[0-9]+)$', views.RoomRDetail),
    url('^roomD/$', views.RoomDList),
    url('^roomD/(?P<pk>[0-9]+)$', views.RoomDDetail),
    url('^roomimages/$', views.RoomImagesList),
    url('^roomimages/(?P<pk>[0-9]+)$', views.RoomImagesDetail),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

urlpatterns = format_suffix_patterns(urlpatterns)