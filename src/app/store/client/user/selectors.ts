import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './state';

export const getUserState = createFeatureSelector<State>('user');

export const getLoginedState = createSelector(
  getUserState,
  (state: State) => state.logined
);

export const getUserTokenState = createSelector(
  getUserState,
  (state: State) => state.token
);

export const getUserDataState = createSelector(
  getUserState,
  (state: State) => state.profile
);

export const getUserStatusMessageState = createSelector(
  getUserState,
  (state: State) => state.error
);

export const getUserSocialState = createSelector(
  getUserState,
  (state: State) => state.social
);

export const getSocialUserProfileState = createSelector(
  getUserState,
  (state: State) => state.socialUser
);

export const getUserPhotoState = createSelector(
  getUserState,
  (state: State) => state.profile.profilePhotoUrl
);

export const getUserAuthStatus = createSelector(
  getUserState,
  (state: State) => ({
    logined: state.logined,
    loading: state.loading
  })
);

export const getAccountTypeState = createSelector(
  getUserState,
  (state: State) => state.accountType
);

export const getUserApplicationSettingsState = createSelector(
  getUserState,
  (state: State) => state.appUserSettings
);

export const getLoadedState = createSelector(
  getUserState,
  (state: State) => state.loaded
);
