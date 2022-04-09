import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ResponseError, ResponseSuccess, UserLoginResponse} from '../../models';
import {UserService} from '../../services/user/user.service';
import {login, loginFailure, loginSuccess} from './user.actions';


@Injectable()
export class UserEffects {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    switchMap(action => this.userService.login(action.request).pipe(
        map((response: ResponseSuccess<UserLoginResponse>) => loginSuccess({response})),
        catchError((errResponse: ResponseError) => of(errResponse).pipe(
          switchMap((response: ResponseError) => [loginFailure({response})]),
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
