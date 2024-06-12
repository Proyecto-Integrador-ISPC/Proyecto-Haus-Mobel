from django.urls import path, include
from rest_framework import routers
from Hausmobel import views

#-------------------user
from knox import views as knox_views
from .views import LoginAPI
from .views import RegisterAPI
from .views import UserAPI
#-------------------fin_user

router= routers.DefaultRouter()
router.register(r'',views.ProductoViewSet)

urlpatterns = [
#-------------------user

     path('registro', RegisterAPI.as_view(), name='register'),
     path('login', LoginAPI.as_view(), name='login'),
     path('logout', knox_views.LogoutView.as_view(), name='logout'),
     path('logoutall', knox_views.LogoutAllView.as_view(), name='logoutall'),
     path('user', UserAPI.as_view(), name="user"),

     path('', include(router.urls)),
]

