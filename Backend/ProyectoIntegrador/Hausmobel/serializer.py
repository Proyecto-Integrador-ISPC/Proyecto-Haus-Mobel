from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Productos, Carritos

class ProductosSerializer(serializers.ModelSerializer):
 class Meta:
  model= Productos
  fields='__all__'
  

class CarritosSerializer(serializers.ModelSerializer):
 class Meta:
  model= Carritos
  fields='__all__'

#----------user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

        return user
