import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  // quote = 'Nothing is better than Praying'
  quotes:string[];

  constructor(){
    this.quotes=['Nothing is better than pray', 'Time wasted never come', 'Failure comes from trials']
  }
}
