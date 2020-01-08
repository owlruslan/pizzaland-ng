import {ActionTypes, Actions} from './actions';
import {initialState} from './state';
import {State} from './state';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {

    /* Create User */

    case ActionTypes.CreateUser: {
      return {
        ...state,
        loading: true
      };
    }
    case ActionTypes.CreateUserSuccess: {
      return {
        ...state,
        logined: true,
        loading: false
      };
    }
    case ActionTypes.CreateUserFailure: {
      return {
        ...state,
        logined: false,
        loading: false
      };
    }

    case ActionTypes.UpdateUser: {
      return {
        ...state,
      };
    }

    /* Set User */

    case ActionTypes.SetSocialUser: {
      return {
        ...state,
        socialUser: action.payload.user
      };
    }

    case ActionTypes.SetUser: {
      return {
        ...state,
        userForm: action.payload
      };
    }

    /* Get User */

    case ActionTypes.GetUser: {
      return {
        ...state,
        loading: true
      };
    }

    case ActionTypes.GetUserSuccess: {
      const userData = action.payload.response.data;

      return {
        ...state,
        profile: userData,
        loading: false
      };
    }

    case ActionTypes.GetUserFailure: {
      return {
        ...state,
        loading: false
      };
    }


    /* Token */

    case ActionTypes.SetToken: {
      return {
        ...state,
        token: action.payload.userToken.token,
        expire: action.payload.userToken.expire
      };
    }

    case ActionTypes.RemoveToken: {
      return {
        ...state,
        token: null,
        expire: null
      };
    }

    /* Load User */

    case ActionTypes.LoadUser: {
      return {...state};
    }

    case ActionTypes.LoadUserSuccess: {
      return {
        ...state,
        logined: true,
        profile: action.payload
      };
    }
    case ActionTypes.RemoveUser: {
      return {
        ...state,
        profile: null,
        logined: false,
        social: false,
      };
    }

    /* Load Profiles */

    case ActionTypes.LoadProfiles: {
      return {...state};
    }

    case ActionTypes.LoadProfilesSuccess: {
      return {
        ...state,
        haveProfiles: true
      };
    }

    case ActionTypes.LoadProfilesFailure: {
      return {
        ...state,
        haveProfiles: false
      };
    }

    /* Login */

    case ActionTypes.LoginUser: {
      return {...state};
    }

    case ActionTypes.LoginUserBySocialGoogle: {
      return {...state};
    }

    case ActionTypes.LoginUserBySocialFacebook: {
      return {...state};
    }

    case ActionTypes.LoginUserFailure: {
      return {
        ...state,
        logined: false
      };
    }

    case ActionTypes.LoginUserSuccess: {
      return {
        ...state,
        logined: true
      };
    }

    case ActionTypes.SetSocialStatusUser: {
      return {
        ...state,
        social: true
      };
    }

    /* Switch account */

    case ActionTypes.SwitchAccount: {
      return {
        ...state,
        accountType: action.payload.accountType
      };
    }

    /* Application settings */

    case ActionTypes.GetApplicationSettings: {
      return {...state};
    }

    case ActionTypes.GetApplicationSettingsSuccess: {
      return {
        ...state,
        appUserSettings: action.payload.response.data
      };
    }

    case ActionTypes.GetApplicationSettingsFailure: {
      return {
        ...state,
      };
    }

    case ActionTypes.SetApplicationSettings: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }

    case ActionTypes.SetApplicationSettingsSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case ActionTypes.SetApplicationSettingsFailure: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    default: {
      return state;
    }
  }

}
