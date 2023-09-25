import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Project, ProjectImages } from '../../interfaces/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
[x: string]: any;
  projects: Project[] = [];
  selectedProjectName: string | undefined;
  showModal = false; // Add this property
  backgroundImage = ''; // Add this property
  githubLink = ''; // Add this property
  liveLink = ''; // Add this property

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchProjects();
  }

  // In your projects component
openProject(projectName: string) {
  // Find the selected project and set the modal data
  const selectedProject = this.projects.find((project) => project.projectName === projectName);
  if (selectedProject) {
    this.showModal = true;
    this.backgroundImage = selectedProject.projectImages[0];
    // this.githubLink = selectedProject.githubLink;
    // this.liveLink = selectedProject.liveLink;
  }
}
  


  fetchProjects() {
    this.http.get<Project[]>('/assets/projects.json').subscribe((data) => {
      this.projects = data;
    });
  }

  getProjectImage(project: Project): string {
    if (Array.isArray(project.projectImages) && project.projectImages.length > 0) {
      const firstImage = project.projectImages[0];
      if (typeof firstImage === 'string') {
        return firstImage;
      } else {
        const projectImages = firstImage as ProjectImages;
        return projectImages.image1;
      }
    }
    // Return an empty string if no images are available
    return '';
  }
  
  
}
