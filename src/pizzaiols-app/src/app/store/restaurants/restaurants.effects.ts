import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {Restaurant} from '../../models/restaurants/restaurant';
import {RestaurantsService} from '../../services/restaurants/restaurants.service';
import {getUserTokenState} from '../user/user.selectors';
import {loadRestaurants, loadRestaurantsSuccess} from './restaurants.actions';

@Injectable()
export class RestaurantsEffects {
  token$ = this.store.pipe(select(getUserTokenState));

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
    private store: Store,
    private restaurantsService: RestaurantsService,
  ) {
  }
}
