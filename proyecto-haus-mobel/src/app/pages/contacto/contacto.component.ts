import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  form!:FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
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
