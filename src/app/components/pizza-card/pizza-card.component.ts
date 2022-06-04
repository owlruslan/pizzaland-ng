import {Component, Input} from '@angular/core';
import {CartService} from "../../cart/cart.service";
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

  constructor(private cart: CartService) { }

  onBuy(pizza: Pizza): void {
    this.cart.addToCart(pizza);
  }
}
