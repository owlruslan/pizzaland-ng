import { ActionTypes, Login, LoginFailure, LoginSuccess } from './user.actions';
import { ResponseError, ResponseSuccess, UserLoginRequest, UserLoginResponse } from '../../../../models';

describe('app.store.root.client.user.Actions', () => {
  describe('Login', () => {
    it('should create an action', () => {
      const payload: { request: UserLoginRequest } = { request: new UserLoginRequest() };
      const action = new Login(payload);

      expect({ ...action }).toEqual({
        type: ActionTypes.Login,
        payload,
      });
    });
  });

  describe('LoginSuccess', () => {
    it('should create an action', () => {
      const payload: { response: ResponseSuccess<UserLoginResponse> } = { response: new ResponseSuccess<UserLoginResponse>() };
      const action = new LoginSuccess(payload);

      expect({ ...action }).toEqual({
        type: ActionTypes.LoginSuccess,
        payload,
      });
    });
  });

  describe('LoginFailure', () => {
    it('should create an action', () => {
      const payload: { response: ResponseError } = { response: new ResponseError()};
      const action = new LoginFailure(payload);

      expect({ ...action }).toEqual({
        type: ActionTypes.LoginFailure,
        payload,
      });
    });
  });
});
