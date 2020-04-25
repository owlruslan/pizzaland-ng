import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaCardComponent } from './pizza-card.component';



@NgModule({
  declarations: [PizzaCardComponent],
  imports: [
    CommonModule
  ],
  exports: [PizzaCardComponent]
})
export class PizzaCardModule { }
