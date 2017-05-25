import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  countryList: Country[] = [];

  constructor(private countryService: CountryService) { }

  /**
  * HTTP Call to the server to search for countries
  */
  updateSearch($event) {
    this.countryService.searchCountry($event)
    .then(
      (data: Country[]) => {
        this.countryList = data;
        console.log(data);
    },
      (err) => console.log(err)
  );
  }

}
