import {CurrentConditions} from './app.types';
import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {inject} from '@angular/core';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {exhaustMap, tap} from 'rxjs';
import {WeatherService} from './weather.service';

export type CurrentConditionsState = {
  conditions: Record<string, CurrentConditions>;
};

export const initialState: CurrentConditionsState = {
  conditions: {}
};

export const CurrentConditionsStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withMethods((store, weatherService = inject(WeatherService)) => ({

    addZipcode: rxMethod<string>(
      exhaustMap(zipcode =>
        weatherService.getCurrentConditions(zipcode).pipe(
          tap(conditions => patchState(store, {conditions: {...store.conditions(), [zipcode]: conditions} })),
        )
      )
    ),

    removeZipcode(zipcode: string): void {
      const newState = {...store.conditions()};
      delete newState[zipcode];
      patchState(store, {conditions: newState})
    }
  }))
);
