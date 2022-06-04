import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {of} from 'rxjs';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {GetPizzasResponse, ResponseError} from '../../models';
import {PizzasService} from '../../services/pizzas/pizzas.service';
import {getUserTokenState} from '../user/user.selectors';
import {getPizzas, getPizzasFailure, getPizzasSuccess} from './pizzas.actions';


@Injectable()
export class PizzasEffects {
  getPizzas$ = createEffect(() => this.actions$.pipe(
    ofType(getPizzas),
    withLatestFrom(this.store.pipe(select(getUserTokenState))),
    switchMap(() => this.pizzasService.getPizzas().pipe(
        map((response: GetPizzasResponse) => getPizzasSuccess({response}),),
        catchError((errResponse: ResponseError) => of(errResponse).pipe(
          switchMap((response: ResponseError) => [getPizzasFailure({response})]),
        )),
      )
    ),
  ));

  constructor(
    private actions$: Actions,
    private store: Store,
    private pizzasService: PizzasService,
  ) {
  }
}
