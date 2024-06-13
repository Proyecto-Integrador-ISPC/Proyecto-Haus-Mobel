import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  localStorageKey = 'token';
  private loggedIn = false;  
  
  constructor(private http:HttpClient) { 
    this.loggedIn = !!localStorage.getItem('token');
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
  // setLoggedIn(value: boolean): void {
  //   this.loggedIn = value;
  // }
  setLoggedIn(value: boolean): void {
    this.loggedIn = value;
    if (value) {
      localStorage.setItem('token', 'your-token');  // Store the token or a flag
    } else {
      localStorage.removeItem('token');
    }
  }
}