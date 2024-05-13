import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FoorterComponent } from './shared/foorter/foorter.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { QuienessomosComponent } from './pages/quienessomos/quienessomos.component';

import { LoguinComponent } from './pages/loguin/loguin.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HomeComponent, FoorterComponent, ProductosComponent, LoguinComponent, ContactoComponent, NosotrosComponent, QuienessomosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-haus-mobel';
}