import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CarritoService } from '../../services/carrito.service';
import { ListaProductosService } from '../../services/lista-productos.service';
import { ApiService } from '../../services/api.service';
import { Observer } from 'rxjs';
import { PartialObserver } from 'rxjs';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})

export class ProductosComponent implements OnInit {
  productList: any[] = [];
  carrito: any[] = [];
  parteOcultaVisible = false;
  elementoVisible: string | null = null;

  constructor(private apiService: ApiService, private carritoService: CarritoService, private authService: AuthService) {}

  ngOnInit(): void {
    this.listarProductos();
    this.cargarCarrito();
  }

  listarProductos(): void {
    this.apiService.getProductos().subscribe({
      next: (response) => {
        this.productList = response; // Asegúrate de que 'response' contenga la lista de productos directamente
        console.log('Productos obtenidos:', this.productList);
      },
      error: (error) => {
        console.error('Error al obtener productos:', error);
      }
    });
  }

  // getCantidad(idProducto: number): number {
  //   const inputElement = document.getElementById(`cantProducto${idProducto}`) as HTMLInputElement;
  //   return parseInt(inputElement.value, 10);
  // }

  abrirElemento(identificador: string) {
    this.parteOcultaVisible = false;
    this.elementoVisible = identificador;
  }

  cerrarElemento() {
    this.elementoVisible = null;
    this.parteOcultaVisible = false;
  }

  // agregarAlCarrito(producto: any) {
  //   const cantidad = this.getCantidad(producto.id);

  //   // Verificar si el producto ya está en el carrito
  //   const itemEnCarrito = this.carrito.find(item => item.id === producto.id);
  
  //   if (itemEnCarrito) {
  //     itemEnCarrito.cantidad += cantidad; // Sumar la cantidad al producto existente en el carrito
  //   } else {
  //     // Si no está en el carrito, agregarlo con la cantidad
  //     this.carrito.push({ ...producto, cantidad });
  //   }
  
  //   console.log('Carrito actualizado:', this.carrito);
  //   this.showModal('myModal');
  // }

  // agregarAlCarrito(producto: any) {
  //   const cantidad = this.getCantidad(producto.id);

  //   // Verificar si el producto ya está en el carrito
  //   const itemEnCarrito = this.carrito.find(item => item.id === producto.id);

  //   if (itemEnCarrito) {
  //     itemEnCarrito.cantidad += cantidad;
  //   } else {
  //     this.carrito.push({ ...producto, cantidad });
  //   }

  //   console.log('Carrito actualizado:', this.carrito);
  //   this.apiService.guardarCarrito(this.carrito).subscribe({
  //     next: (response) => {
  //       console.log('Carrito guardado en la API:', response);
  //       this.showModal('myModal');
  //     },
  //     error: (error) => {
  //       console.error('Error al guardar el carrito en la API:', error);
  //     }
  //   });
  // }

  // agregarAlCarrito(producto: any) {
  //   const carrito = {
  //     fecha: new Date(),
  //     idProducto: producto.id,
  //     cantidad: 1,
  //     importe: producto.precio,
  //     Idusuario: 1  // Asegúrate que 1 sea un entero válido si Idusuario espera un entero
  //   };
  
  //   this.apiService.guardarCarrito(carrito).subscribe({
  //     next: response => {
  //       console.log('Carrito guardado exitosamente:', response);
  //     },
  //     error: error => {
  //       console.error('Error al guardar el carrito:', error);
  //     }
  //   });
  // }

  agregarAlCarrito(producto: any): void {
    const cantidad = 1;  // Supongamos que siempre se agrega una unidad por vez
    const importe = producto.precio;
    const idProducto = producto.id;
     // Obtener el ID de usuario
     const Idusuario = this.authService.obtenerIdUsuario();
  
    this.carritoService.agregarAlCarrito(idProducto, cantidad, importe, Idusuario).subscribe({
      next: (response) => {
        console.log('Producto agregado al carrito:', response);
        this.showModal('myModal');
      },
      error: (error) => {
        console.error('Error al agregar producto al carrito:', error);
      }
    });
  }


  cargarCarrito(): void {
    const Idusuario = 1; // Ajusta este valor según el usuario actual

    this.carritoService.obtenerCarrito(Idusuario).subscribe({
      next: (carrito: any[]) => {
        this.carrito = carrito;
        console.log('Carrito cargado:', this.carrito);
      },
      error: (error) => {
        console.error('Error al cargar el carrito:', error);
      }
    });
  }
  


  getCantidad(idProducto: number): number {
    const inputElement = document.getElementById(`cantProducto${idProducto}`) as HTMLInputElement;
    return parseInt(inputElement.value, 10);
  }

  showModal(myModal: string) {
    const modalDiv = document.getElementById(myModal);
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
      modalDiv.style.backgroundColor = '#3a393960';
    }
  }

  closeModal(myModal: string) {
    const modelDiv = document.getElementById(myModal);
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  showModalIniciarS(myModal: string) {
    const modalDiv = document.getElementById(myModal);
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
      modalDiv.style.backgroundColor = '#3a393960';
    }
  }

  closeModalIniciarS(myModal: string) {
    const modelDiv = document.getElementById(myModal);
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

}
