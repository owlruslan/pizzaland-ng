import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CartService} from "../../cart/cart.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  pizzasCount: number = this.cart.getPizzas().length;

  constructor(private cart: CartService) { }
}
