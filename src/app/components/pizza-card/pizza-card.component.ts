import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pizza} from "../../pizzas/pizza.model";
import {ButtonType} from '../../ui/button/button.component';


@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss'],
})
export class PizzaCardComponent {
  readonly buttonType = ButtonType.SUCCESS;
  @Input() pizza: Pizza | undefined = undefined;
  @Input() isShowButton = false;
  @Output() cartChange = new EventEmitter<Pizza>()

  onBuy(pizza: Pizza): void {
    this.cartChange.emit(pizza);
  }
}
