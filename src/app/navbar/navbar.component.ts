import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMobileMenuOpen: boolean = false;
  links: any = [
    {
      name: 'About',
      path: 'mbuelo-maranda-about',
      icon: '<i class="fa-solid fa-address-card" style="color: orange"></i>'
    },
    {
      name: 'LinkedIn',
      path: 'https://za.linkedin.com/in/maranda-marvin-592a42233',
      icon: '<i class="fa-brands fa-linkedin" style="color: orange"></i>'
    },
    {
      name: 'Contact',
      path: 'mbuelo-maranda/contactForm',
      icon: '<i class="fa-regular fa-address-book" style="color: orange"></i>'
    },
    {
      name: 'Projects',
      path: 'mbuelo-maranda/Projects',
      icon: '<i class="fa-solid fa-diagram-project" style="color: orange"></i>'
    },
    {
      name: 'Services',
      path: 'mbuelo-maranda/Service',
      icon: '<i class="fa-solid fa-briefcase" style="color: orange"></i>'
    }
  ]

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

