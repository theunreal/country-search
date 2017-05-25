import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import { AppRoutingModule } from './routing.module';
import { CustomRequestOptions } from './custom-request-options';

// UI
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule, MdSelectModule, MdToolbarModule, MdCardModule}
 from '@angular/material';

//Services
import { CountryService } from './services/country.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchCountryComponent } from './components/search-country/search-country.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryFiltersComponent } from './components/country-filters/country-filters.component';
import { FilterComponent } from './components/filter/filter.component';
import { CountryComponent } from './components/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchCountryComponent,
    CountryListComponent,
    CountryFiltersComponent,
    FilterComponent,
    CountryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdSelectModule,
    MdToolbarModule,
    MdCardModule
  ],
  providers: [
    {provide:RequestOptions, useClass: CustomRequestOptions },
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
