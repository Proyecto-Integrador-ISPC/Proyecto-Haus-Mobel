import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {
  itemsEnCarrito: any[] = [];

  constructor() { }

  agregarAlCarrito(producto: any) {
    this.itemsEnCarrito.push(producto);
  }

  obtenerItemsEnCarrito() {
    return this.itemsEnCarrito;
  }

  limpiarCarrito() {
    this.itemsEnCarrito = [];
    return this.itemsEnCarrito;
  }
}
