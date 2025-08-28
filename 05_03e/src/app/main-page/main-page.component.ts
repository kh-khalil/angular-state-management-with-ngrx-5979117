import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ZipCodeActions } from '../actions/zip-code.actions';
import { CountriesStore } from '../countries.store';
import { CurrentConditionsComponent } from '../current-conditions/current-conditions.component';
import { selectCurrentConditions } from '../reducers';
import { CurrentConditionsState } from '../reducers/current-conditions.reducer';
import {
  ZipCodeEntry,
  ZipcodeEntryComponent,
} from '../zipcode-entry/zipcode-entry.component';

@Component({
  selector: 'app-main-page',
  imports: [ZipcodeEntryComponent, CurrentConditionsComponent],
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  private store = inject(Store);
  private countriesStore = inject(CountriesStore);
  countries = this.countriesStore.countries;

  addLocation(zipCodeEntry: ZipCodeEntry) {
    this.countriesStore.selectCountry(zipCodeEntry.countryCode);
    this.store.dispatch(ZipCodeActions.addZipCode(zipCodeEntry));
  }
  currentConditions = this.store.selectSignal<CurrentConditionsState>(
    selectCurrentConditions
  );

  removeZip(zipCode: string) {
    this.store.dispatch(ZipCodeActions.removeZipCode({ zipCode }));
  }
}
