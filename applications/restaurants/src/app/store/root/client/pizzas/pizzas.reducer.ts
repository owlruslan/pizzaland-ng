import { Actions, ActionTypes } from './pizzas.actions';
import { initialState, State } from './pizzas.state';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {

    // Login
    case ActionTypes.GetPizzas: {
      return {
        ...state,
        loading: true,
      };
    }
    case ActionTypes.GetPizzasSuccess: {
      return {
        ...state,
        pizzasResponse: action.payload.response.data,
        loading: false,
      } as State;
    }
    case ActionTypes.GetPizzasFailure: {
      return {
        ...state,
        // @ts-ignore
        pizzasResponse: null,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }

}
