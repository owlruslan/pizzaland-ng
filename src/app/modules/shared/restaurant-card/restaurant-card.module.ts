import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantCardComponent} from './restaurant-card.component';
import {PizzaSmallPreviewModule} from '../pizza-small-preview/pizza-small-preview.module';
import {ButtonModule} from '../../../uikit/button/button.module';


@NgModule({
  declarations: [RestaurantCardComponent],
  imports: [
    CommonModule,
    ButtonModule,
    PizzaSmallPreviewModule
  ],
  exports: [RestaurantCardComponent]
})
export class RestaurantCardModule { }
