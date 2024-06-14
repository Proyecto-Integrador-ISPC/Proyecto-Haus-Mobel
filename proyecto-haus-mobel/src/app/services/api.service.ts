import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http:HttpClient) { }
  
  // private apiUrl = 'http://localhost:8000/api';
  private apiUrl = 'http://127.0.0.1:8000/api/ListarProductos/';

  // Ejemplo de método para obtener productos
  getProductos(): Observable<any> {
    // return this.http.get<any>(this.apiUrl).pipe(
    //   tap(response => console.log('Connection successful:', response)),
    //   catchError(error => {
    //     console.error('Connection failed:', error);
    //     return of({ success: false, message: 'Connection failed' });
    //   })
    // );
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap(response => console.log('Connection successful:', response)),
      catchError(error => {
        console.error('Connection failed:', error);
        return of([]); // Retorna un arreglo vacío u otro valor adecuado en caso de error
      })
    );
  }

  // Ejemplo de método para registro de usuario
  // register(user: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/registro`, user);
  // }

  // // Ejemplo de método para login de usuario
  // login(credentials: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  // }













  
  
}
