import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './user.state';

export const getUserState = createFeatureSelector<State>('user');

export const getUserTokenState = createSelector(
  getUserState,
  (state: State) => state.userTokenResponse.token
);

