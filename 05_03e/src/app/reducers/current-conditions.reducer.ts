import { createReducer, on } from '@ngrx/store';
import { CurrentConditionsActions } from '../actions/current-conditions.actions';
import { CurrentConditions } from '../app.types';

export const currentConditionsFeatureKey = 'currentConditions';

export type CurrentConditionsState = Record<string, CurrentConditions>;

export const initialState: CurrentConditionsState = {};

export const currentConditionsReducer = createReducer(
  initialState,
  on(CurrentConditionsActions.currentConditionsLoaded, (state, action) => ({
    ...state,
    [action.zipCode]: action.conditions,
  })),
  on(CurrentConditionsActions.removeCurrentConditions, (state, action) => {
    const newState = { ...state };
    delete newState[action.zipCode];
    return newState;
  })
);
