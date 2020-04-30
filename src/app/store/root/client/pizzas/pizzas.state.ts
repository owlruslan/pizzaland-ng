import {GetPizzasResponse} from '@app/models/pizzas/get-pizzas-response.model';

export interface State {
  pizzasResponse: GetPizzasResponse;
  tagsResponse: string[];
}

export const initialState: State = {
  pizzasResponse: {
    pizzas: [
      {
        id: '0',
        name: 'PIZZA_NAME_0',
        description: 'PIZZA_DESCRIPTION_0',
        tags: 'chicken',
        consist: ['anchovy'],
        price: 100,
      },
      {
        id: '1',
        name: 'PIZZA_NAME_1',
        description: 'PIZZA_DESCRIPTION_1',
        tags: 'chicken',
        consist: ['anchovy'],
        price: 130,
      },
      {
        id: '2',
        name: 'PIZZA_NAME_2',
        description: 'PIZZA_DESCRIPTION_2',
        tags: 'chicken',
        consist: ['anchovy'],
        price: 146,
      }
    ]
  },
  tagsResponse: [
    'vegan',
    'chicken'
  ]
};
