import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {Action, Store, select} from '@ngrx/store';

import {map, switchMap, catchError, withLatestFrom, tap, exhaustMap} from 'rxjs/operators';

import {
  ActionTypes,
  LoadUser,
  LoadUserSuccess,
  LoadProfiles as LoadProfiles,
  SetToken,
  CreateUser,
  CreateUserSuccess,
  CreateUserFailure,
  UpdateUser,
  LoginUserBySocialGoogle,
  LoginUserSuccess,
  LoginUserFailure,
  LoginUser,
  LoginUserBySocialFacebook,
  SetSocialStatusUser,
  GetUser,
  GetUserSuccess,
  GetUserFailure,
  GetApplicationSettings,
  GetApplicationSettingsFailure,
  GetApplicationSettingsSuccess,
  SetApplicationSettings,
  SetApplicationSettingsSuccess, SetApplicationSettingsFailure,
} from './actions';
import {Observable, of} from 'rxjs';
import {UserService} from '../../../services/client/user/user.service';
import {LocalStorageService} from '../../../services/client/local-storage/local-storage.service';
import {UserToken} from '../../../models/user/user-token';
import {ClientStoreState} from '../index';
import {UserCreateModel} from '../../../models/user/user-create.model';
import {CreateUserResponse} from '../../../models/user/create-user-response';
import {IResponse} from '../../../base/interfaces/response/response.interface';
import {getUserTokenState} from './selectors';
import * as FanStoreActions from '../fan/actions';
import * as ArtistStoreActions from '../artist/actions';
import * as VenueStoreActions from '../venue/actions';
import * as OrganizerStoreActions from '../organizer/actions';
import {AuthService} from '../../../services/client/auth/auth.service';
import {SocialUser} from '../../../models/social/social-user.model';
import {UserTokenService} from '../../../services/client/user-token/user-token.service';
import {GetUserInfoResponseSuccess} from '../../../models/user/get-user-info-response-success';
import {UserLogin} from '../../../models/user/user-login';
import {IErrorResponse} from '@app/base/interfaces/error/error-response.interface';
import {ErrorsStoreActions} from '@app/store/app';
import {UploadArtistPhotoFailure} from '../artist/actions';
import {HttpErrorResponse} from '@angular/common/http';
import {ErrorResponse} from '@app/models/error/error.response';


@Injectable()
export class UserEffects {

  /*** CREATE ***/

  /**
   * Action: `[User] Create User`
   *
   * Create User.
   *
   * Success => @return Actions: `[User] Set Token` and `[User] Create User Success`.
   * Failure => @return Action: `[User] Create User Failure`.
   */
  @Effect()
  createUser$: Observable<Action> = this.actions$.pipe(
    ofType<CreateUser>(ActionTypes.CreateUser),
    map((action: CreateUser) => action.payload.user),
    switchMap((user: UserCreateModel) => {
      return this.userService.createUser(user)
        .pipe(
          switchMap((response: CreateUserResponse) => {
            const userToken: UserToken = response.data;

            this.localStorage.setUserToken(userToken);

            return [
              new SetToken({userToken}),
              new CreateUserSuccess({user})
            ];
          }),
          catchError((_) => {
            return of(new CreateUserFailure());
          })
        );
    })
  );


  /*** GET ***/

  /**
   * Action: `[User] Get User`
   *
   * Get User.
   *
   * Success => @return Actions: `[User] Get User Success`.
   * Failure => @return Action: `[User] Get User Failure`.
   */
  @Effect()
  public getUser$: Observable<Action> = this.actions$.pipe(
    ofType<GetUser>(ActionTypes.GetUser),
    withLatestFrom(this.store.select(getUserTokenState)),
    exhaustMap(([_, token]) => this.userService.getUser(token)
      .pipe(
        exhaustMap((response: GetUserInfoResponseSuccess) => [new GetUserSuccess({response})]),
        catchError((response: IResponse) => of(new GetUserFailure({response})))
      )
    )
  );


  /*** UPDATE ***/

  /**
   * Action: `[User] Update User`
   *
   * Update User.
   *
   * @return An `Observable` of the `Response`.
   */
  @Effect({dispatch: false})
  updateUser$: Observable<IResponse> = this.actions$.pipe(
    ofType<UpdateUser>(ActionTypes.UpdateUser),
    map((action: UpdateUser) => action.payload.user),
    withLatestFrom(this.store.select(getUserTokenState)),
    switchMap(([user, token]) => {
      return this.userService.updateUser(token, user);
    })
  );

  /*** LOAD: ***/

  /**
   * Action: `[User] Login User Success`
   *
   * Load User on Login Success.
   *
   * @return Action: `[User] Load User`.
   */
  @Effect()
  public loadUserOnLoginSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<LoginUserSuccess>(ActionTypes.LoginUserSuccess),
    map((action: LoginUserSuccess) => action.payload),
    withLatestFrom(this.store.pipe(select(getUserTokenState))),
    map(([_, token]) => token),
    map((token: string) => new LoadUser({token}))
  );

  /**
   * Action: `[User] Load User`
   *
   * Load User's data.
   *
   * @return Action: `[User] Load User Success`.
   */
  @Effect()
  public loadUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoadUser>(ActionTypes.LoadUser),
    map((action: LoadUser) => action.payload.token),
    switchMap((token: string) => this.userService.getUser(token).pipe(
      map((response: GetUserInfoResponseSuccess) => {
        const userData = response.data;
        return new LoadUserSuccess({userData});
      }))
    ));

  /**
   * Action: `[User] Load Profiles`
   *
   * Load User's Profiles.
   *
   * @return Actions:
   *   `[Fan] Get Profile`,
   *   `[Artist] Get Profile`,
   *   `[Venue] Get Profile`,
   *   `[Organizer] Get Profile`.
   */
  @Effect()
  public loadProfiles$: Observable<Action> = this.actions$.pipe(
    ofType<LoadProfiles>(ActionTypes.LoadProfiles),
    map((action: LoadProfiles) => action.payload.token),
    switchMap((token: string) => [
      new FanStoreActions.GetProfile(),
      new ArtistStoreActions.GetProfile(),
      new VenueStoreActions.GetProfile(),
      new OrganizerStoreActions.GetProfile()
    ])
  );

  /*** LOGIN: ***/

  /**
   * Action: `[User] Login User`
   *
   * Login User.
   *
   * Success => @return Actions: `[User] Login User Success` and `[User] Set Token`.
   * Failure => @return Action: `[User] Login User Failure`.
   */
  @Effect()
  public loginUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoginUser>(ActionTypes.LoginUser),
    map((action: LoginUser) => action.payload.user),
    switchMap((user: UserLogin) => this.authService.signIn(user).pipe(
      switchMap((response: CreateUserResponse) => {

        const userToken: UserToken = response.data;

        return [
          new LoginUserSuccess({response}),
          new SetToken({userToken}),
          new LoadProfiles({token: userToken.token})
        ];
      }),
      catchError((response: IResponse) => of(new LoginUserFailure({response})))
    ))
  );

  /**
   * Action: `[User] Login User By Social Google`
   *
   * Login By Google.
   *
   * Success => @return Actions: `[User] Login User Success` and `[User] Set Token`.
   * Failure => @return Action: `[User] Login User Failure`.
   */
  @Effect()
  public loginUserBySocialGoogle$: Observable<Action> = this.actions$.pipe(
    ofType<LoginUserBySocialGoogle>(ActionTypes.LoginUserBySocialGoogle),
    map((action: LoginUserBySocialGoogle) => action.payload.user),
    switchMap((user: SocialUser) => {

      const socialToken = user.authToken;

      return this.authService.signInByGoogle(socialToken).pipe(
        switchMap((response: CreateUserResponse) => {

          const userToken: UserToken = response.data;

          return [
            new LoginUserSuccess({response}),
            new SetToken({userToken}),
            new LoadProfiles({token: userToken.token}),
            new SetSocialStatusUser()
          ];
        }),
        catchError((response: IResponse) => of(new LoginUserFailure({response})))
      );
    })
  );

  /**
   * Action: `[User] Login User By Social Facebook`
   *
   * Login By Facebook.
   *
   * Success => @return Actions: `[User] Login User Success` and `[User] Set Token`.
   * Failure => @return Action: `[User] Login User Failure`.
   */
  @Effect()
  public loginUserBySocialFacebook$: Observable<Action> = this.actions$.pipe(
    ofType<LoginUserBySocialFacebook>(ActionTypes.LoginUserBySocialFacebook),
    map((action: LoginUserBySocialFacebook) => action.payload.user),
    switchMap((user: SocialUser) => {

      const socialToken = user.authToken;

      return this.authService.signInByFacebook(socialToken).pipe(
        switchMap((response: CreateUserResponse) => {

          const userToken: UserToken = response.data;

          return [
            new LoginUserSuccess({response}),
            new SetToken({userToken}),
            new LoadProfiles({token: userToken.token}),
            new SetSocialStatusUser()
          ];
        }),
        catchError((response: IResponse) => of(new LoginUserFailure({response})))
      );
    })
  );


  /*** TOKEN: ***/

  /**
   * Action: `[User] Set Token`
   *
   * Save Token.
   *
   * @return An `Observable` of the `UserToken`.
   */
  @Effect({dispatch: false})
  public saveToken$: Observable<UserToken> = this.actions$.pipe(
    ofType<SetToken>(ActionTypes.SetToken),
    map((action: SetToken) => action.payload.userToken),
    tap((token: UserToken) => this.userTokenService.saveUserToken(token))
  );

  @Effect()
  getUserApplicationSettings$: Observable<Action> = this.actions$.pipe(
    ofType<GetApplicationSettings>(ActionTypes.GetApplicationSettings),
    withLatestFrom(
      this.store.pipe(select(getUserTokenState))
    ),
    switchMap(([action, token]) => (
      this.userService.getUserApplicationSettings(token)
        .pipe(
          map((response: IResponse) => (
            new GetApplicationSettingsSuccess({response})
          )),
          catchError((error: IErrorResponse) => of(error)
            .pipe(
              switchMap((e: IErrorResponse) => [
                new GetApplicationSettingsFailure({response: e}),
                new ErrorsStoreActions.AddErrorResponse({response: e})
              ])
            )
          )
        )
    ))
  );

  @Effect()
  setUserApplicationSettings$: Observable<Action> = this.actions$.pipe(
    ofType<SetApplicationSettings>(ActionTypes.SetApplicationSettings),
    withLatestFrom(
      this.store.pipe(select(getUserTokenState))
    ),
    switchMap(([action, token]) => (
      this.userService.setUserApplicationSettings(token, action.payload.settings)
        .pipe(
          map((response: IResponse) => (
            new SetApplicationSettingsSuccess({response})
          )),
          catchError((error: IErrorResponse | HttpErrorResponse) => {
            return of(error instanceof ErrorResponse ? error : error.error)
                .pipe(
                  switchMap((response: IErrorResponse) => [
                    new SetApplicationSettingsFailure({response}),
                    new ErrorsStoreActions.AddErrorResponse({response})
                  ])
                );
            }
          )
        )
    ))
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private localStorage: LocalStorageService,
    private authService: AuthService,
    private userTokenService: UserTokenService,
    private store: Store<ClientStoreState.State>
  ) {
  }
}
