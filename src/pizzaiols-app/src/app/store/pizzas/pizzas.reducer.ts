import {Action, createReducer, on} from "@ngrx/store";
import {getPizzas, getPizzasFailure, getPizzasSuccess} from "./pizzas.actions";
import {initialState, State} from './pizzas.state';


const pizzasReducer = createReducer(
  initialState,
  on(getPizzas, (state) => {
      return {
        ...state,
        loading: true,
      };
    }
  ),
  on(getPizzasSuccess, (state, {response}) => {
      return {
        ...state,
        pizzasResponse: response,
        loading: false,
      };
    }
  ),
  // @ts-ignore
  on(getPizzasFailure, (state, {response}) => {
      return {
        ...state,
        pizzasResponse: null,
        loading: false,
      }
    }
  ),
);

export function reducer(state: State | undefined, action: Action): State {
  return pizzasReducer(state, action);
}
