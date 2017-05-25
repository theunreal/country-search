import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-filters',
  templateUrl: './country-filters.component.html',
  styleUrls: ['./country-filters.component.css']
})
export class CountryFiltersComponent implements OnChanges {

  regions: string[] = [];
  languages: string[] = [];

  @Input() countries: Country[];
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnChanges() {
    this.regions = [];
    this.languages = [];

    /**
    * Extract the `region` property
    */
    this.countries.forEach((country) => {
    		if(!this.regions.includes(country.region)){
    				this.regions.push(country.region);
    		}
    });

    /**
    * Extract the `languages` array property
    */
    this.countries.forEach((country) => {
     	  let langs = country.languages;
    	  langs.forEach((lang) => {
    		if(!this.languages.includes(lang)){
    				this.languages.push(lang);
    		}
    	})
    });
  }

  /**
  * Filters the country list based on `region`
  */
  updateRegion($event) {
    this.countries = this.countries.filter((country) => {
      if (country.region === $event) return country;
    });
    this.onUpdate.emit(this.countries);
  }

  /**
  * Filters the country list based on `langauges`
  */
  updateLanguages($event) {
    this.countries = this.countries.filter((country) => {
      if (country.languages.includes($event)) return country;
    });
    this.onUpdate.emit(this.countries);
  }

}
