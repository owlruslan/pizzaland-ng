import {Action, createReducer, on} from "@ngrx/store";
import {login, loginFailure, loginSuccess} from "./user.actions";
import {initialState, State} from './user.state';


const userReducer = createReducer(
  initialState,
  on(login, state => ({...state})),
  on(loginSuccess, (state, {response}) => ({...state})),
  on(loginFailure, state => ({...state})),
);

export function reducer(state: State | undefined, action: Action): State {
  return userReducer(state, action);
}
