import {Component, inject, output} from '@angular/core';
import {Store} from '@ngrx/store';
import {ZipCodeActions} from '../actions/zip-code.actions';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {

  zipAdded = output<string>();


}
