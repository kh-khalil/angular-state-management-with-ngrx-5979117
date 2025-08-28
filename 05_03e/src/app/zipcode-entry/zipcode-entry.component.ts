import { Component, input, output } from '@angular/core';
import { Country } from '../app.types';

export interface ZipCodeEntry {
  zipCode: string;
  countryCode: string;
}

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
})
export class ZipcodeEntryComponent {
  countries = input.required<Country[]>();
  zipAdded = output<ZipCodeEntry>();

  addLocation(zipCode: string, countryCode: string) {
    // TODO Add support for country here
    this.zipAdded.emit({ zipCode, countryCode });
  }
}
