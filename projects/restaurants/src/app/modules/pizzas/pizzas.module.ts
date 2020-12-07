import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzasRoutingModule } from './pizzas-routing.module';
import { PizzasComponent } from './pizzas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzaCardModule } from '../shared/pizza-card/pizza-card.module';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { PizzaToppingsModule } from '../shared/pizza-toppings/pizza-toppings.module';

@NgModule({
  declarations: [PizzasComponent],
  imports: [
    CommonModule,
    PizzasRoutingModule,
    NavbarModule,
    PizzaCardModule,
    PizzaToppingsModule,
    ReactiveFormsModule,
  ],
})
export class PizzasModule {}
