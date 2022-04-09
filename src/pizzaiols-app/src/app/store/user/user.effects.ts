import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ResponseError} from '../../models';
import {ResponseSuccess} from '../../models';
import {UserLoginResponse} from '../../models';
import {UserService} from '../../services/user/user.service';
import {ActionTypes, Login, LoginFailure, LoginSuccess} from './user.actions';

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
          new LoginSuccess({response}),
        ),
        catchError((errResponse: ResponseError) => of(errResponse).pipe(
          switchMap((response: ResponseError) => [
            new LoginFailure({response}),
          ]),
        )),
      ),
    ),
  ));

  constructor(
    private actions$: Actions,
    private store: Store,
    private userService: UserService,
  ) {
  }
}
