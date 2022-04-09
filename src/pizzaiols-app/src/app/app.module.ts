import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarModule} from "./components/navbar/navbar.module";
import {RestaurantsMockService} from './services/restaurants/restaurants-mock.service';
import {RestaurantsService} from './services/restaurants/restaurants.service';
import {CartStoreModule} from "./store/cart";
import {PizzasStoreModule} from "./store/pizzas/pizzas-store.module";
import {RestaurantsStoreModule} from "./store/restaurants/restaurants-store.module";
import {UserStoreModule} from "./store/user/user-store.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    // Store
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    CartStoreModule,
    PizzasStoreModule,
    RestaurantsStoreModule,
    UserStoreModule,
    StoreDevtoolsModule.instrument({ name: 'Pizzaiols' }),
  ],
  providers: [
    { provide: RestaurantsService, useClass: RestaurantsMockService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
