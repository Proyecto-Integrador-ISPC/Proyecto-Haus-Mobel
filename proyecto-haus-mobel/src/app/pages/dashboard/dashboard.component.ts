import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  selectedItem: string = 'usuario';
  mostrarCompras() {
    this.selectedItem = 'compras';
  }
  mostrarEstado() {
    this.selectedItem = 'estado';
  }
  mostrarHistorial() {
    this.selectedItem = 'historial';
  }
  mostrarCarrito() {
    this.selectedItem = 'carrito';
  }
  mostrarUsuario() {
    this.selectedItem = 'usuario';
  }
}