import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { CurrentConditionsActions } from '../actions/current-conditions.actions';
import { ZipCodeActions } from '../actions/zip-code.actions';
import { WeatherService } from '../weather.service';

@Injectable()
export class CurrentConditionsEffects {
  actions$ = inject(Actions);
  weatherService = inject(WeatherService);

  loadCurrentConditions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ZipCodeActions.addZipCode),
      exhaustMap(({ zipCode, countryCode }) => {
        return this.weatherService
          .getCurrentConditions({ zipCode, countryCode })
          .pipe(
            // If successful, dispatch success action with result
            map((conditions) =>
              CurrentConditionsActions.currentConditionsLoaded({
                zipCode,
                conditions,
              })
            ),
            // If request fails, dispatch failed action
            catchError((error) =>
              of(
                CurrentConditionsActions.currentConditionsFailed({
                  zipCode,
                  error,
                })
              )
            )
          );
      })
    );
  });

  removeCurrentConditions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ZipCodeActions.removeZipCode),
      exhaustMap(({ zipCode }) =>
        of(CurrentConditionsActions.removeCurrentConditions({ zipCode }))
      )
    );
  });
}
