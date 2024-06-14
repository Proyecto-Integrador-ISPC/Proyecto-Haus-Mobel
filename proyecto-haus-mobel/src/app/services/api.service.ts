import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  
  // private apiUrl = 'http://localhost:8000/api';
  private apiUrl = 'http://127.0.0.1:8000/api/ListarProductos';
  private apiUrls = 'http://127.0.0.1:8000/api/carrito/';
  
  constructor(private http:HttpClient) { }
   // Método para guardar el carrito en la API
  //  guardarCarrito(carrito: any[]): Observable<any> {
  //   const url = 'http://127.0.0.1:8000/api/ListarCarritos/'; 
  //   return this.http.post<any>(url, carrito).pipe(
  //     tap(response => console.log('Carrito guardado:', response)),
  //     catchError(error => {
  //       console.error('Error al guardar el carrito:', error);
  //       return of({ success: false, message: 'Error al guardar el carrito' });
  //     })
  //   );
  // }

  // guardarCarrito(carrito: any[]): Observable<any> {
  //   const url = 'http://127.0.0.1:8000/api/carrito/';
  //   return this.http.post<any>(url, carrito).pipe(
  //     tap(response => console.log('Carrito guardado:', response)),
  //     catchError(error => {
  //       console.error('Error al guardar el carrito:', error);
  //       return of({ success: false, message: 'Error al guardar el carrito' });
  //     })
  //   );
  // }
  // guardarCarrito(carrito: any[]): Observable<any> {
  //   const url = 'http://127.0.0.1:8000/api/ListarProductos/'; // Nota la barra diagonal al final
  //   return this.http.post<any>(url, carrito).pipe(
  //     tap(response => console.log('Carrito guardado:', response)),
  //     catchError(error => {
  //       console.error('Error al guardar el carrito:', error);
  //       return of({ success: false, message: 'Error al guardar el carrito' });
  //     })
  //   );
  // }
  guardarCarrito(carrito: any): Observable<any> {
    return this.http.post<any>(this.apiUrls, carrito).pipe(
      tap(response => console.log('Carrito guardado en la API:', response)),
      catchError(error => {
        console.error('Error al guardar el carrito:', error);
        return of({ success: false, message: 'Error al guardar el carrito' });
      })
    );
  }

  agregarAlCarrito(idProducto: number, cantidad: number, importe: number, Idusuario: number) {
    const carritoItem = {
      fecha: new Date().toISOString().slice(0, 10),  // Formato YYYY-MM-DD
      idProducto: idProducto,
      cantidad: cantidad,
      importe: importe,
      Idusuario: Idusuario
    };

    return this.http.post(this.apiUrls, carritoItem);
  }

  obtenerCarrito(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
  

  // Ejemplo de método para obtener productos
  getProductos(): Observable<any> {
    // return this.http.get<any>(this.apiUrl).pipe(
    //   tap(response => console.log('Connection successful:', response)),
    //   catchError(error => {
    //     console.error('Connection failed:', error);
    //     return of({ success: false, message: 'Connection failed' });
    //   })
    // );
    return this.http.get<any>(this.apiUrl).pipe(
      tap(response => console.log('Connection successful:', response)),
      catchError(error => {
        console.error('Connection failed:', error);
        return of({ success: false, message: 'Connection failed', data: [] });
      })
    );
  }  
  
}
