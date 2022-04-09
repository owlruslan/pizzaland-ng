import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from '@ngrx/store';
import {RestaurantsEffects} from "./restaurants.effects";
import {reducer} from './restaurants.reducer';
import {FEATURE_KEY} from './restaurants.state';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([RestaurantsEffects]),
    StoreModule.forFeature(FEATURE_KEY, reducer),
  ]
})
export class RestaurantsStoreModule {}
