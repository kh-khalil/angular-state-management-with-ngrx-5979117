import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {zipCodeReducer, zipCodesFeatureKey, ZipCodeState} from './zip-codes.reducer';
import {
  currentConditionsFeatureKey,
  currentConditionsReducer,
  CurrentConditionsState
} from './current-conditions.reducer';

export interface State {
  [zipCodesFeatureKey]: ZipCodeState;
  [currentConditionsFeatureKey]: CurrentConditionsState;

}

export const reducers: ActionReducerMap<State> = {
 [zipCodesFeatureKey]: zipCodeReducer,
  [currentConditionsFeatureKey]: currentConditionsReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
