import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { PizzaCardModule } from '../../components/pizza-card/pizza-card.module';
import { PizzaPreviewModule } from '../../components/pizza-preview/pizza-preview.module';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    NavbarModule,
    PizzaCardModule,
    PizzaPreviewModule,
  ],
})
export class CartModule {}
