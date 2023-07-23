import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Navigation } from 'src/interfaces/navigation';
import { AppComponent } from '../app.component';

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

  constructor(private method: AppComponent){}

  ngOnInit(): void {
    this.video = '/assets/videos/Animated_Background .mp4';
    this.method.fetchNavigation('Home', this.navigation);
}
}
