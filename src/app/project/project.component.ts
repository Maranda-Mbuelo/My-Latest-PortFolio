import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project, ProjectImages } from 'src/interfaces/project';
import { Location } from '@angular/common';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project = {} as Project;
  image1!: string;
  image2!: string;
  image3!: string;
  image4!: string;

  constructor(private location: Location, private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params => {
      const project = params.get('projectName');
      if(project){
        this.fetchProject(project);
      }
    })
  }

  // project.component.ts
fetchProject(projectName: string) {
  this.http.get<Project[]>('/assets/projects.json').subscribe((data) => {
    data.forEach((project) => {
      if (project.projectName === projectName) {
        this.project = project;
        this.image1 = project.projectImages[0].toString();
        this.image2 = project.projectImages[1].toString();
        this.image3 = project.projectImages[2].toString();
        this.image4 = project.projectImages[3].toString();

        // Add step images to the project
        // this.project.projectImages = [this.image1, this.image2, this.image3, this.image4];
      }
    });
  });
}

// project.component.ts
getStepImage(index: number): string {
  if (this.project.projectImages && this.project.projectImages.length > index) {
    return this.project.projectImages[index];
  }
  // You can return a placeholder image URL or handle it as needed when the image is missing.
  return 'https://res.cloudinary.com/practicaldev/image/fetch/s--9R6knTu---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://plchldr.co/i/600x300%3F%26bg%3DEB6361%26fc%3Dfff%26text%3Dhello%2520dev.to';
}



  goBack(){
    this.location.back();
  }

  getProjectImages(projectImages: string[] | ProjectImages): string[] {
    if (Array.isArray(projectImages)) {
      return projectImages;
    } else {
      const images: string[] = [];
      Object.keys(projectImages).forEach((key: string) => {
        const imageKey = key as keyof ProjectImages;
        images.push(projectImages[imageKey]);
      });
      return images;
    }
  }
}
