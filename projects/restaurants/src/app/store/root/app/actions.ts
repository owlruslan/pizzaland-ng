import { Action } from '@ngrx/store';
import { ResponseError } from '../../../../../../core/src/lib/models/response/response-error.model';

export enum ActionTypes {
  AddErrorResponse = '[Errors] Add Error Response',
}

export class AddErrorResponse implements Action {
  public readonly type = ActionTypes.AddErrorResponse;

  constructor(public payload: { response: ResponseError }) {
  }
}

export type Actions = AddErrorResponse;
