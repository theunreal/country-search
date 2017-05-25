import { Component, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css']
})
export class SearchCountryComponent {

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  private debouncer: Subject<string> = new Subject();

  constructor() {
    this.debouncer
        .debounceTime(200)
        .subscribe((val) => this.onChange.emit(val));
   }

  updateSearch(value) {
      if (value.length >= 2)
        this.debouncer.next(value);
  }
}
