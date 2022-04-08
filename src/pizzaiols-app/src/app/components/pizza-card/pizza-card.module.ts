import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PizzaCardComponent} from './pizza-card.component';
import { PizzaSmallPreviewModule } from '../pizza-small-preview/pizza-small-preview.module';
import {ButtonModule} from '../../uikit/button/button.module';


@NgModule({
  declarations: [PizzaCardComponent],
  imports: [
    CommonModule,
    ButtonModule,
    PizzaSmallPreviewModule
  ],
  exports: [PizzaCardComponent]
})
export class PizzaCardModule { }
