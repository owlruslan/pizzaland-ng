import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {EMPTY} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Restaurant} from '../../models/restaurants/restaurant';
import {RestaurantsService} from '../../services/restaurants/restaurants.service';
import {loadRestaurants, loadRestaurantsSuccess} from './restaurants.actions';

@Injectable()
export class RestaurantsEffects {
  loadRestaurants$ = createEffect(() => this.actions$.pipe(
    ofType(loadRestaurants.type),
    switchMap(() => this.restaurantsService.getRestaurants().pipe(
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
