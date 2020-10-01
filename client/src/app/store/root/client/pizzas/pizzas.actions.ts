import {Action} from '@ngrx/store';
import {ResponseSuccess} from '@app/models/response/response-success.model';
import {ResponseError} from '@app/models/response/response-error.model';
import {GetPizzasResponse} from '@app/models/pizzas/get-pizzas-response.model';


export enum ActionTypes {

  // Get Pizzas

  GetPizzas = '[Pizzas] Get Pizzas',
  GetPizzasSuccess = '[Pizzas] Get Pizzas Success',
  GetPizzasFailure = '[Pizzas] Get Pizzas Failure',
}


// GetPizzas

export class GetPizzas implements Action {
  readonly type = ActionTypes.GetPizzas;
}

export class GetPizzasSuccess implements Action {
  readonly type = ActionTypes.GetPizzasSuccess;

  constructor(public payload: {response: ResponseSuccess<GetPizzasResponse>}) {
  }
}

export class GetPizzasFailure implements Action {
  readonly type = ActionTypes.GetPizzasFailure;

  constructor(public payload: {response: ResponseError}) {
  }
}


export type Actions =

  // GetPizzas

  | GetPizzas
  | GetPizzasSuccess
  | GetPizzasFailure;
