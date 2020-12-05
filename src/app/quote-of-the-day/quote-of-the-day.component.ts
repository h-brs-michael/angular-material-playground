import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quote-of-the-day',
  templateUrl: './quote-of-the-day.component.html',
  styleUrls: ['./quote-of-the-day.component.scss']
})
export class QuoteOfTheDayComponent implements OnInit {

  quote$: Observable<any>;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    // apis nobody talks about: https://medium.com/javascript-in-plain-english/7-free-apis-that-nobody-is-talking-about-cf974e15917

    // anti pattern:
    this.quote$ = this.http.get('https://favqs.com/api/qotd');
  }

}
