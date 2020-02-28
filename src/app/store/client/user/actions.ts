import {Action} from '@ngrx/store';


export enum ActionTypes {

  // Create User

  CreateUser = '[User] Create User',
  CreateUserSuccess = '[User] Create User Success',
  CreateUserFailure = '[User] Create User Failure',
}


/* Create User */

export class CreateUser implements Action {
  public readonly type = ActionTypes.CreateUser;
}

export class CreateUserSuccess implements Action {
  public readonly type = ActionTypes.CreateUserSuccess;
}

export class CreateUserFailure implements Action {
  public readonly type = ActionTypes.CreateUserFailure;
}


export type Actions

  // Create User

  = CreateUser
  | CreateUserSuccess
  | CreateUserFailure;
