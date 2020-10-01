import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {AppStoreModule} from '@app/store/root/app/app-store.module';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ClientStoreModule} from '@app/store/root/client';


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
