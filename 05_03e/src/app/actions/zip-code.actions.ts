import { createActionGroup, props } from '@ngrx/store';
import { ZipCodeEntry } from '../zipcode-entry/zipcode-entry.component';

export const ZipCodeActions = createActionGroup({
  source: 'ZipCode',
  events: {
    'Add ZipCode': props<ZipCodeEntry>(),
    'Remove ZipCode': props<{ zipCode: string }>(),
  },
});
