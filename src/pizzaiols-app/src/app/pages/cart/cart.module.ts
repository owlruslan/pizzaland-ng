import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NavbarModule} from '../../components/navbar/navbar.module';
import {PizzaCardModule} from '../../components/pizza-card/pizza-card.module';
import {PizzaPreviewModule} from '../../components/pizza-preview/pizza-preview.module';

import {CartRoutingModule} from './cart-routing.module';
import {CartComponent} from './cart.component';

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
