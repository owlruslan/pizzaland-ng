import { UserLogin } from '../../../models/user/user-login';
import { UserToken } from '../../../models/user/user-token';
import { SocialUser } from '../../../models/social/social-user.model';
import { ActionTypes, SetUser, SetToken, RemoveToken, LoadUser, LoadUserSuccess, RemoveUser, LoadProfiles, LoadProfilesSuccess, LoadProfilesFailure, SetSocialUser } from './actions';

describe('User Actions', () => {

  describe('SetUser', () => {

    it('should create an action', () => {
      const payload: UserLogin = {
        email: 'string',
        password: 'string'
      };
      const action = new SetUser(payload);

      expect({ ...action }).toEqual({
        type: ActionTypes.SetUser,
        payload
      });
    });
  });

  describe('SetToken', () => {

    it('should create an action', () => {
      const payload: { userToken: UserToken } = {
        userToken: {
          token: 'string',
          expire: 'string'
        }
      };
      const action = new SetToken(payload);

      expect({ ...action }).toEqual({
        type: ActionTypes.SetToken,
        payload
      });
    });
  });

  describe('RemoveToken', () => {

    it('should create an action', () => {
      const action = new RemoveToken();

      expect({ ...action }).toEqual({
        type: ActionTypes.RemoveToken,
      });
    });
  });

  describe('LoadUser', () => {

    it('should create an action', () => {
      const payload = { token: null };
      const action = new LoadUser(payload);

      expect({ ...action }).toEqual({
        type: ActionTypes.LoadUser,
        payload
      });
    });
  });

  describe('LoadUserSuccess', () => {

    it('should create an action', () => {
      const payload = {};
      const action = new LoadUserSuccess(payload);

      expect({ ...action }).toEqual({
        type: ActionTypes.LoadUserSuccess,
        payload
      });
    });
  });

  describe('RemoveUser', () => {

    it('should create an action', () => {
      const action = new RemoveUser();

      expect({ ...action }).toEqual({
        type: ActionTypes.RemoveUser,
      });
    });
  });

  describe('CheckProfiles', () => {

    it('should create an action', () => {
      const payload: { token: string } = { token: 'token' };
      const action = new LoadProfiles(payload);

      expect({ ...action }).toEqual({
        type: ActionTypes.LoadProfiles,
        payload
      });
    });
  });

  describe('CheckProfilesSuccess', () => {

    it('should create an action', () => {
      const action = new LoadProfilesSuccess();

      expect({ ...action }).toEqual({
        type: ActionTypes.LoadProfilesSuccess
      });
    });
  });

  describe('CheckProfilesFailure', () => {

    it('should create an action', () => {
      const action = new LoadProfilesFailure();

      expect({ ...action }).toEqual({
        type: ActionTypes.LoadProfilesFailure
      });
    });
  });

  describe('SetSocialUser', () => {

    it('should create an action', () => {
      const payload: { user: SocialUser } = {
        user: {
          provider: 'string',
          id: 'string',
          email: 'string',
          name: 'string',
          photoUrl: 'string',
          firstName: 'string',
          lastName: 'string',
          authToken: 'string',
          idToken: 'string',
          authorizationCode: 'string',
          facebook: {},
          linkedIn: {}
        }
      };
      const action = new SetSocialUser(payload);

      expect({ ...action }).toEqual({
        type: ActionTypes.SetSocialUser,
        payload
      });
    });
  });
});
