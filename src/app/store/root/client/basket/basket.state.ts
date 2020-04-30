import {GetPizzasResponse} from '@app/models/pizzas/get-pizzas-response.model';

export interface State {
  pizzasResponse: GetPizzasResponse;
}

export const initialState: State = {
  pizzasResponse: {
    pizzas: [
      {
        id: '0',
        name: 'PIZZA_NAME_0',
        description: 'PIZZA_DESCRIPTION_0',
        toppings: ['anchovy'],
        price: 100,
      },
      {
        id: '1',
        name: 'PIZZA_NAME_1',
        description: 'PIZZA_DESCRIPTION_1',
        toppings: ['anchovy'],
        price: 130,
      },
    ]
  }
};
