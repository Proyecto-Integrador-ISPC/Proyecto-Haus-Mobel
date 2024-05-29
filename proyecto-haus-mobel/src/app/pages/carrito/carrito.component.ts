import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{
  carrito: any[] = [];

  constructor(private router: Router, private carritoService: CarritoService){}

  // ngOnInit() {
  //   this.carritoService.carrito$.subscribe(carrito => {
  //     this.carrito = carrito;
  //   });
  // }
  ngOnInit() {
    this.actualizarCarrito();
  }

  private actualizarCarrito() {
    this.carrito = this.carritoService.obtenerCarrito();
  }
}
