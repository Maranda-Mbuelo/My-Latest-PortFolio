import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project, ProjectImages } from 'src/interfaces/project';

@Component({
  selector: 'app-admin-add-project',
  templateUrl: './admin-add-project.component.html',
  styleUrls: ['./admin-add-project.component.css']
})
export class AdminAddProjectComponent {
  project: Project = {
    projectName: '',
    projectType: '',
    typeIcon: '',
    projectImages: [],
    projectInformation: '',
    projectGitHubRepo: '',
    steps: []
  };

  constructor(private http: HttpClient) {}

  saveProject() {
    // Send the project data to the server
    this.http.put<Project[]>('/assets/projects.json', [this.project])
      .subscribe(
        () => {
          console.log('Project saved successfully');
          // Reset the project form
          this.project = {
            projectName: '',
            projectType: '',
            typeIcon: '',
            projectImages: [],
            projectInformation: '',
            projectGitHubRepo: '',
            steps: []
          };
        },
        error => {
          console.error('Failed to save project:', error);
        }
      );
  }
}
