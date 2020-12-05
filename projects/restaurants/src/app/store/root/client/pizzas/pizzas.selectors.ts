import {createSelector} from '@ngrx/store';
import { RootStoreState } from '../../index'
import { State } from './pizzas.state'

export const getPizzasState = (state: RootStoreState.State) => state.client.pizzas;

export const getPizzasResponseState = createSelector(
  getPizzasState,
  (state: State) => state.pizzasResponse
);

export const getLoadingState = createSelector(
  getPizzasState,
  (state: State) => state.loading
);
