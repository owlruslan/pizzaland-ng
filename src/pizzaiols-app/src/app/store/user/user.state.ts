import { UserResponse } from '../../models/user/user-response.model';
import { UserLoginResponse } from '../../models/user/user-login-response.model';

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
