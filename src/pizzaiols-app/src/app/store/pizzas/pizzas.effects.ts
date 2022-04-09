import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {of} from 'rxjs';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {GetPizzasResponse, ResponseError} from '../../models';
import {PizzasService} from '../../services/pizzas/pizzas.service';
import {getUserTokenState} from '../user/user.selectors';
import {ActionTypes, GetPizzas, GetPizzasFailure, GetPizzasSuccess} from './pizzas.actions';

/**
 * Provides Pizzas Store Effects.
 */
@Injectable()
export class PizzasEffects {

  getPizzas$ = createEffect(() => this.actions$.pipe(
    ofType<GetPizzas>(ActionTypes.GetPizzas),
    withLatestFrom(this.store.pipe(select(getUserTokenState))),
    switchMap(([action, token]) => {
        // @ts-ignore
        return this.pizzasService.getPizzas(token).pipe(
          map((response: GetPizzasResponse) =>
            new GetPizzasSuccess({ response }),
          ),
          catchError((errResponse: ResponseError) => of(errResponse).pipe(
            switchMap((response: ResponseError) => [
              new GetPizzasFailure({ response }),
            ]),
          )),
        );
      },
    ),
  ));

  constructor(
    private actions$: Actions,
    private store: Store,
    private pizzasService: PizzasService,
  ) {
  }
}
