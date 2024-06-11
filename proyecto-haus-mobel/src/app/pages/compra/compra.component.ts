import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})

export class CompraComponent {
  form!:FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      numtarjeta: ['', Validators.required],
      nombreapellidos: ['', Validators.required],
      fechavencimiento: ['', Validators.required],
      codigoseguridad: ['', Validators.required],
      dni: ['', Validators.required],
    });
  }

  finalizarCompra(){
    const modalDiv = document.getElementById('myModal');

    if (this.form.valid && modalDiv != null) {
      modalDiv.style.display = 'block';
      modalDiv.style.backgroundColor = '#3a393960';
    } else {
      this.form.markAllAsTouched();
    }
  }
}
