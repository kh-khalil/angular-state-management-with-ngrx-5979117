import { createActionGroup, props } from '@ngrx/store';
import { CurrentConditions } from '../app.types';

export const CurrentConditionsActions = createActionGroup({
  source: 'CurrentConditions',
  events: {
    RemoveCurrentConditions: props<{ zipCode: string }>(),
    CurrentConditionsLoaded: props<{
      zipCode: string;
      conditions: CurrentConditions;
    }>(),
    CurrentConditionsFailed: props<{ zipCode: string; error: Error }>(),
  },
});
