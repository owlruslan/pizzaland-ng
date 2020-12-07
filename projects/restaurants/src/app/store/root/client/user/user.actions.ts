import { Action } from '@ngrx/store';
import { UserLoginResponse } from '../../../../../../../core/src/lib/models';
import { ResponseSuccess } from '../../../../../../../core/src/lib/models';
import { ResponseError } from '../../../../../../../core/src/lib/models';
import { UserLoginRequest } from '../../../../../../../core/src/lib/models';

export enum ActionTypes {

  // Login

  Login = '[User] Login',
  LoginSuccess = '[User] Login Success',
  LoginFailure = '[User] Login Failure',
}

// Login

export class Login implements Action {
  readonly type = ActionTypes.Login;

  constructor(public payload: { request: UserLoginRequest }) {
  }
}

export class LoginSuccess implements Action {
  readonly type = ActionTypes.LoginSuccess;

  constructor(public payload: { response: ResponseSuccess<UserLoginResponse> }) {
  }
}

export class LoginFailure implements Action {
  readonly type = ActionTypes.LoginFailure;

  constructor(public payload: { response: ResponseError }) {
  }
}

export type Actions =

// Login

  | Login
  | LoginSuccess
  | LoginFailure;
