import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ClientStoreState} from '../index';


@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private store: Store<ClientStoreState.State>
  ) {
  }
}
