import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  selectedItem: string = 'usuario';
  showPurchases() {
    this.selectedItem = 'compras';
  }
  showOrderStatus() {
    this.selectedItem = 'estado';
  }
  showHistorial() {
    this.selectedItem = 'historial';
  }
  showCarrito() {
    this.selectedItem = 'carrito';
  }
  showUsuario() {
    this.selectedItem = 'usuario';
  }
}