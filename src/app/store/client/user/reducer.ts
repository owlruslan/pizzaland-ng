import {ActionTypes, Actions} from './actions';
import {initialState} from './state';
import {State} from './state';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {

    /* Create User */

    case ActionTypes.CreateUser: {
      return {
        ...state,
      };
    }
    case ActionTypes.CreateUserSuccess: {
      return {
        ...state,
      };
    }
    case ActionTypes.CreateUserFailure: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }

}
