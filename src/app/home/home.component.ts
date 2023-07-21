import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    this.video = '/assets/videos/Animated_Background .mp4';
  }
}
