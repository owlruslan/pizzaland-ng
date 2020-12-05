import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {RootStoreState} from '../../index';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ActionTypes, Login, LoginFailure, LoginSuccess} from './user.actions';
import {of} from 'rxjs';
import { UserLoginResponse } from '../../../../models/user/user-login-response.model'
import { ResponseSuccess } from '../../../../models/response/response-success.model'
import { UserService } from '../../../../services/user/user.service'
import { ResponseError } from '../../../../models/response/response-error.model'
import { AppStoreActions } from '../../app'

/**
 * Provides User Store Effects.
 */
@Injectable()
export class UserEffects {

  /**
   * @action - [User] Login
   * @return:
   *   Success: [User] LoginSuccess
   *   Failure: [User] LoginFailure & [Errors] AddErrorResponse
   */
  login$ = createEffect(() => this.actions$.pipe(
    ofType<Login>(ActionTypes.Login),
    switchMap(action =>
      this.userService.login(action.payload.request).pipe(
        map((response: ResponseSuccess<UserLoginResponse>) =>
          new LoginSuccess({response})
        ),
        catchError((errResponse: ResponseError) => of(errResponse).pipe(
          switchMap((response: ResponseError) => [
            new LoginFailure({response}),
            new AppStoreActions.AddErrorResponse({response})
          ])
        ))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private store: Store<RootStoreState.State>,
    private userService: UserService,
  ) {
  }
}
