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
import {CartStoreModule} from "./store";


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
    StoreDevtoolsModule.instrument(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
