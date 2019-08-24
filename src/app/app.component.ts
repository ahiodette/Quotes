import { Component } from '@angular/core';
import { Quote } from './quote';
// import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes: Quote[] = [
    {id:1, name: 'Nothing is better than Pray', author: 'Shakespare'},
    {id:2, name: 'Failure comes from trials', author: 'Tom'},
    {id:3, name: 'Time wasted never come again', author: 'Albert'}
  ];
}

//   constructor(){
//     this.quotes=['Nothing is better than pray', 'Time wasted never come', 'Failure comes from trials']
//   }
// }
