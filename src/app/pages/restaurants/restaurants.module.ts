import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RestaurantCardModule} from '../../components/restaurant-card/restaurant-card.module';

import {RestaurantsRoutingModule} from './restaurants-routing.module';
import {RestaurantsComponent} from './restaurants.component';

@NgModule({
  declarations: [RestaurantsComponent],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    RestaurantCardModule,
  ],
})
export class RestaurantsModule {}
