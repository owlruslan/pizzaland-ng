import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ButtonModule} from '../../ui';
import {PizzaSmallPreviewModule} from '../pizza-small-preview/pizza-small-preview.module';
import {PizzaCardComponent} from './pizza-card.component';


@NgModule({
  declarations: [PizzaCardComponent],
  imports: [
    CommonModule,
    ButtonModule,
    PizzaSmallPreviewModule
  ],
  exports: [PizzaCardComponent]
})
export class PizzaCardModule {}
