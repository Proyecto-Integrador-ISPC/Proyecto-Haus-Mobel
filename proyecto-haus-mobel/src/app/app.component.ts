import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Error404Component } from './pages/error404/error404.component';
import { CarritoItemsComponent } from './shared/carrito-items/carrito-items.component';
import { MatIconModule } from '@angular/material/icon';


import { LoguinComponent } from './pages/loguin/loguin.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HomeComponent, FooterComponent, ProductosComponent, LoguinComponent, NgbModule, Error404Component, CarritoItemsComponent, MatIconModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-haus-mobel';
}
