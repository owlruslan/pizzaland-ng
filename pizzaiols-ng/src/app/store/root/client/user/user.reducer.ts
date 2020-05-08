import {ActionTypes, Actions} from './user.actions';
import {initialState} from './user.state';
import {State} from './user.state';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {

    // Login
    case ActionTypes.Login: {
      return {
        ...state,
      };
    }
    case ActionTypes.LoginSuccess: {
      return {
        ...state,
      };
    }
    case ActionTypes.LoginFailure: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }

}
