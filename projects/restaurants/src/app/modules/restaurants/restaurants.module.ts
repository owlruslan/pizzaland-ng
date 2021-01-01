import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RestaurantsRoutingModule} from './restaurants-routing.module';
import {RestaurantsComponent} from './restaurants.component';
import {NavbarModule} from '../shared/navbar/navbar.module';
import {RestaurantCardModule} from '../shared/restaurant-card/restaurant-card.module';
import {RestaurantsMockService} from '../../services/restaurants/restaurants-mock.service';
import {RestaurantsService} from '../../services/restaurants/restaurants.service';

@NgModule({
  declarations: [RestaurantsComponent],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    NavbarModule,
    RestaurantCardModule,
  ],
  providers: [
    { provide: RestaurantsService, useClass: RestaurantsMockService },
  ],
})
export class RestaurantsModule {}
