import {GetPizzasResponse} from "../../pizzas/get-pizzas-response.model";

export const FEATURE_KEY = `pizzas`;

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
