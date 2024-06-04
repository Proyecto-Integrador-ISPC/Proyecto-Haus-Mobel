import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ListaProductosService {
  url: string= "http://localhost:3000/0";
  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<any> {
    return this.http.get(this.url);
  }
  
}
