import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  constructor(private router: Router) {}

}
