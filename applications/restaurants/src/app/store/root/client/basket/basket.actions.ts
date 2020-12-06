import { Action } from '@ngrx/store';
import { Pizza } from '../../../../../../../../libraries/core/src/lib/models/pizzas/pizza.model';

export enum ActionTypes {
  AddPizza = '[Basket] Add Pizza',
}

// Add Pizza

export class AddPizza implements Action {
  readonly type = ActionTypes.AddPizza;

  constructor(public payload: { pizza: Pizza }) {
  }
}

export type Actions = AddPizza;
