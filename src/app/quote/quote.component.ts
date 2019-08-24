import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
{id:1, name:'Nothing is better than Pray', author: 'Shakespare'},
{id:2, name:'Failurecomes from trials', author: 'Tom'},
{id:3, name:'Time wasted never come back', author: 'Albert'}
];
  constructor() { }

  ngOnInit() {
  }

}
