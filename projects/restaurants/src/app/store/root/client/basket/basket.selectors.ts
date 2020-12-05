import {RootStoreState} from '@app/store/root';
import {createSelector} from '@ngrx/store';
import {State} from '@app/store/root/client/basket/basket.state';
import {GetPizzasResponse} from '@app/models/pizzas/get-pizzas-response.model';

export const getBasketState = (state: RootStoreState.State) => state.client.basket;

export const getPizzasResponseState = createSelector(
  getBasketState,
  (state: State) => state.pizzasResponse
);

export const getTotalState = createSelector(
  getPizzasResponseState,
  (state: GetPizzasResponse) => {
    if (state.pizzas) {
      return state.pizzas
        .map(pizza => pizza.price)
        .reduce(
          (accumulator, currentValue) => accumulator + currentValue
        );
    }
  }
);

export const getPizzasCountState = createSelector(
  getPizzasResponseState,
  (state: GetPizzasResponse) => {
    if (state.pizzas) {
      return state.pizzas.length;
    }
  }
);
