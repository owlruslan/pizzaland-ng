import {Action} from '@ngrx/store';
import {ResponseSuccess} from '@app/models/response/response-success.model';
import {ResponseError} from '@app/models/response/response-error.model';
import {UserLoginRequest} from '@app/models/user/user-login-request.model';
import {UserLoginResponse} from '@app/models/user/user-login-response.model';


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
