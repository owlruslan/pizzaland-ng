import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ButtonModule} from '../../ui/button/button.module';
import {PizzaSmallPreviewModule} from '../pizza-small-preview/pizza-small-preview.module';
import {RestaurantCardComponent} from './restaurant-card.component';


@NgModule({
  declarations: [RestaurantCardComponent],
  imports: [
    CommonModule,
    ButtonModule,
    PizzaSmallPreviewModule
  ],
  exports: [RestaurantCardComponent]
})
export class RestaurantCardModule {}
