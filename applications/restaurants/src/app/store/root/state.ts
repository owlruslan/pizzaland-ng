import { ClientStoreState } from './client';
import { AppStoreState } from './app';

export interface State {
  app: AppStoreState.State;
  client: ClientStoreState.State;
}

export const initialState: State = {
  app: AppStoreState.initialState,
  client: ClientStoreState.initialState,
};
