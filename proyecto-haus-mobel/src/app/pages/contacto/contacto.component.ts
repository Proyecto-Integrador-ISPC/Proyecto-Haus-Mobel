import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  // openModal() {
  //   const modelDiv = document.getElementById('myModal');
  //   if(modelDiv!=null) {
  //     modelDiv.style.display = 'block';
  //     modelDiv.style.backgroundColor = '#3a393960';
  //   }
  // }

  // closeModal() {
  //   const modelDiv = document.getElementById('myModal');
  //   if(modelDiv!=null) {
  //     modelDiv.style.display = 'none';
  //   }
  // }
}
