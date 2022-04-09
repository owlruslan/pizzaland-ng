import {UserLoginResponse} from '../../models';
import {UserResponse} from '../../models';

export const FEATURE_KEY = `shared/user`;

export interface State {
  logined: boolean;
  userTokenResponse: UserLoginResponse;
  userResponse: UserResponse;
}

export const initialState: State = {
  logined: false,
  userTokenResponse: {
    token: 'TOKEN',
    expiresAt: 'DATE',
  },
  userResponse: {
    name: 'Username',
  },
};
