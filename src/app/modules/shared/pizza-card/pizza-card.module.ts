import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PizzaCardComponent} from './pizza-card.component';
import {ButtonModule} from '@app/ui/v1/button/button.module';
import {PizzaSmallPreviewModule} from '@app/modules/shared/pizza-small-preview/pizza-small-preview.module';


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
