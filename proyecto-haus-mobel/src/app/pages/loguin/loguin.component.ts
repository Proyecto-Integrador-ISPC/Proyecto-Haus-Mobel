import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loguin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './loguin.component.html',
  styleUrl: './loguin.component.css'
})


export class LoguinComponent {
  // loguinFormControl = new FormControl('', []);
  form!:FormGroup;
  constructor(private formBuilder:FormBuilder)
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
    
}

