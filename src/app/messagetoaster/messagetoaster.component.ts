import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-messagetoaster',
  templateUrl: './messagetoaster.component.html',
  styleUrls: ['./messagetoaster.component.css'],
})
export class MessagetoasterComponent implements OnInit {
  @Input() message: string = 'Thank you for viewing my work! If You have anything for me, I\'d be more than happy to help';
  @Input() isMobile: boolean = false;
  @Input() duration: number = 15000; // Duration in milliseconds
  @Input() showBuyMeACoffeeLink: boolean = false;

  isVisible: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    setTimeout(() => {
      this.isVisible = false; // Hide the toaster after the specified duration
    }, this.duration);
  }
}
