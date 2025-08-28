import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { catchError, exhaustMap, filter, map, of } from 'rxjs';
import { ForecastActions } from '../actions/forecast.actions';
import { WeatherService } from '../weather.service';

@Injectable()
export class ForecastEffects {
  actions$ = inject(Actions);
  weatherService = inject(WeatherService);

  loadCurrentForecast$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((action) => action.payload.event.url.startsWith('/forecast')),
      exhaustMap((action) => {
        let zipCode = action.payload.event.url.split('/').pop();
        console.log('action.payload.event.url', action.payload.event.url);
        console.log('zipCode', zipCode);
        return this.weatherService.getForecast(zipCode).pipe(
          // If successful, dispatch success action with result
          map((data) => ForecastActions.loadForecastSuccess({ data })),
          // If request fails, dispatch failed action
          catchError((error) =>
            of(ForecastActions.loadForecastFailure({ zipCode, error }))
          )
        );
      })
    );
  });
}
