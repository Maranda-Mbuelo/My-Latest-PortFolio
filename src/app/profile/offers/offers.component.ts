import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Navigation } from 'src/interfaces/navigation';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit{

  blocks: boolean = true;
  navigationVisibility!: boolean;
  navigation: Navigation[] = [];
  heading: string = 'Services I Offer';
  firstParagraph: string = `Since the beginning of my journey as a self-taught developer, I have acquired a diverse set of technical skills that enable me to create innovative solutions for a wide range of projects. With a deep passion for continuous learning and a commitment to staying up-to-date with the latest industry trends, I have immersed myself in the world of software development. From mastering full-stack web application development using Angular and TypeScript, to building robust desktop applications with C# or C++, and developing cross-platform mobile apps using Ionic, I possess the expertise to bring your ideas to life. With each project, I strive to deliver exceptional quality, functionality, and user experience. Let's embark on a collaborative journey and turn your vision into reality`;
  languages: string[] = [
    'C#', 'C++', 'Python', 'SQL', 'Cloudinary', 'Typescript', 'JavaScript', 'HTML', 'CSS',
    'Tailwind Css', 'Figma', 'Bootstrap','Angular', 'Firebase', 'Ionic', 'ASP.NET', 'ASP.NET Core (MVC)',
    'ASP.NET Core Web Api', 'Entity Framework', 'Angular Material', 'Sync Fusion UI'
  ];
  services: { name: string, percentage: number }[] = [
    { name: 'Full-Stack web development', percentage: 80 },
    { name: 'desktop application development', percentage: 65 },
    { name: 'cross platform development', percentage: 50 }
  ];

  constructor(private route: ActivatedRoute, private method: AppComponent) {}

  ngOnInit(): void {
    this.method.fetchNavigation('Service', this.navigation);
    this.route.paramMap.subscribe(params => {
      if (params.has('actualPage')) {
        this.navigationVisibility = true;
      } else {
        this.navigationVisibility = false;
      }
    });
  }

}
