import {Injectable} from '@angular/core';
import {mockPizzaResults} from "../pizzas/get-pizzas-response.mock";
import {Pizza} from "../pizzas/pizza.model";


@Injectable({providedIn: 'root'})
export class CartService {
  private pizzas: Pizza[] = mockPizzaResults.slice(0, 2) || [];

  addToCart(pizza: Pizza): void {
    this.pizzas.push(pizza);
  }

  getPizzas(): Pizza[] {
    return this.pizzas;
  }
}
