import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppStoreReducer } from './index';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('app', AppStoreReducer.reducer),
  ],
})
export class AppStoreModule {
}
