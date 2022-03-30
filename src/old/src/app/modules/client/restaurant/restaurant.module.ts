import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzaCardModule } from '../../shared/pizza-card/pizza-card.module';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { PizzaToppingsModule } from '../../shared/pizza-toppings/pizza-toppings.module';
import { RestaurantCardModule } from '../../shared/restaurant-card/restaurant-card.module';
import { BreadcrumbsModule } from '../../shared/breadcrumbs/breadcrumbs.module';

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
