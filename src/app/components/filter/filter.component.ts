import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() data: string[];
  @Input() placeHolder: string;
  @Output() onFilter: EventEmitter<any> = new EventEmitter();


  constructor() { }

  filter($event) {
    this.onFilter.emit($event);
  }

}
