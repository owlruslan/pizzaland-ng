import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {UserStoreModule} from './user';
import {routerReducer} from '@ngrx/router-store';


@NgModule({
  imports: [
    CommonModule,

    // Feature Stores
    UserStoreModule,

    // App root store
    StoreModule.forFeature('router', routerReducer),
  ],
  declarations: []
})
export class ClientStoreModule {
}
