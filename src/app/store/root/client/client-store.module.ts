import {CommonModule} from '@angular/common';
import {InjectionToken, NgModule} from '@angular/core';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as ClientStoreState from '@app/store/root/client/state';
import * as UserStoreReducer from '@app/store/root/client/user/user.reducer';
import * as PizzasStoreReducer from '@app/store/root/client/pizzas/pizzas.reducer';
import * as BasketStoreReducer from '@app/store/root/client/basket/basket.reducer';
import {UserEffects} from '@app/store/root/client/user/user.effects';
import {PizzasEffects} from '@app/store/root/client/pizzas/pizzas.effects';
import {BasketEffects} from '@app/store/root/client/basket/basket.effects';


export const FEATURE_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<ClientStoreState.State>>('Client Feature Reducers');

export function getReducers(): ActionReducerMap<ClientStoreState.State> {
  // map of reducers
  return {
    user: UserStoreReducer.reducer,
    pizzas: PizzasStoreReducer.reducer,
    basket: BasketStoreReducer.reducer,
  };
}

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      UserEffects,
      PizzasEffects,
      BasketEffects
    ]),
    StoreModule.forFeature('client', FEATURE_REDUCER_TOKEN),
  ],
  providers: [
    {
      provide: FEATURE_REDUCER_TOKEN,
      useFactory: getReducers,
    },
  ],
})
export class ClientStoreModule {
}
