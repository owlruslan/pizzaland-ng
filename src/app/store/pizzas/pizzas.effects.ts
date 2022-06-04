import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ResponseError} from '../../models';
import {GetPizzasResponse} from "../../pizzas/get-pizzas-response.model";
import {PizzasService} from '../../pizzas/pizzas.service';
import {getPizzas, getPizzasFailure, getPizzasSuccess} from './pizzas.actions';


@Injectable()
export class PizzasEffects {
  getPizzas$ = createEffect(() => this.actions$.pipe(
    ofType(getPizzas),
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
