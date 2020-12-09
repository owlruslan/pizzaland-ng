import { GetPizzasResponse } from '../../../../../../../core/src/lib/models/pizzas/get-pizzas-response.model';
import mockGetPizzasResponse from '../../../../mocks/pizzas/get-pizzas-response.mock';

export interface State {
  pizzasResponse: GetPizzasResponse;
}

export const initialState: State = {
  pizzasResponse: {
    pizzas: mockGetPizzasResponse?.pizzas?.slice(0, 2),
  },
};
