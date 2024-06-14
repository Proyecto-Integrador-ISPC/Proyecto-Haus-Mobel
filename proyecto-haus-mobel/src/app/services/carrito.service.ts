import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private apiUrl = 'http://127.0.0.1:8000/api/carrito/';
  // private carritoKey = 'carrito';

  // constructor() { }

  // agregarAlCarrito(producto: any) {
  //   const carritoActual = this.obtenerCarrito();
  //   const nuevoCarrito = [...carritoActual, producto];
  //   localStorage.setItem(this.carritoKey, JSON.stringify(nuevoCarrito));
  // }

  // obtenerCarrito() {
  //   const carritoJson = localStorage.getItem(this.carritoKey);
  //   return carritoJson ? JSON.parse(carritoJson) : [];
  // }



  // constructor(private apiService: ApiService) { }

  // agregarAlCarrito(idProducto: number, cantidad: number, importe: number, Idusuario: number): Observable<any> {
  //   return this.apiService.agregarAlCarrito(idProducto, cantidad, importe, Idusuario);
  // }

  // obtenerCarrito(): Observable<any[]> {
  //   return this.apiService.obtenerCarrito();
  // }


  constructor(private http: HttpClient, private authService: AuthService) {}

  agregarAlCarrito(idProducto: number, cantidad: number, importe: number, Idusuario: number): Observable<any> {
    const carritoItem = {
      idProducto,
      cantidad,
      importe,
      Idusuario
    };
    return this.http.post<any>(this.apiUrl, carritoItem);
  }

  obtenerCarrito(Idusuario: number): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  limpiarCarrito(Idusuario: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl);
  }
}