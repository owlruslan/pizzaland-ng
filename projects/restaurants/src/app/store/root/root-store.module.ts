import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { AppStoreModule } from './app/app-store.module'
import { ClientStoreModule } from './client'


@NgModule({
  imports: [
    CommonModule,

    StoreModule.forRoot({}, {}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({name: 'Pizzaiols Store'}),
    EffectsModule.forRoot([]),

    AppStoreModule,
    ClientStoreModule,

    // App root store
    StoreModule.forFeature('router', routerReducer),
  ],
  declarations: []
})
export class RootStoreModule {
}
