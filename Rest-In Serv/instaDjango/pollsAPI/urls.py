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
    url('^hotels/$', views.HotelList.as_view()),
    url('^hotels/(?P<pk>[0-9]+)$', views.HotelDetail.as_view()),
    url('^cities/$', views.CityList.as_view()),
    url('^cities/(?P<pk>[0-9]+)$', views.CityDetail.as_view()),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

urlpatterns = format_suffix_patterns(urlpatterns)