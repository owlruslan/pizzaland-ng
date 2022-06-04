import mockGetPizzasResponse from "../../pizzas/get-pizzas-response.mock";
import {Pizza} from "../../pizzas/pizza.model";

export const FEATURE_KEY = `cart`;

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
