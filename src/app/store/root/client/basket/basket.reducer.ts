import {ActionTypes, Actions} from './basket.actions';
import {initialState} from './basket.state';
import {State} from './basket.state';
import {GetPizzasResponse} from '@app/models/pizzas/get-pizzas-response.model';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    // Add Pizzas
    case ActionTypes.AddPizzas: {
      const resp = new GetPizzasResponse();
      resp.pizzas = action.payload.pizzas;

      return {
        ...state,
        pizzasResponse: resp
      };
    }

    default: {
      return state;
    }
  }

}
