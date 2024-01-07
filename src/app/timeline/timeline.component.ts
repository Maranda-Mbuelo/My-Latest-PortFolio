import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

  timelineArray: any = [
  {
    language: `C++`,
    dates: 'march 2022 - may 2022',
    paragraph: `I started my coding journey with C++, which was my first programming language and remains one of my favorites. During my learning process, I gained a solid understanding of fundamental concepts such as Data Types, which I am proficient in. As I progressed, I delved into object-oriented programming, where I had a lot of fun exploring the world of objects and their interactions. Decision-making using conditional statements became second nature to me, followed by the implementation of functions and the power of iteration.

    One of the highlights of my C++ learning experience was mastering classes, which gave me a strong grasp of object-oriented principles. I also expanded my knowledge by exploring vectors and arrays, which provided me with a versatile approach to handling collections of data. Inheritance allowed me to create hierarchies and build upon existing code, further enhancing my understanding of code organization.

    Additionally, I gained some exposure to data structures, which opened up new possibilities for organizing and manipulating data efficiently. Working with pointers added an extra layer of excitement to my C++ journey, as they provided unique capabilities and challenged me to think in a different way.

    Overall, my experience with C++ has been extremely rewarding, and I aspire to pursue job opportunities that allow me to utilize and further develop my skills in this language. The prospect of working with C++ brings me great joy, and I am eager to embark on new projects and challenges within this realm.`
  },
  {
    language: `C#`,
    dates: 'october 2022 - current',
    paragraph: `C# became my second programming language, and I found it to be equally fascinating as C++. Alongside familiar concepts like Data Types, object-oriented programming, and decision-making, C# introduced me to new possibilities, such as developing desktop applications and working with ASP.NET.

    With C#, I expanded my coding horizons by creating desktop applications, which allowed me to build user-friendly and interactive software. Learning about event-driven programming and GUI frameworks opened up a world of possibilities for creating intuitive and visually appealing applications.

    Additionally, I dived into the world of web development with ASP.NET. I learned how to build dynamic web applications and gained experience in handling server-side logic, interacting with databases, and implementing secure authentication.

    One of the exciting aspects of C# was the ability to create APIs. I delved into creating RESTful APIs using frameworks like ASP.NET Web API, which allowed me to build scalable and efficient communication channels between different software systems.

    Overall, my journey with C# has been enriching. It has broadened my skill set, enabling me to work on a variety of projects ranging from desktop applications to web development and API creation. I look forward to exploring more opportunities in the world of C# and leveraging my knowledge to develop innovative solutions.`
  },
  {
    language: `SQL`,
    dates: ' february 2023 - current',
    paragraph: `SQL (Structured Query Language) became my third programming language, and it opened up a whole new world of data management and database querying. With SQL, I learned how to interact with databases, design relational schemas, and perform powerful data manipulations.

    I gained proficiency in writing SQL queries to retrieve, insert, update, and delete data from databases. Understanding concepts like tables, relationships, and indexes allowed me to design efficient database structures that could handle vast amounts of data.

    Working with SQL enabled me to perform complex data operations, including joins, aggregations, and subqueries. I also learned how to optimize query performance through indexing and query optimization techniques.

    Furthermore, I explored advanced SQL topics such as stored procedures, triggers, and views, which provided me with additional tools to manage and manipulate data effectively. These features allowed me to encapsulate complex logic within the database and automate various tasks.

    SQL has been instrumental in my journey as a developer, providing me with the skills to work with data effectively and efficiently. Whether it's building robust data-driven applications or optimizing database performance, SQL has been a valuable asset in my toolkit.`
  },
  {
    language: `HTML and CSS`,
    dates: 'may 2022 - current',
    paragraph: `HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) became my fourth learning language, and they are the foundation of web development. HTML allowed me to structure the content of web pages, creating elements like headings, paragraphs, lists, and links.

    With CSS, I learned how to style and visually enhance HTML elements. I gained proficiency in creating layouts, applying colors, adjusting typography, and adding visual effects. CSS empowered me to make web pages visually appealing, engaging, and responsive.

    As I delved deeper into web development, I explored more advanced concepts such as CSS frameworks, responsive design, and CSS preprocessors like Sass. These tools helped streamline my workflow and allowed me to create more robust and scalable web applications.

    Additionally, I learned about CSS methodologies such as BEM (Block, Element, Modifier) and utility-based frameworks like Tailwind CSS. These approaches improved my code organization and enhanced my productivity.

    HTML and CSS are the backbone of every web application I develop. Their versatility and wide adoption have enabled me to create intuitive and visually stunning user interfaces. With HTML and CSS, I can transform my ideas into elegant and functional web experiences.`
  },
  {
    language: `Angular and TypeScript`,
    dates: 'april 2023 - current',
    paragraph: `Angular and TypeScript form a powerful combination for building modern web applications. Angular is a popular front-end framework that allows me to create dynamic and scalable applications with ease.

    With Angular, I can leverage TypeScript, a superset of JavaScript, which brings strong typing, enhanced tooling, and improved developer experience. TypeScript provides me with features like static typing, classes, interfaces, and modules, making my code more maintainable and less prone to errors.

    One of the standout features of Angular is its component-based architecture, allowing me to create reusable and modular UI components. This approach promotes code reusability and separation of concerns, resulting in cleaner and more maintainable codebases.

    Additionally, Angular provides powerful tools for data handling, including the ability to fetch data from APIs and work with external APIs seamlessly. I can easily manage state using RxJS, a reactive programming library, and perform efficient data manipulation and filtering.

    Angular also offers features like routing, dependency injection, and form handling, further enhancing my productivity as a developer. I can build complex applications with ease, while maintaining a clean and structured codebase.

    I truly enjoy working with Angular and TypeScript. The combination of Angular's comprehensive framework and TypeScript's expressive and scalable nature makes it my favorite language stack. I am actively seeking job opportunities in Angular development to further refine and apply my skills in TypeScript programming.`
  },
  ]

  menuIcons: any = [
    {
      icon: '<i class="fa-solid fa-house-user text-xl"></i>',
      name: 'home'
    },
    {
      icon: '<i class="fa-solid fa-list-check text-xl"></i>',
      name: 'mbuelo-maranda/Projects'
    },
    {
      icon: '<i class="fa-solid fa-comment text-xl"></i>',
      name: 'mbuelo-maranda/contactForm'
    },
    {
      icon: '<i class="fa-brands fa-github text-xl"></i>',
      name: 'https://github.com/Maranda-Mbuelo'
    }
  ]

  calculateTopPosition(index: number): string {
    const spacing = 70;
    const topPosition = `calc(40% + ${index * spacing}px)`;
    return topPosition;
  }
  


}
