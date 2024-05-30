import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { CarritoItemsComponent } from '../../shared/carrito-items/carrito-items.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CarritoItemsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit{
  selectedItem: string = 'usuario';

  mostrarSeccion(seccion: string) {
    this.selectedItem = seccion;
  }
  productos: any[] = [];

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.productos = this.carritoService.obtenerCarrito();
  }

  calcularSubtotal(producto: any): number {
    return producto.precio * producto.cantidad; 
  }

}