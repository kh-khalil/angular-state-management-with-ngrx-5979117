import {Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {zipCodesFeatureKey} from '../reducers/zip-codes.reducer';
import {AsyncPipe, DecimalPipe, KeyValuePipe} from '@angular/common';
import {WeatherService} from '../weather.service';
import {CurrentConditionsState} from '../reducers/current-conditions.reducer';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  imports: [
    DecimalPipe,
    KeyValuePipe
  ],
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  currentConditions = inject(Store).selectSignal<CurrentConditionsState>(state => state.currentConditions);

  weatherService = inject(WeatherService);


}
