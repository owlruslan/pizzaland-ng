import {GetPizzasResponse} from '@app/models/pizzas/get-pizzas-response.model';

const mockGetPizzasResponse = new GetPizzasResponse();
mockGetPizzasResponse.pizzas = [
  {
    id: '0',
    name: 'Margherita',
    description: 'PIZZA_DESCRIPTION_0',
    toppings: ['anchovy', 'basil', 'mozzarella', 'tomato'],
    price: 100,
  },
  {
    id: '1',
    name: 'Marinara',
    description: 'PIZZA_DESCRIPTION_1',
    toppings: ['sweetcorn', 'pepper', 'onion', 'olive'],
    price: 130,
  },
  {
    id: '2',
    name: 'Napoletana',
    description: 'PIZZA_DESCRIPTION_2',
    toppings: ['bacon', 'mushroom', 'chili', 'pepperoni'],
    price: 146,
  }
];

export default mockGetPizzasResponse;
