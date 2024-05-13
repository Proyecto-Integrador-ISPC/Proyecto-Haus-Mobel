import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {
  itemsEnCarrito: any[] = [];

  constructor() { }

//   agregarAlCarrito(producto: any) {
//     this.itemsEnCarrito.push(producto);
//   }
agregarAlCarrito(producto: any) {
  // Verifica si el producto ya está en el carrito
  const productoExistente = this.itemsEnCarrito.find(item => item.id === producto.id);

  if (productoExistente) {
    // Si el producto ya está en el carrito, aumenta la cantidad
    productoExistente.cantidad++;
  } else {
    // Si el producto no está en el carrito, agrégalo
    this.itemsEnCarrito.push({ ...producto, cantidad: 1 });
    console.log('Producto agregado al carrito:', producto);
  }
  console.log('Productos en el carrito:', this.itemsEnCarrito);
}
  

  obtenerItemsEnCarrito() {
    return this.itemsEnCarrito;
  }

  limpiarCarrito() {
    this.itemsEnCarrito = [];
    return this.itemsEnCarrito;
  }
}
