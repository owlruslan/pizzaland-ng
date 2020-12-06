import { Actions, ActionTypes } from './basket.actions';
import { initialState, State } from './basket.state';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.AddPizza: {
      return {
        ...state,
        pizzasResponse: {
          // @ts-ignore
          pizzas: [...state.pizzasResponse.pizzas, action.payload.pizza],
        },
      };
    }

    default: {
      return state;
    }
  }

}
