import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Navigation } from 'src/interfaces/navigation';
import { AppComponent } from '../app.component';
import { TextwriterService } from 'src/services/typewriter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  video!: string;
  image: string = '/assets/images/6352027a-08ba-404b-a616-16e40cbb4d70-removebg-preview.png';
  shortText: string = 'Discover my projects and skills';
  heading: string = 'Welcome to My Portfolio';
  navigation: Navigation[] = []; 

  constructor(private method: AppComponent, private textwriterService: TextwriterService) { }

  ngOnInit(): void {
    this.video = 'https://res.cloudinary.com/ddigkgb9y/video/upload/v1696508824/g4s2fhyz4woxnez5ci0p.mp4?_s=vp-1.7.0';
    this.method.fetchNavigation('Home', this.navigation);
    
    const option: any[] = [
      {
        loop: false,
        typeSpeed: 120,
        deleteSpeed: 250,
        typeColor: '#ccc',
        cursorColor: 'transparent',
        typeClass: 'sans-serif',
        target: document.querySelector<HTMLElement>('.text-left p'),
        text: 'Exciting Adventure!'
      }
    ]

    //const paragraphElement = document.querySelector('.mt-4.text-lg.md:text-xl.text-gray-500') as HTMLElement; // Explicit type assertion
    //const text = 'Discover my projects and skills';
    //const speed = 90; // Adjust the speed as needed

    option.forEach((element, index) => {
      setTimeout(() => {
        if (element.target) {
          this.textwriterService.writeText(element.target, element.text, element);
        }
      }, index * 4000);
    });
  }
}
