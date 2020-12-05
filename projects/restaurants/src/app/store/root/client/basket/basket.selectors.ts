import {createSelector} from '@ngrx/store';
import { GetPizzasResponse } from '../../../../models/pizzas/get-pizzas-response.model'
import { State } from '../pizzas/pizzas.state'
import { RootStoreState } from '../../index'


export const getBasketState = (state: RootStoreState.State) => state.client.basket;

export const getPizzasResponseState = createSelector(
  // @ts-ignore
  getBasketState,
  (state: State) => state.pizzasResponse
);

export const getTotalState = createSelector(
  getPizzasResponseState,
  // @ts-ignore
  (state: GetPizzasResponse) => {
    if (state.pizzas) {
      return state.pizzas
        .map(pizza => pizza.price)
        .reduce(
        // @ts-ignore
        (accumulator, currentValue) => accumulator + currentValue
        );
    }
  }
);

export const getPizzasCountState = createSelector(
  getPizzasResponseState,
  // @ts-ignore
  (state: GetPizzasResponse) => {
    if (state.pizzas) {
      return state.pizzas.length;
    }
  }
);
