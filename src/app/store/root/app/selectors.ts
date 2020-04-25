import {createSelector} from '@ngrx/store';
import {State} from './state';
import {RootStoreState} from '@app/store/root';

export const getAppState = (state: RootStoreState.State) => state.app;

export const getErrorsResponseState = createSelector(
  getAppState,
  (state: State) => state.errorResponse
);
