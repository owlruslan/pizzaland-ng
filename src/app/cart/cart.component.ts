import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Pizza} from "../pizzas/pizza.model";
import {CartService} from "./cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  pizzas: Pizza[] = this.cart.getPizzas();
  total: number = this.pizzas.length;
  activePizza: Pizza | undefined = undefined;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.activePizza = this.pizzas[0];
  }

  onPizzaHover(pizza: Pizza): void {
    this.activePizza = pizza;
  }
}
