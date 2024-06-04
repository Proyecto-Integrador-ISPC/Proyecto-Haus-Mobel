from django.shortcuts import render
from rest_framework import viewsets
from .serializer import UsuariosSerializer
from .models import Usuarios
from .serializer import ProductoSerializer
from .models import Productos


class UsuarioViewSet(viewsets.ModelViewSet):
 queryset=Usuarios.objects.all()
 serializer_class= UsuariosSerializer

class ProductoViewSet(viewsets.ModelViewSet):
 queryset=Productos.objects.all()
 serializer_class= ProductoSerializer