import { createReducer, on } from '@ngrx/store';
import { ZipCodesActions } from '../actions/zip-codes.actions';

export const zipCodesFeatureKey = 'zipCodes';

export type ZipCodeState = string[];


export const initialState: ZipCodeState = [];

export const zipCodeReducer = createReducer(
  initialState,
);

