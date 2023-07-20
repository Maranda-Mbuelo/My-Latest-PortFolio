import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  name: string = 'Mbuelo Maranda';
  role: string = 'Self-taught Developer, Designer';
  paragraph: string = `And also a Freelancer providing services for programming and design content needs.\
  <br> Join me below and let's bring some software into existance!`;
  image: string = '/assets/images/nobgprofile.png';

}
