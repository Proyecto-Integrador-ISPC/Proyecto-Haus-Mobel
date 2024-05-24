import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent {
  constructor(private router: Router){}

  finalizarCompra(){
    const modalDiv = document.getElementById('myModal');
    if (modalDiv != null) {
      modalDiv.style.display = 'block';
      modalDiv.style.backgroundColor = '#3a393960';
    }
  }

  
  irAInicio(){
    this.router.navigate(['/home']);
  }

  seguirComprando(){
    this.router.navigate(['/productos']);
  }
}
