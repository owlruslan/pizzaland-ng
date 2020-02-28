import {UserStoreState} from './user';
import {RouterReducerState} from '@ngrx/router-store';


export interface State {
  user: UserStoreState.State;

  router: RouterReducerState;
}
