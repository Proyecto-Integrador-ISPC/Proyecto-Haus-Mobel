import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarritoService } from '../../services/carrito.service';


@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [RouterLink, CommonModule, NgbModule],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent {
  constructor(private router: Router, private carritoService: CarritoService) {}

  
  // items: any[] = [
  //   { nombre: 'Producto 1', precio: 10, cantidad: 2 },
  //   { nombre: 'Producto 2', precio: 15, cantidad: 1 },
  //   // Agrega más elementos según sea necesario
  // ];
}
