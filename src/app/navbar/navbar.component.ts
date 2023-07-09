import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMobileMenuOpen: boolean = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  checkUser() {
    const passKey = prompt('Enter Pass-Key');
    if (passKey !== null && passKey !== '') {
      if (passKey === 'password') {
        window.location.href = '/mbuelo-maranda-admin';
      } else {
        window.location.href = '/home';
      }
    } else {
      console.log('No passKey entered');
    }
  }
  
  
}

