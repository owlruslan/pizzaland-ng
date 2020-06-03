import {UserStoreState} from './user';
import {PizzasStoreState} from '@app/store/root/client/pizzas';
import {BasketStoreState} from '@app/store/root/client/basket';

export interface State {
  user: UserStoreState.State;
  pizzas: PizzasStoreState.State;
  basket: BasketStoreState.State;
}

export const initialState: State = {
  user: null,
  pizzas: null,
  basket: null,
};
