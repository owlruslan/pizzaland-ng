import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzaCardModule } from '../../components/pizza-card/pizza-card.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { PizzaToppingsModule } from '../../components/pizza-toppings/pizza-toppings.module';
import { RestaurantCardModule } from '../../components/restaurant-card/restaurant-card.module';
import { BreadcrumbsModule } from '../../components/breadcrumbs/breadcrumbs.module';

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
