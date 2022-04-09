import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FEATURE_KEY, State} from './user.state';

export const getState = createFeatureSelector<State>(FEATURE_KEY);

export const getUserTokenState = createSelector(
  getState,
  (state: State) => state.userTokenResponse.token,
);

export const getUserResponseState = createSelector(
  getState,
  (state: State) => state.userResponse,
);

