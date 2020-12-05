import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PizzasRoutingModule} from './pizzas-routing.module';
import {PizzasComponent} from './pizzas.component';
import {NavbarModule} from '@app/modules/shared/navbar/navbar.module';
import {PizzaCardModule} from '@app/modules/shared/pizza-card/pizza-card.module';
import {PizzaToppingsModule} from '@app/modules/shared/pizza-toppings/pizza-toppings.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [PizzasComponent],
  imports: [
    CommonModule,
    PizzasRoutingModule,
    NavbarModule,
    PizzaCardModule,
    PizzaToppingsModule,
    ReactiveFormsModule
  ],
})
export class PizzasModule { }
