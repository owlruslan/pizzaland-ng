import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PizzaPreviewComponent} from './pizza-preview.component';


@NgModule({
  declarations: [PizzaPreviewComponent],
  imports: [
    CommonModule
  ],
  exports: [PizzaPreviewComponent]
})
export class PizzaPreviewModule {}
