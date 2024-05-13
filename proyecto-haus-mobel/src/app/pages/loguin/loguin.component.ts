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

  onEnviar(event:Event)
  {
    console.log(this.form.value)
  }

  registrarse() {
    this.router.navigate(['/registro']);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario válido');
    } else {
      alert("Datos incorrectos. Ingresá nuevamente.")
    }
  }
}

