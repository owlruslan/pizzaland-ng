import {RootStoreState} from '@app/store/root';
import {createSelector} from '@ngrx/store';
import {State} from '@app/store/root/client/basket/basket.state';

export const getBasketState = (state: RootStoreState.State) => state.client.basket;

export const getPizzasResponseState = createSelector(
  getBasketState,
  (state: State) => state.pizzasResponse
);

export const getTotalState = createSelector(
  getBasketState,
  (state: State) =>
    state.pizzasResponse.pizzas
      .map(pizza => pizza.price)
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue
      )
);

export const getPizzasCountState = createSelector(
  getBasketState,
  (state: State) =>
    state.pizzasResponse.pizzas.length
);
