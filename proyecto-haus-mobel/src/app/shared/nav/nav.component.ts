import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

declare var $: any;

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, CommonModule, NgbModule ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent {
  itemsEnCarrito: any[] = []; 
  constructor(private router: Router) {}
  

  ngOnInit() {
    // Inicializa Bootstrap manualmente
    $('[data-toggle="dropdown"]').dropdown();
    // this.actualizarItemsEnCarrito();
    // this.itemsEnCarrito = this.carritoService.obtenerItemsEnCarrito();
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  cerrarSesion() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('usuario');    
    this.router.navigate(['/loguin']);
  }

  toggleDropdown(){
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('show');
    }
    }

    // toggleCartDropdown(){
    // const dropdownMenu2 = document.querySelector('.menu2');
    // if (dropdownMenu2) {
    //   dropdownMenu2.classList.toggle('show');
    // }
    // }

    // private actualizarItemsEnCarrito() {
    //   this.itemsEnCarrito = this.carritoService.obtenerItemsEnCarrito();
    // }

    // carrito() {
    //   this.router.navigate(['/carrito']);
    // }

    misCompras() {
      this.router.navigate(['/compras']);
    }

}