import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: any[] = [
    { id: 1, nombre: 'Producto 1', precio: 10, imagenUrl: 'assets/p1.jpg', enCarrito: false  },
    { id: 2, nombre: 'Producto 2', precio: 15, imagenUrl: 'assets/p2.jpg', enCarrito: false  }
    // Más productos...
  ];

  constructor() {}

  getProductos(): any[] {
    return this.productos;
  }

  marcarEnCarrito(id: number) {
    const producto = this.productos.find(p => p.id === id);
    if (producto) {
      producto.enCarrito = true;
    }
  }

  desmarcarEnCarrito(id: number) {
    const producto = this.productos.find(p => p.id === id);
    if (producto) {
      producto.enCarrito = false;
    }
  }
}

