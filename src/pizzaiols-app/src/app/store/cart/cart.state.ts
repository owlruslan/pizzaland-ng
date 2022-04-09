import mockGetPizzasResponse from "../../mocks/pizzas/get-pizzas-response.mock";
import {Pizza} from "../../models";

export const FEATURE_KEY = `shared/cart`;

export interface State {
  pizzas: Pizza[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: State = {
  pizzas: mockGetPizzasResponse.pizzas?.slice(0, 2) || [],
  loading: false,
  loaded: true,
};
