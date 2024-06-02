from rest_framework import serializers
<<<<<<< HEAD
from .models import Usuarios

class UsuariosSerializer(serializers.ModelSerializer):
 class Meta:
  model= Usuarios
  fields='__all__'
  #fields=('nombre','observacion')
=======
from models import Usuarios

class UsuarioSerializer(serializers.ModelSerializer):
 class Meta:
  model = Usuarios
  fields = '__all__'
>>>>>>> 26770838a47d980cbffb40dcf51ccd043bc10ab3
