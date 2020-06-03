import {Actions, ActionTypes} from './actions';
import {initialState, State} from './state';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.AddErrorResponse: {
      return {
        ...state,
        errorResponse: action.payload.response
      };
    }

    default: {
      return state;
    }
  }
}
