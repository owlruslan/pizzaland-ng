import {Action, createReducer, on} from '@ngrx/store';
import {add} from './cart.actions';
import {initialState, State} from './cart.state';

const cartReducer = createReducer(
  initialState,

  on(add, (state, {pizza}) => {
      return {
        ...state,
        entities: [...state.pizzas, pizza],
      }
    }
  ),
);

export function reducer(state: State | undefined, action: Action): State {
  return cartReducer(state, action);
}
