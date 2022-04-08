import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { PizzaCardModule } from '../../components/pizza-card/pizza-card.module';
import { PizzaPreviewModule } from '../../components/pizza-preview/pizza-preview.module';

@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    BasketRoutingModule,
    NavbarModule,
    PizzaCardModule,
    PizzaPreviewModule,
  ],
})
export class BasketModule {}
