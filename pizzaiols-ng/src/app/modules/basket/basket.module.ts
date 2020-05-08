import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';
import {NavbarModule} from '@app/modules/shared/navbar/navbar.module';
import {PizzaCardModule} from '@app/modules/shared/pizza-card/pizza-card.module';
import {PizzaPreviewModule} from '@app/modules/shared/pizza-preview/pizza-preview.module';


@NgModule({
  declarations: [BasketComponent],
    imports: [
        CommonModule,
        BasketRoutingModule,
        NavbarModule,
        PizzaCardModule,
        PizzaPreviewModule
    ],
  exports: [BasketComponent]
})
export class BasketModule { }
