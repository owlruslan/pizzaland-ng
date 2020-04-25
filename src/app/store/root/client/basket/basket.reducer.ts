import {ActionTypes, Actions} from './basket.actions';
import {initialState} from './basket.state';
import {State} from './basket.state';

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
