import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as ClientStoreState from './state';
import * as UserStoreReducer from './user/user.reducer';
import * as PizzasStoreReducer from './pizzas/pizzas.reducer';
import * as BasketStoreReducer from './basket/basket.reducer';
import { UserEffects } from './user/user.effects';
import { PizzasEffects } from './pizzas/pizzas.effects';

export const FEATURE_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<ClientStoreState.State>>('Client Feature Reducers');

export function getReducers(): ActionReducerMap<ClientStoreState.State> {
  // map of reducers
  return {
    // @ts-ignore
    user: UserStoreReducer.reducer,
    // @ts-ignore
    pizzas: PizzasStoreReducer.reducer,
    // @ts-ignore
    basket: BasketStoreReducer.reducer,
  };
}

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      UserEffects,
      PizzasEffects,
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
