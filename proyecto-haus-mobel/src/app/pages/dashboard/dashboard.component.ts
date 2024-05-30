import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit{
  selectedItem: string = 'usuario';

  productos: any[] = [];

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.productos = this.carritoService.obtenerCarrito();
  }

  calcularSubtotal(producto: any): number {
    return producto.precio * producto.cantidad; 
  }

  mostrarSeccion(seccion: string) {
    this.selectedItem = seccion;
  }
}