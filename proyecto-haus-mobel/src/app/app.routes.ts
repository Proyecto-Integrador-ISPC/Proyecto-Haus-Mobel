import { Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { LoguinComponent } from './pages/loguin/loguin.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { DireccionEnvioComponent } from './pages/direccion-envio/direccion-envio.component';
import { CompraComponent } from './pages/compra/compra.component';

export const routes: Routes = [
    {path:"", component:HomeComponent, pathMatch:"full"},
    {path:"home", component:HomeComponent},
    {path:"productos", component:ProductosComponent},
    {path:"loguin", component:LoguinComponent},
    {path:"registro", component:RegistroComponent},
    {path:"dashboard", component:DashboardComponent},
    {path:"contacto", component:ContactoComponent},
    {path:"nosotros", component:NosotrosComponent},
    {path:"carrito", component:CarritoComponent},
    {path:"direccion-envio", component:DireccionEnvioComponent},
    {path:"compra", component:CompraComponent}
];
