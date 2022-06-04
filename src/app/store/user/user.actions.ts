import {createAction, props} from '@ngrx/store';
import {ResponseError, ResponseSuccess, UserLoginRequest, UserLoginResponse} from '../../models';
import {FEATURE_KEY} from './user.state';


export const login = createAction(`${FEATURE_KEY}/login`, props<{ request: UserLoginRequest }>());
export const loginSuccess = createAction(`${FEATURE_KEY}/loginSuccess`, props<{ response: ResponseSuccess<UserLoginResponse> }>());
export const loginFailure = createAction(`${FEATURE_KEY}/loginError`, props<{ response: ResponseError }>());
