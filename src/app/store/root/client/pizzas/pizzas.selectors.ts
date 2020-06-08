import {RootStoreState} from '@app/store/root';
import {createSelector} from '@ngrx/store';
import {State} from '@app/store/root/client/pizzas/pizzas.state';

export const getPizzasState = (state: RootStoreState.State) => state.client.pizzas;

export const getPizzasResponseState = createSelector(
  getPizzasState,
  (state: State) => state.pizzasResponse
);

export const getLoadingState = createSelector(
  getPizzasState,
  (state: State) => state.loading
);
