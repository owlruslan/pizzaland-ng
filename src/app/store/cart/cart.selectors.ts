import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FEATURE_KEY, State} from './cart.state';

export const getState = createFeatureSelector<State>(FEATURE_KEY);

export const getPizzas = createSelector(
  getState,
  (state: State) => state.pizzas,
);

export const getTotalState = createSelector(
  getState,
  (state: State) => {
    return state.pizzas.map(pizza => pizza.price || 0).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    );
  },
);

export const getPizzasCountState = createSelector(
  getState,
  (state: State) => {
    return state.pizzas.length
  },
);

export const getLoading = createSelector(
  getState,
  (state: State) => state.loading,
);

export const getLoaded = createSelector(
  getState,
  (state: State) => state.loaded,
);
