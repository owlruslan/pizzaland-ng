import {GetPizzasResponse} from '@app/models/pizzas/get-pizzas-response.model';

export interface State {
  pizzasResponse: GetPizzasResponse;
  toppingsResponse: string[];
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
      {
        id: '2',
        name: 'PIZZA_NAME_2',
        description: 'PIZZA_DESCRIPTION_2',
        toppings: ['bacon'],
        price: 146,
      }
    ]
  },
  toppingsResponse: [
    'anchovy', 'bacon', 'basil', 'chili', 'mozzarella', 'mushroom',
    'olive', 'onion', 'pepper', 'pepperoni', 'sweetcorn', 'tomato'
  ]
};
