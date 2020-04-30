import {Action} from '@ngrx/store';


export enum ActionTypes {
  AddPizzas = '[Basket] Add Pizzas',
}


// Add Pizzas

export class AddPizzas implements Action {
  readonly type = ActionTypes.AddPizzas;

  constructor(public payload: {pizzas: any[]}) {
  }
}


export type Actions = AddPizzas;
