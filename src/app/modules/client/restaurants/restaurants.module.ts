import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RestaurantsRoutingModule} from './restaurants-routing.module';
import {RestaurantsComponent} from './restaurants.component';
import {NavbarModule} from '../shared/navbar/navbar.module';
import {RestaurantCardModule} from '../shared/restaurant-card/restaurant-card.module';

@NgModule({
  declarations: [RestaurantsComponent],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    NavbarModule,
    RestaurantCardModule,
  ],
})
export class RestaurantsModule {}
