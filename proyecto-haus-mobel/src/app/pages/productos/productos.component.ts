import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
    parteOcultaVisible = false;
    elementoVisible: string | null = null;

  toggleParteOculta() {
    this.parteOcultaVisible = !this.parteOcultaVisible;
  }
  

  abrirElemento(identificador: string) {
    this.parteOcultaVisible = false;
    this.elementoVisible = identificador;
  }

  cerrarElemento() {
    this.elementoVisible = null;

    this.parteOcultaVisible = false;
  }

  agregarAlCarrito() {
    alert('Producto agregado al carrito')
  }
}
