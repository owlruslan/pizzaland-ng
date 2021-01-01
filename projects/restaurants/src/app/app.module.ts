import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RootStoreModule} from './store/root';
import {NavbarModule} from './modules/shared/navbar/navbar.module';
import {RestaurantsService} from './services/restaurants/restaurants.service';
import {RestaurantsMockService} from './services/restaurants/restaurants-mock.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RootStoreModule,
    NavbarModule,
  ],
  providers: [
    { provide: RestaurantsService, useClass: RestaurantsMockService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
