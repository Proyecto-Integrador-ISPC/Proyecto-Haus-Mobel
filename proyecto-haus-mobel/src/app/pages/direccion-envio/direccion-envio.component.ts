import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-direccion-envio',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './direccion-envio.component.html',
  styleUrl: './direccion-envio.component.css'
})
export class DireccionEnvioComponent {
  form!:FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      address: ['', Validators.required],
      numeracion: ['', Validators.required],
      ciudad: ['', Validators.required],
      pais: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      alert("Mensaje enviado exitosamente.")
    } else {
      alert("Por favor, completá todos los campos antes de enviar el mensaje.")
    }
  }
}
