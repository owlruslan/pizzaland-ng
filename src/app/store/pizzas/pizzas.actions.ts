import {createAction, props} from '@ngrx/store';
import { ResponseError} from '../../models';
import {GetPizzasResponse} from "../../pizzas/get-pizzas-response.model";
import {FEATURE_KEY} from "../cart/cart.state";

export const getPizzas = createAction(`${FEATURE_KEY}/getPizzas`);
export const getPizzasSuccess = createAction(`${FEATURE_KEY}/getPizzasSuccess`, props<{ response: GetPizzasResponse }>());
export const getPizzasFailure = createAction(`${FEATURE_KEY}/getPizzasFailure`, props<{ response: ResponseError }>());
