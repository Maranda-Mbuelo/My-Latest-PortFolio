import { Component, HostListener, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Navigation } from 'src/interfaces/navigation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string = 'Mbuelo Maranda';
  role: string = 'Self-taught Developer, Designer';
  paragraph: string = `And also a Freelancer providing services for programming and design content needs.\
  <br> Join me below and let's bring some software into existence!`;
  image: string = '/assets/images/nobgprofile.png';
  navigation: Navigation[] = [];
  hideNavigation = false;

  constructor(private method: AppComponent) { }

  ngOnInit(): void {
    this.method.fetchNavigation('Projects', this.navigation);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const distanceFromBottom = documentHeight - (scrollY + windowHeight);
    const showThreshold = 200;

    this.hideNavigation = scrollY > showThreshold && distanceFromBottom > showThreshold;
  }

}
