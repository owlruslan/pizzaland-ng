import {Action} from '@ngrx/store';


export enum ActionTypes {

  // Create User

  CreateUser = '[User] Create User',
  CreateUserSuccess = '[User] Create User Success',
  CreateUserFailure = '[User] Create User Failure',


  // Update User

  UpdateUser = '[User] Update User',


  // Set User

  SetUser = '[User] Set User',
  SetSocialUser = '[User] Set Social User',

  // Get User

  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success',
  GetUserFailure = '[User] Get User Failure',


  // Token

  SetToken = '[User] Set Token',
  RemoveToken = '[User] Remove Token',


  // Load User

  LoadUser = '[User] Load User',
  LoadUserSuccess = '[User] Load User Success',


  // Remove User

  RemoveUser = '[User] Remove User',


  // Load User's Profiles

  LoadProfiles = '[User] Load Profiles',
  LoadProfilesSuccess = '[User] Load Profiles Success',
  LoadProfilesFailure = '[User] Load Profiles Failure',


  // Login User

  LoginUser = '[User] Login User',
  LoginUserBySocialGoogle = '[User] Login User By Social Google',
  LoginUserBySocialFacebook = '[User] Login User By Social Facebook',
  LoginUserFailure = '[User] Login User Failure',
  LoginUserSuccess = '[User] Login User Success',

  SetSocialStatusUser = '[User] Set Social Status User',


  // SwitchAccount
  SwitchAccount = '[User] SwitchAccount',


  // Application settings
  GetApplicationSettings = '[User] Get Application Settings',
  GetApplicationSettingsSuccess = '[User] Get Application Settings Success',
  GetApplicationSettingsFailure = '[User] Get Application Settings Failure',

  SetApplicationSettings = '[User] Set Application Settings',
  SetApplicationSettingsSuccess = '[User] Set Application Settings Success',
  SetApplicationSettingsFailure = '[User] Set Application Settings Failure',
}


/* Create User */

export class CreateUser implements Action {
  public readonly type = ActionTypes.CreateUser;

  constructor(public payload: { user: UserCreateModel }) {
  }
}

export class CreateUserSuccess implements Action {
  public readonly type = ActionTypes.CreateUserSuccess;

  constructor(public payload: { user: UserCreateModel }) {
  }
}

export class CreateUserFailure implements Action {
  public readonly type = ActionTypes.CreateUserFailure;
}


/* Update User */

export class UpdateUser implements Action {
  public readonly type = ActionTypes.UpdateUser;

  constructor(public payload: { user: UpdateUserRequest }) {
  }
}

/* Set User */

export class SetUser implements Action {
  public readonly type = ActionTypes.SetUser;

  constructor(public payload: UserLogin) {
  }
}

export class SetSocialUser implements Action {
  public readonly type = ActionTypes.SetSocialUser;

  constructor(public payload: { user: SocialUser }) {
  }
}

/* Get User */

export class GetUser implements Action {
  public readonly type = ActionTypes.GetUser;
}

export class GetUserSuccess implements Action {
  public readonly type = ActionTypes.GetUserSuccess;

  constructor(public payload: { response: GetUserInfoResponseSuccess }) {
  }
}

export class GetUserFailure implements Action {
  public readonly type = ActionTypes.GetUserFailure;

  constructor(public payload: { response: IResponse }) {
  }
}


/* Token */

export class SetToken implements Action {
  public readonly type = ActionTypes.SetToken;

  constructor(public payload: { userToken: UserToken }) {
  }
}

export class RemoveToken implements Action {
  public readonly type = ActionTypes.RemoveToken;
}


/* Load User */

export class LoadUser implements Action {
  public readonly type = ActionTypes.LoadUser;

  constructor(public payload: { token: string }) {
  }
}

export class LoadUserSuccess implements Action {
  public readonly type = ActionTypes.LoadUserSuccess;

  constructor(public payload: any) {
  }
}


/* Remove User */

export class RemoveUser implements Action {
  public readonly type = ActionTypes.RemoveUser;
}


/* Load User's Profiles */

export class LoadProfiles implements Action {
  public readonly type = ActionTypes.LoadProfiles;

  constructor(public payload: { token: string }) {
  }
}

export class LoadProfilesSuccess implements Action {
  public readonly type = ActionTypes.LoadProfilesSuccess;
}

export class LoadProfilesFailure implements Action {
  public readonly type = ActionTypes.LoadProfilesFailure;
}


/* Login User */

export class LoginUser implements Action {
  public readonly type = ActionTypes.LoginUser;

  constructor(public payload: { user: UserLogin }) {
  }
}

export class LoginUserBySocialGoogle implements Action {
  public readonly type = ActionTypes.LoginUserBySocialGoogle;

  constructor(public payload: { user: SocialUser }) {
  }
}

export class LoginUserBySocialFacebook implements Action {
  public readonly type = ActionTypes.LoginUserBySocialFacebook;

  constructor(public payload: { user: SocialUser }) {
  }
}

export class LoginUserFailure implements Action {
  public readonly type = ActionTypes.LoginUserFailure;

  constructor(public payload: { response: IResponse }) {
  }
}

export class LoginUserSuccess implements Action {
  public readonly type = ActionTypes.LoginUserSuccess;

  constructor(public payload: { response: CreateUserResponse }) {
  }
}

export class SetSocialStatusUser implements Action {
  public readonly type = ActionTypes.SetSocialStatusUser;
}

// Switch account
export class SwitchAccount implements Action {
  public readonly type = ActionTypes.SwitchAccount;

  constructor(public payload: { accountType: AccountTypes }) {
  }
}


/* Application settings */

export class GetApplicationSettings implements Action {
  public readonly type = ActionTypes.GetApplicationSettings;
}

export class GetApplicationSettingsSuccess implements Action {
  public readonly type = ActionTypes.GetApplicationSettingsSuccess;
  constructor(public payload: { response: IResponse }) {
  }
}

export class GetApplicationSettingsFailure implements Action {
  public readonly type = ActionTypes.GetApplicationSettingsFailure;
  constructor(public payload: { response: IErrorResponse }) {
  }
}

export class SetApplicationSettings implements Action {
  public readonly type = ActionTypes.SetApplicationSettings;
  constructor(public payload: { settings: ISetApplicationSettingsRequest}) {
  }
}

export class SetApplicationSettingsSuccess implements Action {
  public readonly type = ActionTypes.SetApplicationSettingsSuccess;
  constructor(public payload: { response: IResponse }) {
  }
}

export class SetApplicationSettingsFailure implements Action {
  public readonly type = ActionTypes.SetApplicationSettingsFailure;
  constructor(public payload: { response: IErrorResponse }) {
  }
}


export type Actions =

// Create User

  | CreateUser
  | CreateUserSuccess
  | CreateUserFailure


  // Update User

  | UpdateUser


  // Set User

  | SetUser
  | SetSocialUser

  // Get User

  | GetUser
  | GetUserSuccess
  | GetUserFailure


  // Token

  | SetToken
  | RemoveToken


  // Load User

  | LoadUser
  | LoadUserSuccess


  // Remove User

  | RemoveUser


  // Load User's Profiles

  | LoadProfiles
  | LoadProfilesSuccess
  | LoadProfilesFailure


  // Login User

  | LoginUser
  | LoginUserBySocialGoogle
  | LoginUserBySocialFacebook
  | LoginUserFailure
  | LoginUserSuccess
  | SetSocialStatusUser

  // Switch account
  | SwitchAccount

  | GetApplicationSettings
  | GetApplicationSettingsSuccess
  | GetApplicationSettingsFailure

  | SetApplicationSettings
  | SetApplicationSettingsSuccess
  | SetApplicationSettingsFailure;
