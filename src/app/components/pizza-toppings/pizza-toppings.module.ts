import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PizzaToppingsComponent} from './pizza-toppings.component';


@NgModule({
  declarations: [PizzaToppingsComponent],
  imports: [
    CommonModule
  ],
  exports: [PizzaToppingsComponent]
})
export class PizzaToppingsModule {}
