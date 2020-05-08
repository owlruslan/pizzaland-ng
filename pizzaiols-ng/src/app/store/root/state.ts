import {ClientStoreState} from '@app/store/root/client';
import {AppStoreState} from '@app/store/root/app';

export interface State {
  app: AppStoreState.State;
  client: ClientStoreState.State;
}

export const initialState: State = {
  app: null,
  client: null,
};
