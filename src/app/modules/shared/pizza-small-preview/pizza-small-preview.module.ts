import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaSmallPreviewComponent } from './pizza-small-preview.component';



@NgModule({
  declarations: [PizzaSmallPreviewComponent],
  imports: [
    CommonModule
  ],
  exports: [PizzaSmallPreviewComponent]
})
export class PizzaSmallPreviewModule { }
