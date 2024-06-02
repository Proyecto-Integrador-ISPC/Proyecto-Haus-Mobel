from django.urls import path, include
from rest_framework import routers
from Hausmobel import views

router= routers.DefaultRouter()
router.register(r'usuario',views.UsuarioViewSet)
#----
urlpatterns = [
     path('', include(router.urls)),
]

