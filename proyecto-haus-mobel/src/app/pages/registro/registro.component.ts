import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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

 onEnviar(event:Event)
 {
   console.log(this.form.value)
 }
   
 iniciarSesion() {
  this.router.navigate(['/loguin']);
  }

  onSubmit() {
    if (this.form.valid) {
      alert("Registro realizado exitosamente.")
    } else {
      alert("Por favor, completá todos los campos antes de registrarte.")
    }
  }
}
