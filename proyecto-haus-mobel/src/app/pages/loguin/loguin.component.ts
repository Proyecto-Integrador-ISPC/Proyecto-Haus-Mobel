import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loguin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './loguin.component.html',
  styleUrl: './loguin.component.css'
})


export class LoguinComponent {
  usuario: string = 'usuario';
  password: string = 'password';

  form!:FormGroup;
  constructor(private formBuilder:FormBuilder, private router: Router)
  {
    this.form=this.formBuilder.group(
      {
        usuario: ['', Validators.required],
        password: ['', Validators.required]
      }
    )
    
  }
  
  onSubmit() {
    const usuario = this.form.get('usuario')?.value;
    const password = this.form.get('password')?.value;

    if (this.form.valid && usuario === this.usuario && password === this.password) {
      console.log('Formulario válido');
      alert('¡Bienvenido!');
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
  
  registrarse() {
    this.router.navigate(['/registro']);
  }
}