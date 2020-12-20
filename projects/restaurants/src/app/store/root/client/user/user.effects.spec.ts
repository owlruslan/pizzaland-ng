import { Observable } from 'rxjs';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserEffects } from './user.effects';
import { provideMockActions } from '@ngrx/effects/testing';

import { Action } from '@ngrx/store';

import { hot } from 'jasmine-marbles';
import { UserService } from '../../../../services/user/user.service';
import { Login, LoginSuccess } from './user.actions';
import { ResponseSuccess, UserLoginRequest, UserLoginResponse } from '../../../../models';

describe('app.store.root.client.user.UserEffects', () => {
  let actions$: Observable<Action>;
  let effects: UserEffects;

  let userServiceSpy: any;

  let store: MockStore<{ user: any }>;
  const initialState = {
    user: {
      token: 'token',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState,
        }),
        {
          provide: UserService,
          useValue: jasmine.createSpyObj('UserService', [
            'login',
          ]),
        },
      ],
    });

    store = TestBed.inject(MockStore);
    effects = TestBed.inject(UserEffects);
    userServiceSpy = TestBed.inject(UserService);
  });

  describe('login$', () => {
    it('should login', () => {
      const payload = {
        request: new UserLoginRequest(),
      };
      const action = new Login(payload);

      const response: ResponseSuccess<UserLoginResponse | undefined> = {
        data: undefined,
        success: true,
      };
      // @ts-ignore
      const completion = new LoginSuccess({ response });

      // Refer to 'Writing Marble Tests' for details on '--a-' syntax
      actions$ = hot('--a-', { a: action });

      userServiceSpy.login.and.returnValue(
        hot('--a|', { a: response }),
      );

      const expected = hot('--(b)', { b: completion });

      expect(effects.login$).toBeObservable(expected);
    });
  });
});

