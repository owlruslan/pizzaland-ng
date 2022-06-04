import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BreadcrumbsModule} from '../../components/breadcrumbs/breadcrumbs.module';
import {NavbarModule} from '../../components/navbar/navbar.module';
import {PizzaCardModule} from '../../components/pizza-card/pizza-card.module';
import {PizzaToppingsModule} from '../../components/pizza-toppings/pizza-toppings.module';
import {RestaurantCardModule} from '../../components/restaurant-card/restaurant-card.module';

import {RestaurantRoutingModule} from './restaurant-routing.module';
import {RestaurantComponent} from './restaurant.component';

@NgModule({
  declarations: [RestaurantComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    NavbarModule,
    PizzaCardModule,
    PizzaToppingsModule,
    ReactiveFormsModule,
    RestaurantCardModule,
    BreadcrumbsModule,
  ],
})
export class RestaurantModule {}
