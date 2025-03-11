import {Country} from './app.types';
import {inject, Injectable} from '@angular/core';
import {patchState, signalState, signalStore, withState} from '@ngrx/signals';
import {CountryService} from './country.service';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {exhaustMap, pipe, tap} from 'rxjs';

const DEFAULT_COUNTRIES: Country[] = [
  {code: 'US', name: 'United States of America'},
  {code: 'CA', name: 'Canada'},
  {code: 'FR', name: 'France'}
];

type CountriesState = {
  countries: Country[],
  selectedCountry: string
}

const initialState: CountriesState = {
  countries: DEFAULT_COUNTRIES,
  selectedCountry: ""
}

export const CountriesStore = signalStore(
  {providedIn: 'root'},
  withState(initialState)
);

