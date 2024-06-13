import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, CommonModule, NgbModule ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent {
  
  constructor(private router: Router, private authService: AuthService) {}  

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  // cerrarSesion() {
  //   localStorage.removeItem('isLoggedIn');
  //   localStorage.removeItem('usuario');    
  //   this.router.navigate(['/loguin']);
  // }
  cerrarSesion() {
    this.authService.setLoggedIn(false);
    this.router.navigate(['/loguin']);
  }

  toggleDropdown(){
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('show');
      }
    }
}