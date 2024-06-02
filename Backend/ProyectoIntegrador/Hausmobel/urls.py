from django.urls import path, include
from rest_framework import routers
<<<<<<< HEAD
from Hausmobel import views

router= routers.DefaultRouter()
router.register(r'usuario',views.UsuarioViewSet)
#----
urlpatterns = [
     path('', include(router.urls)),
]
=======
from views import UsuarioViewSet


router= routers.DefaultRouter()
router.register(r'aula',UsuarioViewSet)
#----
urlpatterns = [
     path('', include(router.urls)),
]
>>>>>>> 26770838a47d980cbffb40dcf51ccd043bc10ab3
