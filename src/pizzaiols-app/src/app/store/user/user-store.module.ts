import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from '@ngrx/store';
import {UserEffects} from "./user.effects";
import {reducer} from './user.reducer';
import {FEATURE_KEY} from './user.state';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature(FEATURE_KEY, reducer),
  ]
})
export class UserStoreModule {}
