import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PizzaPreviewComponent} from './pizza-preview.component';


@NgModule({
  declarations: [PizzaPreviewComponent],
  imports: [
    CommonModule
  ],
  exports: [PizzaPreviewComponent]
})
export class PizzaPreviewModule { }
