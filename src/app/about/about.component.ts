import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Navigation } from 'src/interfaces/navigation';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  paragraph: string = `Hi there! I'm a 19-year-old self-taught developer passionate about programming and technology. My coding journey began with C++ as my first programming language, and since then, I have been on an exciting learning adventure.
  
  Through the power of online resources, especially YouTube, I acquired a vast amount of knowledge. One channel that profoundly influenced my learning experience is Giraffe Academy, created by the amazing Mike Dane. His courses and tutorials played a pivotal role in shaping my understanding of programming concepts. Mike Dane's teaching style made complex topics approachable and easy to comprehend.

  As a self-taught developer, I have honed my skills in various areas. I am proficient in TypeScript and Angular, enabling me to build web applications with ease. I am also experienced in working with APIs, both consuming external APIs and creating my own.

  Hosting web apps using Angular has become second nature to me. I take pride in my ability to create robust and responsive user interfaces using HTML and CSS. The combination of Angular and TypeScript has become my favorite stack, allowing me to write clean and maintainable code.

  While I continue to explore different technologies and expand my knowledge, I am actively seeking job opportunities to further develop my skills and contribute to real-world projects. My goal is to work as a full-stack developer, utilizing my expertise in Angular and TypeScript.

  In addition to my technical skills, I am a dedicated and enthusiastic learner, always eager to stay up to date with the latest industry trends. I have a strong work ethic and a problem-solving mindset, which enables me to tackle challenges head-on and deliver high-quality results.

  Aside from coding, I have a passion for education and helping others. In the future, I aspire to open my own coding bootcamp, inspired by the Giraffe Academy, to provide an inclusive learning environment for individuals without a programming background or formal education.

  If you are interested in connecting with me or have any opportunities available, I would love to hear from you. Feel free to reach out through the contact form on my website, and I'll be sure to respond promptly.

  Thank you for taking the time to learn more about me and my journey as a self-taught developer. I look forward to the exciting opportunities that lie ahead!`
  navigation: Navigation[] = [];

  constructor(private method: AppComponent){}

  ngOnInit(): void {
    this.method.fetchNavigation('About', this.navigation);
  }

}
