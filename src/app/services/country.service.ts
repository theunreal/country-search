import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Country } from '../interfaces/country.interface';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CountryService {

  constructor(private http: Http) { }

  searchCountry(name) {
    return this.http.get(name)
    .toPromise()
    .then((response: Response) => response.json());
  }

}
