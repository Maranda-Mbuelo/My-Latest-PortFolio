import { Component, OnInit, Input } from '@angular/core';
import { Navigation } from 'src/interfaces/navigation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMobileMenuOpen: boolean = false;

  @Input() links: Navigation[] = [];

  ngOnInit(): void {
    
  }

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

