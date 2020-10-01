import {createSelector} from '@ngrx/store';
import {State} from './user.state';
import {RootStoreState} from '@app/store/root';

export const getUserState = (state: RootStoreState.State) => state.client.user;

export const getUserTokenState = createSelector(
  getUserState,
  (state: State) => state.userTokenResponse.token
);

export const getUserResponseState = createSelector(
  getUserState,
  (state: State) => state.userResponse
);

