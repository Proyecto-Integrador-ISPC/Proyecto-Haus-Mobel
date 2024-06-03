from django.urls import path, include
from rest_framework import routers
from Hausmobel import views

router= routers.DefaultRouter()
router.register(r'usuario',views.UsuarioViewSet)
router.register(r'producto',views.ProductoViewSet)

#----
urlpatterns = [
     path('', include(router.urls)),
]
