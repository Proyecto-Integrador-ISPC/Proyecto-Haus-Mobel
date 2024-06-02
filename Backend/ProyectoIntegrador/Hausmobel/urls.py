from django.urls import path, include
from rest_framework import routers
from views import UsuarioViewSet


router= routers.DefaultRouter()
router.register(r'aula',UsuarioViewSet)
#----
urlpatterns = [
     path('', include(router.urls)),
]
