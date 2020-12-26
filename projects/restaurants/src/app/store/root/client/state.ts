import { UserStoreState } from './user';
import { BasketStoreState } from './basket';
import { PizzasStoreState } from './pizzas';
import { RestaurantsStoreState } from './restaurants';

export interface State {
  user: UserStoreState.State;
  pizzas: PizzasStoreState.State;
  basket: BasketStoreState.State;
  restaurants: RestaurantsStoreState.State;
}

export const initialState: State = {
  user: UserStoreState.initialState,
  pizzas: PizzasStoreState.initialState,
  basket: BasketStoreState.initialState,
  restaurants: RestaurantsStoreState.initialState,
};
