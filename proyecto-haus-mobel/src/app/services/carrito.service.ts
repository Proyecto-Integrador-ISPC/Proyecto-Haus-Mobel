import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carritoKey = 'carrito';

  constructor() { }

  agregarAlCarrito(producto: any) {
    const carritoActual = this.obtenerCarrito();
    const nuevoCarrito = [...carritoActual, producto];
    localStorage.setItem(this.carritoKey, JSON.stringify(nuevoCarrito));
  }

  obtenerCarrito() {
    const carritoJson = localStorage.getItem(this.carritoKey);
    return carritoJson ? JSON.parse(carritoJson) : [];
  }
}