import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loguin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './loguin.component.html',
  styleUrl: './loguin.component.css'
})


export class LoguinComponent {
  form!:FormGroup;
  constructor(private formBuilder:FormBuilder, private router: Router)
  {
    this.form=this.formBuilder.group(
      {
        usuario:['',[]],
        password:['',[]]
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
}

