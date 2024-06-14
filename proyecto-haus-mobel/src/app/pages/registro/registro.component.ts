import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  form!:FormGroup;
  constructor(private formBuilder:FormBuilder, private router: Router, private authService:AuthService)
  {
    this.form=this.formBuilder.group(
      {
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
      }
    )   
  }
   
  iniciarSesion() {
  this.router.navigate(['/loguin']);
  }

  // onSubmit() {
  //   const modalDiv = document.getElementById('myModal');
  //   if (this.form.valid && modalDiv!=null) {
  //     modalDiv.style.display = 'block';
  //     modalDiv.style.backgroundColor = '#3a393960';
  //   } else {
  //     this.form.markAllAsTouched();
  //   }
  // }

  onSubmit(event: Event): void {
    event.preventDefault; 
    if (this.form.valid)
    {
      console.log("Enviando  al servidor...");
      
      this.authService.createUser(this.form.value as User).subscribe(
        data => {
          console.log(data.id);
          console.log( this.form.value as User)
            if (data.id>0)
            {
              alert("El registro ha sido creado satisfactoriamente. A continuación, por favor Inicie Sesión.");
              this.router.navigate(['/home'])
            }
        })
    }
    else
    {
      this.form.markAllAsTouched(); 
    }
  }
}