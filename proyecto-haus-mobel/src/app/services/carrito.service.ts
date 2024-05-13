import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private storageKey = 'carrito'; // Clave para el almacenamiento local

  constructor() { }

  agregarAlCarrito(producto: any) {
    let itemsEnCarrito = this.obtenerItemsEnCarrito() || []; // Obtener productos del carrito
    itemsEnCarrito.push(producto); // Agregar el nuevo producto
    localStorage.setItem(this.storageKey, JSON.stringify(itemsEnCarrito)); // Guardar en local storage
    console.log('Producto agregado al carrito:', producto); // Agregar un console.log para verificar
    console.log('Productos en el carrito:', itemsEnCarrito); // Verificar la lista actualizada
  }

  obtenerItemsEnCarrito(): any[] {
    let itemsEnCarrito = localStorage.getItem(this.storageKey); // Obtener productos del local storage
    return itemsEnCarrito ? JSON.parse(itemsEnCarrito) : []; // Devolver los productos o un array vacío si no hay nada
  }

  limpiarCarrito() {
    localStorage.removeItem(this.storageKey); // Limpiar el carrito del local storage
  }
}

