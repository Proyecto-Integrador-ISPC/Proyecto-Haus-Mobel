import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-direccion-envio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './direccion-envio.component.html',
  styleUrl: './direccion-envio.component.css'
})
export class DireccionEnvioComponent {
  constructor(private router: Router){}

  comprar(){
    this.router.navigate(['/compra']);
  }
}
