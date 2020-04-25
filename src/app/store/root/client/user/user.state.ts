export interface State {
  logined: boolean;
  userTokenResponse: any;
}

export const initialState: State = {
  logined: false,
  userTokenResponse: null
};
