from django.contrib import admin
from .models import *



class TipoProductosAdmin(admin.ModelAdmin):
    list_display = ('idTipoProducto','nombre')
class ProductosAdmin(admin.ModelAdmin):
    list_display = ('idProducto','nombre','precio','idTipoProducto','imagen')
class FacturasAdmin(admin.ModelAdmin):
    list_display = ('nroFactura','fecha','modoPago','cuil')
class DetallesAdmin(admin.ModelAdmin):
    list_display = ('idDetalle','cantidad','idProducto','nroFactura')
class ClientesAdmin(admin.ModelAdmin):
    list_display = ('cuil','nombre','apellido','mail','domicilio','telefono')
class RolesAdmin(admin.ModelAdmin):
    list_display = ('idRol','descripcion')
class CarritosAdmin(admin.ModelAdmin):
    list_display = ('idVenta','fecha','idProducto','cantidad','importe','Idusuario')



admin.site.register(TipoProductos,TipoProductosAdmin)
admin.site.register(Productos, ProductosAdmin)
admin.site.register(Facturas, FacturasAdmin)
admin.site.register(Detalles, DetallesAdmin)
admin.site.register(Clientes, ClientesAdmin)
admin.site.register(Roles, RolesAdmin)
admin.site.register(Carritos, CarritosAdmin)
