import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import {NavbarModule} from '@app/modules/shared/navbar/navbar.module';
import {PizzaCardModule} from '@app/modules/shared/pizza-card/pizza-card.module';


@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    BasketRoutingModule,
    NavbarModule,
    PizzaCardModule
  ],
  exports: [BasketComponent]
})
export class BasketModule { }
