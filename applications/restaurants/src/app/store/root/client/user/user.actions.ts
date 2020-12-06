import {Action} from '@ngrx/store';
import { UserLoginResponse } from '../../../../../../../../libraries/core/src/lib/models/user/user-login-response.model'
import { ResponseSuccess } from '../../../../../../../../libraries/core/src/lib/models/response/response-success.model'
import { ResponseError } from '../../../../../../../../libraries/core/src/lib/models/response/response-error.model'
import { UserLoginRequest } from '../../../../../../../../libraries/core/src/lib/models/user/user-login-request.model'


export enum ActionTypes {

  // Login

  Login = '[User] Login',
  LoginSuccess = '[User] Login Success',
  LoginFailure = '[User] Login Failure',
}


// Login

export class Login implements Action {
  readonly type = ActionTypes.Login;

  constructor(public payload: {request: UserLoginRequest}) {
  }
}

export class LoginSuccess implements Action {
  readonly type = ActionTypes.LoginSuccess;

  constructor(public payload: {response: ResponseSuccess<UserLoginResponse>}) {
  }
}

export class LoginFailure implements Action {
  readonly type = ActionTypes.LoginFailure;

  constructor(public payload: {response: ResponseError}) {
  }
}


export type Actions =

  // Login

  | Login
  | LoginSuccess
  | LoginFailure;
