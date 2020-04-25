import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzasRoutingModule } from './pizzas-routing.module';
import { PizzasComponent } from './pizzas.component';
import {NavbarModule} from '@app/modules/shared/navbar/navbar.module';
import {PizzaCardModule} from '@app/modules/shared/pizza-card/pizza-card.module';


@NgModule({
  declarations: [PizzasComponent],
  imports: [
    CommonModule,
    PizzasRoutingModule,
    NavbarModule,
    PizzaCardModule
  ],
  exports: [PizzasComponent]
})
export class PizzasModule { }
