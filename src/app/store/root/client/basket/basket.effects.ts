import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {RootStoreState} from '../../index';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {ActionTypes, GetPizzas, GetPizzasFailure, GetPizzasSuccess} from './basket.actions';
import {ResponseSuccess} from '@app/models/response/response-success.model';
import {ResponseError} from '@app/models/response/response-error.model';
import {AppStoreActions} from '@app/store/root/app';
import {of} from 'rxjs';
import {GetPizzasResponse} from '@app/models/pizzas/get-pizzas-response.model';
import {getUserTokenState} from '@app/store/root/client/user/user.selectors';
import {PizzasService} from '@app/services/pizzas/pizzas.service';

/**
 * Provides Pizzas Store Effects.
 */
@Injectable()
export class BasketEffects {

  /**
   * @action - [Pizzas] GetPizzas
   * @return:
   *   Success: [Pizzas] GetPizzasSuccess
   *   Failure: [Pizzas] GetPizzasFailure & [Errors] AddErrorResponse
   */
  getPizzas$ = createEffect(() => this.actions$.pipe(
    ofType<GetPizzas>(ActionTypes.GetPizzas),
    withLatestFrom(this.store.pipe(select(getUserTokenState))),
    switchMap(([action, token]) =>
      this.pizzasService.getPizzas(token).pipe(
        map((response: ResponseSuccess<GetPizzasResponse>) =>
          new GetPizzasSuccess({response})
        ),
        catchError((errResponse: ResponseError) => of(errResponse).pipe(
          switchMap((response: ResponseError) => [
            new GetPizzasFailure({response}),
            new AppStoreActions.AddErrorResponse({response})
          ])
        ))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private store: Store<RootStoreState.State>,
    private pizzasService: PizzasService,
  ) {
  }
}
