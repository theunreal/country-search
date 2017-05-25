import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() country;

  constructor() { }

  ngOnInit() {
  }

}
