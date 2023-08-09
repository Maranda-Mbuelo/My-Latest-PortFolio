import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Navigation } from 'src/interfaces/navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularfolio';

  constructor(private http: HttpClient){}

  fetchNavigation(component: string, array: Navigation[]) {
    var count = 0;
    this.http.get<Navigation[]>('/assets/navigation.json').subscribe((data) => {
      data.forEach(element => {
        if(element.name != component){
          array.push(element);
          count++;
        } else{
          // console.log(element);
        }
      })
    });
  }
}
