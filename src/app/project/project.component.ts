import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Project, ProjectImages } from 'src/interfaces/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  @Input() projectName: string | undefined;
  project: Project = {} as Project;

  constructor(private http: HttpClient){}

  fetchProject(projectName: string) {
    this.http.get<Project[]>('/assets/projects.json').subscribe((data) => {
      data.forEach( project => {
        if(project.projectName == projectName){
          this.project = project; 
        }
      })
    });
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
