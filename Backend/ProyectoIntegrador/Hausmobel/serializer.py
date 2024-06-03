from rest_framework import serializers
from .models import Usuarios
from .models import Productos


class UsuariosSerializer(serializers.ModelSerializer):
 class Meta:
  model= Usuarios
  fields='__all__'
  #fields=('nombre','observacion')

class ProductoSerializer(serializers.ModelSerializer):
 class Meta:
  model= Productos
  fields='__all__'