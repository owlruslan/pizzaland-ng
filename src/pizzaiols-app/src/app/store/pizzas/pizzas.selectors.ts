import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FEATURE_KEY, State} from './pizzas.state';

export const getState = createFeatureSelector<State>(FEATURE_KEY);

export const getPizzasResponseState = createSelector(
  getState,
  (state: State) => state.pizzasResponse,
);

export const getLoadingState = createSelector(
  getState,
  (state: State) => state.loading,
);
