import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { SearchService } from '../../services/search/search.service';
import { SearchBarModule } from '../shared/search-bar/search-bar.module';

@NgModule({
  declarations: [RestaurantsComponent],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    SearchBarModule,
    NavbarModule,
  ],
  providers: [
    SearchService
  ]
})
export class RestaurantsModule { }
