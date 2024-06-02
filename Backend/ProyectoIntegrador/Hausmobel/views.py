from django.shortcuts import render
from rest_framework import viewsets
from .serializer import UsuariosSerializer
from .models import Usuarios

class UsuarioViewSet(viewsets.ModelViewSet):
 queryset=Usuarios.objects.all()
 serializer_class= UsuariosSerializer