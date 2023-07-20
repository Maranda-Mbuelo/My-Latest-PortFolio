import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {

  blocks: boolean = true;
  heading: string = 'Services I Offer';
  firstParagraph: string = `Since the beginning of my journey as a self-taught developer, I have acquired a diverse set of technical skills that enable me to create innovative solutions for a wide range of projects. With a deep passion for continuous learning and a commitment to staying up-to-date with the latest industry trends, I have immersed myself in the world of software development. From mastering full-stack web application development using Angular and TypeScript, to building robust desktop applications with C# or C++, and developing cross-platform mobile apps using Ionic, I possess the expertise to bring your ideas to life. With each project, I strive to deliver exceptional quality, functionality, and user experience. Let's embark on a collaborative journey and turn your vision into reality`;
  languages: string[] = [
    'C++', 'C#', 'Python', 'SQL', 'Typescript', 'HTML', 'CSS', 'JavaScript',
    'Angular', 'Ionic', 'ASP.NET', 'C++ Builder'
  ];
  services: { name: string, percentage: number }[] = [
    { name: 'Web Development', percentage: 80 },
    { name: 'Cross Application Development', percentage: 50 },
    { name: 'Desktop Applications', percentage: 65 }
  ];

}
