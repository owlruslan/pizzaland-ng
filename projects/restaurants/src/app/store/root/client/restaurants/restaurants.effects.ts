import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { RootStoreState } from '../../index';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { loadRestaurants, loadRestaurantsSuccess } from './restaurants.actions';
import { EMPTY } from 'rxjs';
import { getUserTokenState } from '../user/user.selectors';
import { RestaurantsService } from '../../../../services/restaurants/restaurants.service';
import { Restaurant } from '../../../../models/restaurants/restaurant';

@Injectable()
export class RestaurantsEffects {
  private token$ = this.store.pipe(select(getUserTokenState));

  loadRestaurants$ = createEffect(() => this.actions$.pipe(
    ofType(loadRestaurants.type),
    withLatestFrom(this.token$),
    switchMap(([_, token]) => this.restaurantsService.getRestaurants(token).pipe(
      map((response: Restaurant[]) => loadRestaurantsSuccess({response})),
      catchError(() => EMPTY),
    )),
  ));

  constructor(
    private actions$: Actions,
    private store: Store<RootStoreState.State>,
    private restaurantsService: RestaurantsService,
  ) {
  }
}
