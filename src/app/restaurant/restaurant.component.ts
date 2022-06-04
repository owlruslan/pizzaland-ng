import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {AfterContentChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {combineLatest, Observable, Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import {CursorType} from '../components/restaurant-card/restaurant-card.component';
import {GetPizzasResponse} from "../pizzas/get-pizzas-response.model";
import {Pizza} from "../pizzas/pizza.model";
import {PizzasService} from "../pizzas/pizzas.service";
import {Restaurant} from '../restaurants/restaurant';
import {RestaurantsService} from "../restaurants/restaurants.service";

@Component({
  selector: 'app-pizzas',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter',
          [style({opacity: 0}), stagger('100ms', animate('600ms ease-out', style({opacity: 1})))],
          {optional: true}
        ),
      ])
    ])
  ]
})
export class RestaurantComponent implements AfterContentChecked, OnDestroy {
  readonly cursorTypes = CursorType;
  readonly unsubscribe = new Subject<void>();

  readonly restaurant: Observable<Restaurant> = this.restaurantsService.getRestaurant('0');

  form = this.fb.group({toppings: [[]]});
  pizzasResponse$: Observable<GetPizzasResponse> = this.pizzasService.getPizzas();
  pizzas$: Observable<Pizza[] | undefined> = combineLatest([
    this.form.controls['toppings'].valueChanges,
    this.pizzasResponse$
  ]).pipe(
    map((results) => {
      const toppings = results[0];
      const pizzasResponse = results[1];

      if (toppings.length > 0) {
        // @ts-ignore
        return pizzasResponse.pizzas.filter(pizza =>
          // @ts-ignore
          toppings.some((topping: any) => pizza.toppings.includes(topping))
        );
      } else {
        return pizzasResponse.pizzas;
      }
    }),
    takeUntil(this.unsubscribe)
  );

  constructor(
    private store: Store,
    private restaurantsService: RestaurantsService,
    private pizzasService: PizzasService,
    private fb: FormBuilder
  ) {
  }

  ngAfterContentChecked(): void {
    this.form.controls['toppings'].enable();
  }


  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
