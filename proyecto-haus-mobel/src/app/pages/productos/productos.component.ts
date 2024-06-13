import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CarritoService } from '../../services/carrito.service';
import { ListaProductosService } from '../../services/lista-productos.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})

export class ProductosComponent implements OnInit {
  ngOnInit(): void {
    this.checkApiConnection();
  }

  checkApiConnection(): void {
    this.apiService.getProductos().subscribe(response => {
      if (response.success !== false) {
        console.log('API connection successful:', response);
      } else {
        console.log('API connection failed:', response.message);
      }
    });
  }
  
  productList:any;

  productos = [
    { id: 1, nombre: 'Silla Elegance', precio: "$19.500", descripcion: 'Silla madera, acolchado gris, elegante y cómoda, perfecta para interiores con estilo y confort duradero.', imagenUrl: 'assets/p1.jpg' },
    { id: 2, nombre: 'Silla Bellavista', precio: "$15.500", descripcion: 'Silla madera, acolchado gris, elegante y cómoda, perfecta para interiores con estilo y confort duradero.', imagenUrl: 'assets/p2.jpg' },
    { id: 3, nombre: 'Silla Harmony', precio: "$22.999", descripcion: 'Silla chic con patas madera oscura, asiento y respaldo en rosa, aporta encanto y frescura a cualquier espacio.', imagenUrl: 'assets/p3.jpg' },
    { id: 4, nombre: 'Silla Luna', precio: "$17.999", descripcion: 'Silla ergonómica de oficina, diseño contemporáneo, ajustes personalizados para comodidad laboral y productividad..', imagenUrl: 'assets/p4.jpg' },
    { id: 5, nombre: 'Silla Zenith', precio: "$21.000", descripcion: 'Silla moderna con patas de madera y asiento de plástico negro, fusión de estilo y practicidad en diseño.', imagenUrl: 'assets/p5.jpg' },
    { id: 6, nombre: 'Silla Confortplus', precio: "$16.000", descripcion: 'Silla elegante, patas de madera sólida, asiento acolchado en negro, combinando estilo y comodidad en un diseño atemporal..', imagenUrl: 'assets/p6.jpg' },
    { id: 7, nombre: 'Silla Dreamwave', precio: "$26.000", descripcion: 'Silla elegante, patas de madera sólida, asiento acolchado en negro, combinando estilo y comodidad en un diseño atemporal.', imagenUrl: 'assets/new1.jpg' },
    { id: 8, nombre: 'Silla Smartsiesta', precio: "$18.000", descripcion: 'Silla de plástico ligera y versátil, perfecta para uso en interiores y exteriores.', imagenUrl: 'assets/new2.jpg' },
    { id: 9, nombre: 'Silla CozyHaven', precio: "$19.999", descripcion: 'Silla con estructura metálica elegante y duradera, adecuada para diversos entornos decorativos.', imagenUrl: 'assets/new3.jpg' },
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
    private carritoService: CarritoService,
    private listaProductosService: ListaProductosService,
    private apiService: ApiService
  ) {
    this.listaProductosService.obtenerProductos().subscribe({
      next: (productList) => {
        this.productList = productList;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


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

    // if (this.authService.isLoggedIn()) {
    //   const producto = this.obtenerProductoPorId(productoId);
    
    //   const cantidadInput = document.getElementById('cantProducto') as HTMLInputElement;
    //   const cantidad = parseInt(cantidadInput.value, 10);
      
    //   producto.cantidad = cantidad;

    //   this.carritoService.agregarAlCarrito(producto);
    //   console.log('Producto agregado al carrito:', producto);
    //   this.showModal('myModal');
    // } else {
    //    this.showModalIniciarS('loginModal');
    // }
  }



  obtenerProductoPorId(id: string): any {
    return { id, nombre: 'Producto ' + id, precio: 100 }; 
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

}
