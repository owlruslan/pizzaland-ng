import {ActionTypes, Login, LoginFailure, LoginSuccess} from './user.actions';
import {UserLoginRequest} from '@app/models/user/user-login-request.model';
import {UserLoginResponse} from '@app/models/user/user-login-response.model';
import {ResponseSuccess} from '@app/models/response/response-success.model';
import {ResponseError} from '@app/models/response/response-error.model';

describe('app.store.root.client.user.Actions', () => {
  describe('Login', () => {
    it('should create an action', () => {
      const payload: { request: UserLoginRequest } = null;
      const action = new Login(payload);

      expect({...action}).toEqual({
        type: ActionTypes.Login,
        payload
      });
    });
  });

  describe('LoginSuccess', () => {
    it('should create an action', () => {
      const payload: { response: ResponseSuccess<UserLoginResponse> } = null;
      const action = new LoginSuccess(payload);

      expect({...action}).toEqual({
        type: ActionTypes.LoginSuccess,
        payload
      });
    });
  });

  describe('LoginFailure', () => {
    it('should create an action', () => {
      const payload: { response: ResponseError } = null;
      const action = new LoginFailure(payload);

      expect({...action}).toEqual({
        type: ActionTypes.LoginFailure,
        payload
      });
    });
  });
});
