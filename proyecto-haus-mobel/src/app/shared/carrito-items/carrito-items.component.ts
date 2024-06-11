import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito-items.component.html',
  styleUrl: './carrito-items.component.css'
})
export class CarritoItemsComponent implements OnInit {
  carrito: any[] = [];

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
    this.actualizarCarrito();
  }

  private actualizarCarrito() {
    this.carrito = this.carritoService.obtenerCarrito();
  }

  calcularSubtotal(producto: any): number {
    return producto.precio * producto.cantidad;
  }
}