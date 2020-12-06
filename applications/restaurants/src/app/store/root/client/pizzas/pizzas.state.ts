import { GetPizzasResponse } from '../../../../../../../../libraries/core/src/lib/models/pizzas/get-pizzas-response.model';

export interface State {
  pizzasResponse: GetPizzasResponse;
  toppingsResponse: string[];
  loading: boolean;
}

export const initialState: State = {
  pizzasResponse: {
    pizzas: [],
  },
  toppingsResponse: [
    'anchovy', 'bacon', 'basil', 'chili', 'mozzarella', 'mushroom',
    'olive', 'onion', 'pepper', 'pepperoni', 'sweetcorn', 'tomato',
  ],
  loading: false,
};
