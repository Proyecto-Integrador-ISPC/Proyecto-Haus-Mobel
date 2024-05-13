from django.db import models

class TipoProductos(models.Model):
    idTipoProducto = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=200, blank=False)
    class Meta:
        db_table = 'TipoProductos'
        verbose_name='Tipo de producto'
        verbose_name_plural='Tipos de Productos'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
    
class Productos(models.Model):
    idProducto = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=200, blank=False)
    precio = models.FloatField(blank=False)
    idTipoProducto = models.ForeignKey(TipoProductos, on_delete=models.CASCADE)
    imagen = models.ImageField(upload_to = 'static/images', blank = True)
    class Meta:
        db_table = 'Productos'
        verbose_name='Producto'
        verbose_name_plural='Productos'
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
    
class Facturas(models.Model):
    nroFactura = models.models.IntegerField(primary_key=True)
    fecha = models.DateField(blank=False)
    modoPago = models.CharField(max_length=200, blank=False)
    cuil = models.CharField(max_length=200, blank=False)
    class Meta:
        db_table = 'Facturas'
        verbose_name='Factura'
        verbose_name_plural='Facturas'
    def __unicode__(self):
        return self.nroFactura
    def __str__(self):
        return self.nroFactura

class Detalles(models.Model):
    idDetalle = models.AutoField(primary_key=True)
    cantidad = models.IntegerField(blank=False)
    idProducto = models.ForeignKey(Productos, on_delete=models.CASCADE)
    nroFactura = models.ForeignKey(Facturas, on_delete=models.CASCADE)
    class Meta:
        db_table = 'Detalles'
        verbose_name='Detalle'
        verbose_name_plural='Detalles'
    def __unicode__(self):
        return self.idDetalle
    def __str__(self):
        return self.idDetalle

class Clientes(models.Model):
    cuil = models.models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=200, blank=False)
    apellido = models.CharField(max_length=200, blank=False)
    mail = models.CharField(max_length=200, blank=False)
    domicilio = models.CharField(max_length=200, blank=False)
    telefono = models.CharField(max_length=200, blank=False)

    class Meta:
        db_table = 'Clientes'
        verbose_name='Cliente'
        verbose_name_plural='Clientes'
    def __unicode__(self):
        return self.cuil
    def __str__(self):
        return self.cuil


class Roles(models.Model):
    idRol = models.AutoField(primary_key=True)
    descripcion = models.CharField(max_length=200, blank=False)

    class Meta:
        db_table = 'Roles'
        verbose_name='Rol'
        verbose_name_plural='Roles'
    
    def __unicode__(self):
        return self.idRol
    def __str__(self):
        return self.idRol
    

class Usuarios(models.Model):
    idUsuario = models.AutoField(primary_key=True)
    cuil = models.ForeignKey(Clientes, on_delete=models.CASCADE)
    idRol = models.ForeignKey(Roles, on_delete=models.CASCADE)
    password = models.CharField(max_length=200, blank=False)

    class Meta:
        db_table = 'Usuarios'
        verbose_name='Usuario'
        verbose_name_plural='Usuarios'
    
    def __unicode__(self):
        return self.idUsuario
    def __str__(self):
        return self.idUsuario

