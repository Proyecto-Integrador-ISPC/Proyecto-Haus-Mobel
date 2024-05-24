import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  constructor(private authService: AuthService, private router: Router) { }

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

  // agregarAlCarrito() {
  //   alert('Producto agregado al carrito')
  // }

  //Modal
  agregarAlCarrito() {

    if (this.authService.isLoggedIn()) {
      // Mostrar el modal de agregar al carrito
      this.showModal('myModal');
    } else {
      // Mostrar el modal de iniciar sesión
      // this.showModal('loginModal');
      // alert('debes iniciar sesion')
       // Mostrar el modal de iniciar sesión
       this.showModalIniciarS('loginModal');
    }
  }

  showModal(myModal: string) {
    const modalDiv = document.getElementById(myModal);
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
      modalDiv.style.backgroundColor = '#3a393960';
    }
  }

  closeModal() {
    const modelDiv = document.getElementById('myModal');
    if(modelDiv!=null) {
      modelDiv.style.display = 'none';
    }
  }

  showModalIniciarS(myModal: string) {
    const modalDiv = document.getElementById('loginModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
      modalDiv.style.backgroundColor = '#3a393960';
    }
  }

  closeModalIniciarS() {
    const modelDiv = document.getElementById('loginModal');
    if(modelDiv!=null) {
      modelDiv.style.display = 'none';
    }
  }
  // closeModal(modalId: string) {
  //   const modalDiv = document.getElementById('modalId');
  //   if(modalDiv!=null) {
  //     modalDiv.style.display = 'none';
  //   }
  // }

  // showLoginModal() {
  //   // Mostrar el modal de iniciar sesión
  //   this.showModal('loginModal');
  // }
}
