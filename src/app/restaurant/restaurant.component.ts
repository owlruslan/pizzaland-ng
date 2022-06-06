import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CartService} from "../cart/cart.service";
import {Pizza} from "../pizzas/pizza.model";
import {PizzasService} from "../pizzas/pizzas.service";
import {Restaurant} from '../restaurants/restaurant';
import {RestaurantsService} from "../restaurants/restaurants.service";

@Component({
  selector: 'app-pizzas',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter',
          [style({opacity: 0}), stagger('100ms', animate('600ms ease-out', style({opacity: 1})))],
          {optional: true}
        ),
      ])
    ])
  ],
})
export class RestaurantComponent {
  readonly restaurant: Restaurant = this.restaurantsService.getRestaurant('0');

  form = this.fb.group({toppings: [[]]});
  pizzas: Pizza[] | undefined = this.pizzasService.getPizzas();
  // TODO: add filter
  /* pizzas$: Observable<Pizza[] | undefined> = combineLatest([
    this.form.controls['toppings'].valueChanges,
    this.pizzaResults$
  ]).pipe(
    map((results) => {
      const toppings = results[0];
      const pizzaResults = results[1];

      console.log(results);

      // @ts-ignore
      if (toppings.length > 0) {
        // @ts-ignore
        return pizzaResults.pizzas.filter(pizza =>
          // @ts-ignore
          toppings.some((topping: any) => pizza.toppings.includes(topping))
        );
      }

      return pizzaResults.pizzas;
    }),
    takeUntil(this.unsubscribe)
  );*/

  constructor(
    private restaurantsService: RestaurantsService,
    private pizzasService: PizzasService,
    private cart: CartService,
    private fb: FormBuilder
  ) {
  }

  onAddCart(pizza: Pizza) {
    this.cart.addToCart(pizza);
  }
}
