import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { RootStoreState } from '../../index';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { ActionTypes, GetPizzas, GetPizzasFailure, GetPizzasSuccess } from './pizzas.actions';
import { of } from 'rxjs';
import { ResponseSuccess } from '../../../../../../../../libraries/core/src/lib/models/response/response-success.model';
import { ResponseError } from '../../../../../../../../libraries/core/src/lib/models/response/response-error.model';
import { AppStoreActions } from '../../app';
import { PizzasService } from '../../../../services/pizzas/pizzas.service';
import { GetPizzasResponse } from '../../../../../../../../libraries/core/src/lib/models/pizzas/get-pizzas-response.model';
import { getUserTokenState } from '../user/user.selectors';

/**
 * Provides Pizzas Store Effects.
 */
@Injectable()
export class PizzasEffects {

  /**
   * @action - [Pizzas] GetPizzas
   * @return:
   *   Success: [Pizzas] GetPizzasSuccess
   *   Failure: [Pizzas] GetPizzasFailure & [Errors] AddErrorResponse
   */
  getPizzas$ = createEffect(() => this.actions$.pipe(
    ofType<GetPizzas>(ActionTypes.GetPizzas),
    withLatestFrom(this.store.pipe(select(getUserTokenState))),
    switchMap(([action, token]) => {
        // @ts-ignore
        return this.pizzasService.getPizzas(token).pipe(
          map((response: ResponseSuccess<GetPizzasResponse>) =>
            new GetPizzasSuccess({ response }),
          ),
          catchError((errResponse: ResponseError) => of(errResponse).pipe(
            switchMap((response: ResponseError) => [
              new GetPizzasFailure({ response }),
              new AppStoreActions.AddErrorResponse({ response }),
            ]),
          )),
        );
      },
    ),
  ));

  constructor(
    private actions$: Actions,
    private store: Store<RootStoreState.State>,
    private pizzasService: PizzasService,
  ) {
  }
}
