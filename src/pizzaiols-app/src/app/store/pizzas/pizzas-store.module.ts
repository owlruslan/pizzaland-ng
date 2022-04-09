import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from '@ngrx/store';
import {PizzasEffects} from "./pizzas.effects";
import {reducer} from './pizzas.reducer';
import {FEATURE_KEY} from './pizzas.state';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([PizzasEffects]),
    StoreModule.forFeature(FEATURE_KEY, reducer),
  ]
})
export class PizzasStoreModule {}
