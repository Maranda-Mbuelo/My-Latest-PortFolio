import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Project, ProjectImages } from '../interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = []; // Assign an empty array as the initializer

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProjects();
  }

  fetchProjects() {
    this.http.get<Project[]>('/assets/projects.json').subscribe((data) => {
      this.projects = data;
    });
  }

  openModal(projectId: string) {
    const modal = document.getElementById(projectId + 'Modal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  closeModal(projectId: string) {
    const modal = document.getElementById(projectId + 'Modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  toggleCollapse(project: Project) {
    project.collapsed = !project.collapsed;
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
    // Return a default image URL or an empty string if no images are available
    return '';
  }
  
  
}