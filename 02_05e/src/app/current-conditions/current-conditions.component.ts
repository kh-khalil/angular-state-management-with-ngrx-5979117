import {Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {zipCodesFeatureKey} from '../reducers/zip-codes.reducer';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  imports: [
    AsyncPipe
  ],
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  zipcodes$ = inject(Store).select(zipCodesFeatureKey);

  zipcodes = inject(Store).selectSignal(state => state.zipCodes);


}
