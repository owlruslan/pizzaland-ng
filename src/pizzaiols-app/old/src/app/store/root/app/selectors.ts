import { createSelector } from '@ngrx/store';
import { State } from './state';
import { RootStoreState } from '../index';

export const getAppState = (state: RootStoreState.State) => state.app;

export const getErrorsResponseState = createSelector(
  getAppState,
  (state: State) => state.errorResponse,
);
