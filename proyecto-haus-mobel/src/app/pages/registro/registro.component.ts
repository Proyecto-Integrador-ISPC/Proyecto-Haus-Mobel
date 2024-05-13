import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
 form!:FormGroup;
 constructor(private formBuilder:FormBuilder)
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
   
}
