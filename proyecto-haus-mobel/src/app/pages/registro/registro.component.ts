import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  form!:FormGroup;
  constructor(private formBuilder:FormBuilder, private router: Router)
  {
    this.form=this.formBuilder.group(
      {
      usuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
      }
    )   
  }
   
  iniciarSesion() {
  this.router.navigate(['/loguin']);
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