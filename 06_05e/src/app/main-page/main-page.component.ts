import {Component, inject} from '@angular/core';
import {ZipcodeEntryComponent} from '../zipcode-entry/zipcode-entry.component';
import {CurrentConditionsComponent} from '../current-conditions/current-conditions.component';
import {CountriesStore} from '../countries.store';
import {CurrentConditionsStore} from '../current-conditions.store';

@Component({
  selector: 'app-main-page',
  imports: [
    ZipcodeEntryComponent,
    CurrentConditionsComponent
  ],
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  private store = inject(CurrentConditionsStore);
  countryStore = inject(CountriesStore);
  countries = this.countryStore.countries;
  currentConditions = this.store.conditions;

  addLocation(zipcode : string){
    const [zip, country] = zipcode.split(',');
    this.countryStore.selectCountry(country);
    this.store.addZipcode(zipcode);
  }

  removeZip(zipcode: string) {
    this.store.removeZipcode(zipcode);
  }


}
