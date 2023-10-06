import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Project, ProjectImages } from '../../interfaces/project';
import { ActivatedRoute } from '@angular/router';
import { Navigation } from 'src/interfaces/navigation';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project | null = null;
  showToaster = false;
  navigationVisibility!: boolean;
  navigation: Navigation[] = [];
  uniqueProjectTypes: string[] = this.getUniqueProjectTypes(this.projects);


  constructor(private http: HttpClient, private route: ActivatedRoute, private method: AppComponent) {}

  ngOnInit() {
    this.fetchProjects();
    this.method.fetchNavigation('Projects', this.navigation);
    this.route.paramMap.subscribe(params => {
      if (params.has('actualPage')) {
        this.navigationVisibility = true;
      } else {
        this.navigationVisibility = false;
      }
    });
  }

  fetchProjects() {
    this.http.get<Project[]>('/assets/projects.json').subscribe((data) => {
      this.projects = data;
      this.uniqueProjectTypes = this.getUniqueProjectTypes(data); // Add this line
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

  openToaster(project: Project) {
    this.selectedProject = project;
    this.showToaster = true;
  }
  

  closeToaster() {
    this.showToaster = false;
  }

  openGitHub(project: Project | null) {
    if (project && project.projectGitHubRepo) {
      window.open(project.projectGitHubRepo, '_blank');
    }
  }

  openLiveWebsite(project: Project | null) {
    if (project && project.liveSite) {
      window.open(project.liveSite, '_blank');
    }
  }

  getCssClass(type: string, i: number): string {
    if (type.toLowerCase() === 'c#') {
      return 'bg-indigo-200 text-indigo-800 rounded-full px-2 py-1 text-xs font-semibold mr-2';
    } else if (type.toLowerCase() === 'asp.net') {
      return 'bg-red-200 text-red-800 rounded-full px-2 py-1 text-xs font-semibold mr-2';
    } else if (type.toLowerCase() === 'angular' && i === 0) {
      return 'bg-blue-200 text-blue-800 rounded-full px-2 py-1 text-xs font-semibold mr-2';
    } else if (type.toLowerCase() === 'angular' && i !== 0) {
      return ''; // Empty string to hide repeated Angular
    } else if (type.toLowerCase() === 'mvc') {
      return 'bg-red-200 text-red-800 rounded-full px-2 py-1 text-xs font-semibold mr-2';
    } else if (type.toLowerCase() === 'html' || type.toLowerCase() === 'scss' || type.toLowerCase() === 'css') {
      return 'bg-pink-200 text-pink-800 rounded-full px-2 py-1 text-xs font-semibold mr-2';
    } else if (type.toLowerCase() === 'jquery') {
      return 'bg-yellow-200 text-yellow-800 rounded-full px-2 py-1 text-xs font-semibold mr-2';
    } else {
      if(type.toLowerCase() === 'microsoft sql' || type.toLowerCase() === 'api'){
        return 'bg-yellow-200 text-yellow-800 rounded-full px-2 py-1 text-xs font-semibold mr-2';
      } else{
        return 'bg-pink-200 text-pink-800 rounded-full px-2 py-1 text-xs font-semibold mr-2'; // Return an empty string for other types
      }
    }
  }
  


  getUniqueProjectTypes(projects: Project[]): string[] {
    const uniqueTypes: any[] = [];
  
    projects.forEach((project) => {
      project.projectType.forEach((type) => {
        if (!uniqueTypes.includes(type)) {
          uniqueTypes.push(type);
        }
      });
    });
  
    return uniqueTypes;
  }
  
    
}
