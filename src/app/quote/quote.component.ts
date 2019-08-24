import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'Nothing is better than Pray',
      'Odette',
      'Shakespare',
      new Date(2018, 3, 14),
      0,
      0),
    new Quote(
      2,
      'Failure comes from trials',
      'Aline',
      'Tom',
      new Date(2019,8,1),
      0,
      0),
      
    new Quote(
      3, 
      'Time wasted never come back',
       'Albert',
       'Thomson',
       new Date(1990,2,14),
       0,
       0),
  ];

  // upvote(index) {
  //   this.quotes[index].upvotes++;
  // }
  // downvote(index) {
  //   this.quotes[index].downvotes++;
  // }

  // completeQuote(isComplete, index) {
  //   if (isComplete) {
  //     this.quotes.splice(index, 1);
  //   }
  // }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
  constructor() { }

  ngOnInit() {
  }

}

