import { UserResponse } from '../../../../../../../../libraries/core/src/lib/models/user/user-response.model';
import { UserLoginResponse } from '../../../../../../../../libraries/core/src/lib/models/user/user-login-response.model';

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
