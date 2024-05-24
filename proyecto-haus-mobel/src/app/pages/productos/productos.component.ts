import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoguinComponent } from '../loguin/loguin.component';

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

  carrito: string[] = [];


  agregarAlCarrito(productoId: string) {        

    if (this.authService.isLoggedIn()) {
      const producto = this.obtenerProductoPorId(productoId); // Obtener el producto por su ID
      this.carrito.push(producto); // Agregar producto al carrito
      console.log('Producto agregado al carrito:', producto); // Mostrar en consola
      
      this.showModal('myModal');
    } else {
      // Mostrar el modal de iniciar sesión
      // this.showModal('loginModal');
       this.showModalIniciarS('loginModal');
    }
  }

  obtenerProductoPorId(id: string): string {
    return `Producto ${id}`;
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

  redirectToLoguin(){
    this.router.navigate(['/loguin']);
  }

  irACarrito(){
    this.router.navigate(['/carrito']);
  }
}
