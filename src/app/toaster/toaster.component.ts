import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent {
  @Input() showToaster: boolean = false;
  @Input() isAsp: boolean = false;
  @Input() projectName: string | undefined = undefined;
  @Input() projectDescription: string | undefined = undefined;
  @Output() closeToasterEvent = new EventEmitter<void>();
  @Output() openGitHubEvent = new EventEmitter<void>();
  @Output() openLiveWebsiteEvent = new EventEmitter<void>();

  closeToaster() {
    this.closeToasterEvent.emit();
  }

  openGitHub() {
    this.openGitHubEvent.emit();
  }

  openLiveWebsite() {
    this.openLiveWebsiteEvent.emit();
  }
}
