import {Component} from '@angular/core';
import {CartService} from "../../cart/cart.service";
import {Pizza} from "../../pizzas/pizza.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  pizzas: Pizza[] = this.cart.getPizzas();

  constructor(private cart: CartService) { }
}
