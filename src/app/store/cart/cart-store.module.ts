import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {reducer} from './cart.reducer';
import {FEATURE_KEY} from './cart.state';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_KEY, reducer),
  ]
})
export class CartStoreModule {}
