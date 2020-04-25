import { Observable } from 'rxjs';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserEffects } from './effects';
import { provideMockActions } from '@ngrx/effects/testing';

import { Store, Action } from '@ngrx/store';

import { hot } from 'jasmine-marbles';
import { IResponse } from '../../../interfaces/response/response.interface';
import { UserService } from '../../../services/client/user/user.service';
import {
  CreateUser,
  CreateUserSuccess,
  SetToken,
  UpdateUser,
  LoginUserSuccess,
  LoadUser,
  LoadUserSuccess,
  LoadProfiles,
  LoginUser,
  LoginUserBySocialGoogle,
  SetSocialStatusUser,
  LoginUserBySocialFacebook
} from './actions';
import { FanStoreActions } from '../fan';
import { ArtistStoreActions } from '../artist';
import { VenueStoreActions } from '../venue';
import { OrganizerStoreActions } from '../organizer';
import { UserToken } from '../../../models/user/user-token';
import { AuthService } from '../../../services/client/auth/auth.service';
import { SocialUser } from '../../../models/social/social-user.model';

describe('User Effects', () => {
  let actions$: Observable<Action>;
  let effects: UserEffects;

  let userServiceSpy: any;
  let authServiceSpy: any;

  let store: MockStore<{ user: any }>;
  const initialState = {
    user: {
      token: 'token'
    }
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        UserService,
        AuthService,
        UserEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState
        }),
        {
          provide: UserService,
          useValue: jasmine.createSpyObj('UserService', [
            'createUser',
            'updateUser',
            'getUser'
          ])
        },
        {
          provide: AuthService,
          useValue: jasmine.createSpyObj('AuthService', [
            'signIn',
            'signInByGoogle',
            'signInByFacebook'
          ])
        },
      ],
    });

    store = TestBed.get<Store<any>>(Store);

    userServiceSpy = TestBed.get(UserService);
    authServiceSpy = TestBed.get(AuthService);

    effects = TestBed.get(UserEffects);
  });

  describe('createUser$', () => {
    it('should create User Profile', () => {
      const payload = {
        user: null
      };
      const action = new CreateUser(payload);

      const response: IResponse = {
        data: null,
        error: '',
        success: true
      };
      const userToken = null;
      const completionB = new SetToken({ userToken });
      const completionC = new CreateUserSuccess({ user: payload.user });

      // Refer to 'Writing Marble Tests' for details on '--a-' syntax
      actions$ = hot('--a-', { a: action });

      userServiceSpy.createUser.and.returnValue(
        hot('--a|', { a: response })
      );

      const expected = hot('--(bc)', { b: completionB, c: completionC });

      expect(effects.createUser$).toBeObservable(expected);
    });
  });

  describe('updateUser$', () => {
    it('should update User Profile', () => {
      const payload = {
        user: null
      };
      const action = new UpdateUser(payload);

      const response: IResponse = {
        data: null,
        error: '',
        success: true
      };
      const userToken = null;

      // Refer to 'Writing Marble Tests' for details on '--a-' syntax
      actions$ = hot('--a-', { a: action });

      userServiceSpy.updateUser.and.returnValue(
        hot('--a|', { a: response })
      );

      const completion = response;

      const expected = hot('--b', { b: completion });

      expect(effects.updateUser$).toBeObservable(expected);
    });
  });

  describe('loadUserOnLoginSuccess$', () => {
    it('should load User Profile on Login Success', () => {
      const payload = {
        response: null
      };
      const action = new LoginUserSuccess(payload);

      const response: IResponse = {
        data: null,
        error: '',
        success: true
      };
      const token = 'token';
      const completion = new LoadUser({ token });

      // Refer to 'Writing Marble Tests' for details on '--a-' syntax
      actions$ = hot('--a-', { a: action });

      userServiceSpy.createUser.and.returnValue(
        hot('--a|', { a: completion })
      );

      const expected = hot('--b', { b: completion });

      expect(effects.loadUserOnLoginSuccess$).toBeObservable(expected);
    });
  });

  describe('loadUser$', () => {
    it('should load User Profile data', () => {
      const payload = {
        token: 'token'
      };
      const action = new LoadUser(payload);

      const response: IResponse = {
        data: null,
        error: '',
        success: true
      };
      const token = 'token';
      const userData = response.data;
      const completion = new LoadUserSuccess({ userData });

      // Refer to 'Writing Marble Tests' for details on '--a-' syntax
      actions$ = hot('--a-', { a: action });

      userServiceSpy.getUser.and.returnValue(
        hot('--a|', { a: response })
      );

      const expected = hot('--b', { b: completion });

      expect(effects.loadUser$).toBeObservable(expected);
    });
  });

  describe('loadProfiles$', () => {
    it('should load User\'s profiles (fan, artist, venue and organizer)', () => {
      const payload = {
        token: 'token'
      };
      const action = new LoadProfiles(payload);

      const response: IResponse = {
        data: null,
        error: '',
        success: true
      };
      const token = 'token';
      const completionB = new FanStoreActions.GetProfile();
      const completionC = new ArtistStoreActions.GetProfile();
      const completionD = new VenueStoreActions.GetProfile();
      const completionE = new OrganizerStoreActions.GetProfile();

      // Refer to 'Writing Marble Tests' for details on '--a-' syntax
      actions$ = hot('--a-', { a: action });

      userServiceSpy.getUser.and.returnValue(
        hot('--a|', { a: response })
      );

      const expected = hot('--(bcde)', {
        b: completionB,
        c: completionC,
        d: completionD,
        e: completionE
      });

      expect(effects.loadProfiles$).toBeObservable(expected);
    });
  });

  describe('loginUser$', () => {
    it('should login to User Profile', () => {
      const payload = {
        user: null
      };
      const action = new LoginUser(payload);

      const userToken: UserToken = {
        token: 'token',
        expire: ''
      };
      const response: IResponse = {
        data: userToken,
        error: '',
        success: true
      };
      const completionB = new LoginUserSuccess({ response });
      const completionC = new SetToken({ userToken });
      const completionD = new LoadProfiles({ token: userToken.token });

      // Refer to 'Writing Marble Tests' for details on '--a-' syntax
      actions$ = hot('--a-', { a: action });

      authServiceSpy.signIn.and.returnValue(
        hot('--a|', { a: response })
      );

      const expected = hot('--(bcd)', {
        b: completionB,
        c: completionC,
        d: completionD,
      });

      expect(effects.loginUser$).toBeObservable(expected);
    });
  });

  describe('loginUserBySocialGoogle$', () => {
    it('should login to User Profile by Google', () => {
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
        }
      };
      const action = new LoginUserBySocialGoogle(payload);

      const userToken: UserToken = {
        token: 'token',
        expire: ''
      };
      const response: IResponse = {
        data: userToken,
        error: '',
        success: true
      };
      const completionB = new LoginUserSuccess({ response });
      const completionC = new SetToken({ userToken });
      const completionD = new LoadProfiles({ token: userToken.token });
      const completionE = new SetSocialStatusUser();

      // Refer to 'Writing Marble Tests' for details on '--a-' syntax
      actions$ = hot('--a-', { a: action });

      authServiceSpy.signInByGoogle.and.returnValue(
        hot('--a|', { a: response })
      );

      const expected = hot('--(bcde)', {
        b: completionB,
        c: completionC,
        d: completionD,
        e: completionE
      });

      expect(effects.loginUserBySocialGoogle$).toBeObservable(expected);
    });
  });

  describe('loginUserBySocialFacebook$', () => {
    it('should login to User Profile by Facebook', () => {
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
        }
      };
      const action = new LoginUserBySocialFacebook(payload);

      const userToken: UserToken = {
        token: 'token',
        expire: ''
      };
      const response: IResponse = {
        data: userToken,
        error: '',
        success: true
      };
      const completionB = new LoginUserSuccess({ response });
      const completionC = new SetToken({ userToken });
      const completionD = new LoadProfiles({ token: userToken.token });
      const completionE = new SetSocialStatusUser();

      // Refer to 'Writing Marble Tests' for details on '--a-' syntax
      actions$ = hot('--a-', { a: action });

      authServiceSpy.signInByFacebook.and.returnValue(
        hot('--a|', { a: response })
      );

      const expected = hot('--(bcde)', {
        b: completionB,
        c: completionC,
        d: completionD,
        e: completionE
      });

      expect(effects.loginUserBySocialFacebook$).toBeObservable(expected);
    });
  });

  describe('saveToken$', () => {
    it('should save toke from User login', () => {
      const payload: { userToken: UserToken } = {
        userToken: {
          token: '',
          expire: ''
        }
      };
      const action = new SetToken(payload);

      const response: IResponse = {
        data: null,
        error: '',
        success: true
      };
      const completion = payload.userToken;

      // Refer to 'Writing Marble Tests' for details on '--a-' syntax
      actions$ = hot('--a-', { a: action });

      const expected = hot('--b', { b: completion });

      expect(effects.saveToken$).toBeObservable(expected);
    });
  });
});

