import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-loguin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './loguin.component.html',
  styleUrl: './loguin.component.css'
})


export class LoguinComponent {
  username: string = 'usuario';
  password: string = 'password';
  userData: any = {};

  form!: FormGroup;
  loginError: string | null = null; // Definir la propiedad loginError

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  onSubmit(): void {
  //   if (this.form.valid) {
  //     const username = this.form.get('username')?.value;
  //     const password = this.form.get('password')?.value;

  //     this.authService.login({ username, password }).subscribe(
  //       (response: User) => {
  //         console.log('Usuario autenticado:', response.username);
  //         console.log('Token:', response.token);
  //         localStorage.setItem('token', response.token);
  //         this.router.navigate(['/home']);
  //       },
  //       error => {
  //         console.error('Error al iniciar sesión:', error);
  //         this.loginError = 'Error al iniciar sesión. Verifica tus credenciales.';
  //       }
  //     );
  //   } else {
  //     this.form.markAllAsTouched();
  //   }
  // }
  if (this.form.valid) {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;

    const observer = {
      next: (response: User) => {
        console.log('Usuario autenticado:', response.username);
        console.log('Token:', response.token);
        localStorage.setItem('token', response.token);
        this.authService.setLoggedIn(true);
        this.router.navigate(['/home']);
      },
      error: (err: any) => {
        console.error('Error al iniciar sesión:', err);
        this.loginError = 'Error al iniciar sesión. Verifica tus credenciales.';
      }
    };

    this.authService.login({ username, password }).subscribe(observer);
  } else {
    this.form.markAllAsTouched();
  }
}
}