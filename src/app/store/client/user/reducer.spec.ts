import { initialState } from './state';
import { reducer } from './reducer';
import {
  LoginUser,
  CreateUser,
  CreateUserSuccess,
  CreateUserFailure,
  UpdateUser,
  SetSocialUser,
  SetUser,
  SetToken,
  RemoveToken,
  LoadUser,
  LoadUserSuccess,
  RemoveUser,
  LoadProfiles,
  LoadProfilesSuccess,
  LoadProfilesFailure,
  LoginUserBySocialGoogle,
  LoginUserBySocialFacebook,
  LoginUserSuccess,
  LoginUserFailure,
  SetSocialStatusUser
} from './actions';

describe('User Reducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const state = reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('[User] Create User action', () => {
    it('should return state', () => {
      const payload = { user: null };
      const action = new CreateUser(payload);
      const state = reducer(initialState, action);

      expect(state).toBeDefined();
    });
  });

  describe('[User] Create User Success action', () => {
    it('should set logined state to true', () => {
      const payload = { user: null };
      const action = new CreateUserSuccess(payload);
      const state = reducer(initialState, action);

      expect(state.logined).toBe(true);
    });
  });

  describe('[User] Create User Failure action', () => {
    it('should set logined state to false', () => {
      const action = new CreateUserFailure();
      const state = reducer(initialState, action);

      expect(state.logined).toBe(false);
    });
  });

  describe('[User] Update User action', () => {
    it('should return state', () => {
      const payload = { user: null };
      const action = new UpdateUser(payload);
      const state = reducer(initialState, action);

      expect(state).toBeDefined();
    });
  });

  describe('[User] Set Social User action', () => {
    it('should return state', () => {
      const payload = { user: null };
      const action = new SetSocialUser(payload);
      const state = reducer(initialState, action);

      expect(state.socialUser).toBeDefined();
    });
  });

  describe('[User] Set User action', () => {
    it('should set userForm', () => {
      const payload = null;
      const action = new SetUser(payload);
      const state = reducer(initialState, action);

      expect(state.userForm).toBeDefined();
    });
  });

  describe('[User] Set Token action', () => {
    it('should set token state', () => {
      const payload = {
        userToken: {
          token: null,
          expire: null
        }
      };
      const action = new SetToken(payload);
      const state = reducer(initialState, action);

      expect(state.token).toBeDefined();
      expect(state.expire).toBeDefined();
    });
  });

  describe('[User] Remove Token action', () => {
    it('should unset token state', () => {
      const action = new RemoveToken();
      const state = reducer(initialState, action);

      expect(state.token).toBe(null);
      expect(state.expire).toBe(null);
    });
  });

  describe('[User] Load User action', () => {
    it('should return state', () => {
      const payload = { token: 'token' };
      const action = new LoadUser(payload);
      const state = reducer(initialState, action);

      expect(state).toBeDefined();
    });
  });

  describe('[User] Load User Success action', () => {
    it('should set logined state to true', () => {
      const payload: any = null;
      const action = new LoadUserSuccess(payload);
      const state = reducer(initialState, action);

      expect(state.logined).toBe(true);
      expect(state.profile).toBeDefined();
    });
  });

  describe('[User] Remove User action', () => {
    it('should set logined state to false', () => {
      const action = new RemoveUser();
      const state = reducer(initialState, action);

      expect(state.logined).toBe(false);
      expect(state.profile).toBeNull();
      expect(state.social).toBe(false);
    });
  });

  describe('[User] Load Profiles action', () => {
    it('should return state', () => {
      const payload = { token: 'token' };
      const action = new LoadProfiles(payload);
      const state = reducer(initialState, action);

      expect(state).toBeDefined();
    });
  });

  describe('[User] Load Profiles Success action', () => {
    it('should set haveProfiles to true', () => {
      const action = new LoadProfilesSuccess();
      const state = reducer(initialState, action);

      expect(state.haveProfiles).toBe(true);
    });
  });

  describe('[User] Load Profiles Failure action', () => {
    it('should set haveProfiles to false', () => {
      const action = new LoadProfilesFailure();
      const state = reducer(initialState, action);

      expect(state.haveProfiles).toBe(false);
    });
  });

  describe('[User] Login User action', () => {
    it('should return state', () => {
      const payload = { user: null };
      const action = new LoginUser(payload);
      const state = reducer(initialState, action);

      expect(state).toBeDefined();
    });
  });

  describe('[User] Login User By Social Google action', () => {
    it('should return state', () => {
      const payload = { user: null };
      const action = new LoginUserBySocialGoogle(payload);
      const state = reducer(initialState, action);

      expect(state).toBeDefined();
    });
  });

  describe('[User] Login User By Social Facebook action', () => {
    it('should return state', () => {
      const payload = { user: null };
      const action = new LoginUserBySocialFacebook(payload);
      const state = reducer(initialState, action);

      expect(state).toBeDefined();
    });
  });

  describe('[User] Login User Success action', () => {
    it('should set logined state to true', () => {
      const payload = { response: null };
      const action = new LoginUserSuccess(payload);
      const state = reducer(initialState, action);

      expect(state.logined).toBe(true);
    });
  });

  describe('[User] Login User Failure action', () => {
    it('should set logined state to false', () => {
      const payload = { response: null };
      const action = new LoginUserFailure(payload);
      const state = reducer(initialState, action);

      expect(state.logined).toBe(false);
    });
  });

  describe('[User] Set Social Status User action', () => {
    it('should set social state to true', () => {
      const action = new SetSocialStatusUser();
      const state = reducer(initialState, action);

      expect(state.social).toBe(true);
    });
  });
});
