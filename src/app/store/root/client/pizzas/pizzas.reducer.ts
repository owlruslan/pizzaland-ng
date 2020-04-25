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
      };
    }
    case ActionTypes.GetPizzasFailure: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }

}
