import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  getStepImage() {
    throw new Error('Method not implemented.');
  }
  @Input() projectName!: string;
  @Input() backgroundImage!: string;
  @Input() githubLink: any;
  @Input() liveLink: any;

  constructor() { }

}
