import {UserLogin} from '../../../models/user/user-login';
import {SocialUser} from '../../../models/social/social-user.model';
import {AccountTypes} from '../../../models/accounts/account-types.enum';

export interface State {
  userForm: UserLogin;
  token: string;
  expire: string;
  logined: boolean;
  loading: boolean;
  loaded: boolean;
  profile: any;
  type: string;
  error: string;
  social: boolean;
  socialUser: SocialUser;
  haveProfiles: boolean;
  accountType: AccountTypes; // Fan, Artist, Venue, Organizer
  appUserSettings: any;
}

export const initialState: State = {
  userForm: null,
  token: '',
  expire: '',
  logined: false,
  loading: false,
  loaded: false,
  profile: null,
  type: 'fan',
  error: '',
  social: false,
  socialUser: null,
  haveProfiles: false,
  accountType: AccountTypes.Fan,
  appUserSettings: {}
};
