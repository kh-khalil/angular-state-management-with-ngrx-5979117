import {Country} from './app.types';
import {Injectable} from '@angular/core';
import {signalState} from '@ngrx/signals';

const DEFAULT_COUNTRIES: Country[] = [
  {code: 'US', name: 'United States of America'},
  {code: 'CA', name: 'Canada'},
  {code: 'FR', name: 'France'}
];

type CountriesState = {
  countries: Country[]
}

const initialState: CountriesState = {
  countries: DEFAULT_COUNTRIES
}

@Injectable({
  providedIn: 'root',
})
export class CountriesStore {

  private readonly state = signalState(initialState);
  readonly countries = this.state.countries;

}
