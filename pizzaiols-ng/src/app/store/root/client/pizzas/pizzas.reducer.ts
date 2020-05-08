import {ActionTypes, Actions} from './pizzas.actions';
import {initialState} from './pizzas.state';
import {State} from './pizzas.state';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {

    // Login
    case ActionTypes.GetPizzas: {
      return {
        ...state,
      };
    }
    case ActionTypes.GetPizzasSuccess: {
      return {
        ...state,
        pizzasResponse: action.payload.response.data
      };
    }
    case ActionTypes.GetPizzasFailure: {
      return {
        ...state,
        pizzasResponse: null
      };
    }

    default: {
      return state;
    }
  }

}
