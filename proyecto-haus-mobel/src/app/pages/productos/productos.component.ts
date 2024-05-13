import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  constructor(private carritoService: CarritoService) { }

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarAlCarrito(producto);
    alert('¡Producto añadido al carrito exitosamente!')
  }

}
