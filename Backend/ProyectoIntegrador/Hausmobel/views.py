from rest_framework import viewsets

#----------user
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from knox.models import AuthToken
from .serializer import UserSerializer, RegisterSerializer
from django.contrib.auth import login
from rest_framework import permissions
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView

from .serializer import ProductosSerializer, CarritosSerializer
from .models import Productos, Carritos

from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from django.contrib.auth.models import User
from rest_framework.views import APIView



class ProductoViewSet(viewsets.ModelViewSet):
 #permission_classes = [IsAdminUser]
 queryset=Productos.objects.all()
 serializer_class= ProductosSerializer


class CattiroViewSet(viewsets.ModelViewSet):
    #permission_classes = [IsAuthenticated]
    queryset=Carritos.objects.all()
    serializer_class= CarritosSerializer


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "user": UserSerializer(user, context=self.get_serializer_context()).data,
        "token": AuthToken.objects.create(user)[1]
})

class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)

class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

##FIN USUARIOS


# class ListarProductos(generics.ListCreateAPIView):
#     queryset = Productos.objects.all()
#     serializer_class = ProductosSerializer
#     http_method_names = ['get']
#     #permission_classes = [permissions.IsAuthenticated]
#     def list(self, request):
#         queryset = self.get_queryset()
#         serializer = ProductosSerializer(queryset, many=True)
#         if self.request.user.is_authenticated:
#             return Response(serializer.data)

# class ListarProductos(generics.ListAPIView):
#     queryset = Productos.objects.all()
#     serializer_class = ProductosSerializer
#     permission_classes = [permissions.AllowAny]

#     def get(self, request, *args, **kwargs):
#         try:
#             queryset = self.get_queryset()
#             serializer = self.get_serializer(queryset, many=True)
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         except Exception as e:
#             return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class ListarProductos(generics.ListCreateAPIView):
    queryset = Productos.objects.all()
    serializer_class = ProductosSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        try:
            queryset = self.get_queryset()
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        
class ListarCarritos(generics.ListCreateAPIView):
    queryset = Carritos.objects.all()
    serializer_class = CarritosSerializer
    http_method_names = ['get']
    #permission_classes = [permissions.IsAuthenticated]
    def list(self, request):
        queryset = self.get_queryset()
        serializer = CarritosSerializer(queryset, many=True)
       
        if self.request.user.is_authenticated:
            return Response(serializer.data)

class Confirmar(APIView):  # Retornar custom json 
    def get(self, request):
        return Response({"respuesta": "Compra realizada con exito"})
    
    