import {ActionTypes, Actions} from './pizzas.actions';
import {initialState} from './pizzas.state';
import {State} from './pizzas.state';

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
        loading: false
      };
    }
    case ActionTypes.GetPizzasFailure: {
      return {
        ...state,
        pizzasResponse: null,
        loading: false
      };
    }

    default: {
      return state;
    }
  }

}
