import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoItemsComponent } from '../../shared/carrito-items/carrito-items.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CarritoItemsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent{
  constructor() {}

  selectedItem: string = 'usuario';

  opciones = ['usuario', 'compras', 'estado', 'historial', 'carrito'];

  mostrarSeccion(seccion: string) {
    this.selectedItem = seccion;
  }

  calcularSubtotal(producto: any): number {
    return producto.precio * producto.cantidad; 
  }
}