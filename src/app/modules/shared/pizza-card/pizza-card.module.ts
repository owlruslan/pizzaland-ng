import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaCardComponent } from './pizza-card.component';
import {ButtonModule} from '@app/ui/v1/button/button.module';



@NgModule({
  declarations: [PizzaCardComponent],
    imports: [
        CommonModule,
        ButtonModule
    ],
  exports: [PizzaCardComponent]
})
export class PizzaCardModule { }
