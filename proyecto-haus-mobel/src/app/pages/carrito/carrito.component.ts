import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarritoService } from '../../services/carrito.service';
import { ProductoService } from '../../services/productos.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [RouterLink, CommonModule, NgbModule ],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  productos: any[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.actualizarProductos();
  }
  
  actualizarProductos() {
    this.productos = this.carritoService.obtenerItemsEnCarrito();
    console.log('Productos en el carrito:', this.productos); // Agregar un console.log para verificar
  }
}
