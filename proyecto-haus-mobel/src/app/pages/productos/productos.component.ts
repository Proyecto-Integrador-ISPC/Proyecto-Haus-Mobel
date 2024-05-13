import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { ProductoService } from '../../services/productos.service';

import { ItemCarrito } from '../../services/ItemCarrito';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit{
  productos: any[] = [];
  @Output() agregarAlCarrito: EventEmitter<any> = new EventEmitter<any>(); 

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productos = this.productoService.getProductos();
    console.log(this.productos)
  }

  onAgregarAlCarrito(producto: any) {
    this.productoService.marcarEnCarrito(producto.id);
    this.agregarAlCarrito.emit(producto); 
    console.log('¡Producto añadido al carrito exitosamente!', producto);
  }
  // agregarCarrito(item: Producto){
  //   let iCarrito: ItemCarrito = {
  //     idproducto: item.idproducto,
  //     nombre: item.nombre,
  //     precio: item.precio,
  //     cantidad: 1
  //   }
  // }

}
