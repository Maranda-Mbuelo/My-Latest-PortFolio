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
    const newArray: Navigation[] = []; // Create a new array
    this.http.get<Navigation[]>('/assets/navigation.json').subscribe((data) => {
      data.forEach(element => {
        if (element.name != component) {
          newArray.push(element);
          count++;
        } else {
          // console.log(element);
        }
      });
  
      newArray.forEach(element => {
        if (component === "Home" || component === "About" || component === "Projects" || component === "Service") {
          if (element.name === "Projects") {
            element.path = "mbuelo-maranda/Projects/:actualPage";
            array.push(element);
          } else if (element.name === "Services") {
            element.path = "mbuelo-maranda/Service/:actualPage";
            array.push(element);
          } else {
            array.push(element);
          }
        }
      });
    });
  }  
  
}
