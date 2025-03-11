import {Component, inject} from '@angular/core';
import {ZipcodeEntryComponent} from '../zipcode-entry/zipcode-entry.component';
import {CurrentConditionsComponent} from '../current-conditions/current-conditions.component';
import {Store} from '@ngrx/store';
import {ZipCodeActions} from '../actions/zip-code.actions';
import {CurrentConditionsState} from '../reducers/current-conditions.reducer';
import {selectCurrentConditions} from '../reducers';
import {WeatherService} from '../weather.service';
import {CountriesStore} from '../countries.store';

@Component({
  selector: 'app-main-page',
  imports: [
    ZipcodeEntryComponent,
    CurrentConditionsComponent
  ],
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  private store = inject(Store);
  private countryStore = inject(CountriesStore);
  countries = this.countryStore.countries;
  currentConditions = this.store.selectSignal<CurrentConditionsState>(selectCurrentConditions);

  addLocation(zipcode : string){
    const [zip, country] = zipcode.split(',');
    //TODO Migrate to SignalStore
    // this.countryStore.selectCountry(country);
    this.store.dispatch(ZipCodeActions.addZipCode({zipcode}));
  }

  removeZip(zipcode: string) {
    this.store.dispatch(ZipCodeActions.removeZipCode({zipcode}));
  }


}
