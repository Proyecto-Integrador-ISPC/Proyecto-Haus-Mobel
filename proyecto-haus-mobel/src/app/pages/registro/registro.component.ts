import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
 form!:FormGroup;
 constructor(private formBuilder:FormBuilder, private router: Router)
 {
   this.form=this.formBuilder.group(
     {
       usuario:['',[]],
       email:['',[]],
       password:['',[]]
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
}
