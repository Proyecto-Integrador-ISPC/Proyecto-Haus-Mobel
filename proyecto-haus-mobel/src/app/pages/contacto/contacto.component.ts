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
    const modalDiv = document.getElementById('myModal');
    if (this.form.valid && modalDiv!=null) {
      modalDiv.style.display = 'block';
      modalDiv.style.backgroundColor = '#3a393960';
    } else {
      this.form.markAllAsTouched();
    }
  }
}
