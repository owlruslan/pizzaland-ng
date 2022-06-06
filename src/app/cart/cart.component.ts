import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Pizza} from "../pizzas/pizza.model";
import {CartService} from "./cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  pizzas: Pizza[] = this.cart.getPizzas();
  total: number = this.pizzas.length;
  activePizza: Pizza | undefined = this.pizzas[0];

  constructor(private cart: CartService) { }

  onPizzaHover(pizza: Pizza): void {
    this.activePizza = pizza;
  }
}
