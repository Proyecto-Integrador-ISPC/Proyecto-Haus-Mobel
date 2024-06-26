import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import { CarritoItemsComponent } from '../../shared/carrito-items/carrito-items.component';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink, CarritoItemsComponent],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
// export class CarritoComponent implements OnInit{
//   carrito: any[] = [];

//   constructor(private router: Router, private carritoService: CarritoService){}

//   ngOnInit() {
//     this.actualizarCarrito();
//   }

//   private actualizarCarrito() {
//     this.carrito = this.carritoService.obtenerCarrito();
//   }

//   calcularSubtotal(producto: any): number {
//     return producto.precio * producto.cantidad;
//   }
// }

export class CarritoComponent {


  constructor(private router: Router, private carritoService: CarritoService){}

}