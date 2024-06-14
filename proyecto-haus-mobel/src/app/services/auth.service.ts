import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { NavComponent } from '../shared/nav/nav.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  // isLoggedIn(): boolean {
    //   const isLoggedIn = localStorage.getItem('isLoggedIn');
    //   return isLoggedIn === 'true';
    // }
    
  url="http://127.0.0.1:8000/api/registro";
  apiurl="http://127.0.0.1:8000/api/login";
  apiUrloficial="http://127.0.0.1:8000/api";

  apiUrlListar = 'http://127.0.0.1:8000/api/ListarProductos';

  localStorageKey = 'token';
  private loggedIn = false;  
  
  constructor(private http:HttpClient) { 
    this.loggedIn = !!localStorage.getItem('token');
  }

 
  // Nuevo método para obtener los datos desde apiUrlListar
  getProductos(): Observable<any> {
    return this.http.get(this.apiUrlListar);
  }

  createUser(user:User):Observable<any>{
    return this.http.post(this.url, user)
  }

  login(credentials: any): Observable<any> {
    // return this.http.post<any>(`${this.url}/login`, credentials);
    return this.http.post<any>(this.apiurl, credentials);
  }

  // Método para comprobar si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  // Método para actualizar el estado de autenticación
  setLoggedIn(value: boolean): void {
    this.loggedIn = value;
    if (value) {
      localStorage.setItem('token', 'asdasdASDASDASD');  // Store the token or a flag
    } else {
      localStorage.removeItem('token');
    }
  }

  // setLoggedIn(value: boolean, token?: string): void {
  //   this.loggedIn = value;
  //   if (value && token) {
  //     localStorage.setItem('token', token);  // Almacena el token real recibido del servidor
  //   } else {
  //     localStorage.removeItem('token');
  //   }
  // }

//   setLoggedIn(value: boolean, token?: string): void {
//   this.loggedIn = value;
//   if (value && token) {
//     localStorage.setItem('token', token);  // Almacena el token real
//   } else {
//     localStorage.removeItem('token');  // Elimina el token si se cierra sesión
//   }
// }


// setLoggedIn(value: boolean, token?: string): void {
//   this.loggedIn = value;
//   if (value && token) {
//     localStorage.setItem('token', 'alallalal');  // Store the token or a flag
//   } else {
//     localStorage.removeItem('token');
//   }
// }


  // logout(): Observable<any> {
  //   const token = localStorage.getItem('token');
  //   const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
  //   return this.http.post(`${this.apiUrloficial}/logout`, {}, { headers });
  // }
}