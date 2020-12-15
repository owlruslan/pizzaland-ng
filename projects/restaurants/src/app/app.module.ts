import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RootStoreModule } from './store/root';
import { NavbarModule } from './modules/shared/navbar/navbar.module';
import { SearchService } from './services/search/search.service';
import { SearchMockService } from './services/search/search-mock.service';


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
  bootstrap: [AppComponent]
})
export class AppModule { }
