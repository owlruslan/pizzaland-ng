import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {AfterContentChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {combineLatest, Observable, Subject} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';
import {RestaurantsApiService} from 'src/app/services/restaurants/restaurants-api.service';
import {CursorType} from '../../components/restaurant-card/restaurant-card.component';
import {GetPizzasResponse} from '../../models';
import {Restaurant} from '../../models/restaurants/restaurant';
import {pizzasStoreActions, pizzasStoreSelectors} from "../../store/pizzas";

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
export class RestaurantComponent implements OnInit, AfterContentChecked, OnDestroy {
  readonly cursorTypes = CursorType;
  readonly unsubscribe = new Subject<void>();

  readonly restaurant: Observable<Restaurant> = this.restaurantsService.getRestaurant('0');

  form = this.fb.group({
    toppings: [[]]
  });

  pizzasResponse$: Observable<GetPizzasResponse> = this.store.pipe(
    select(pizzasStoreSelectors.getPizzasResponseState),
    takeUntil(this.unsubscribe)
  );

  // @ts-ignore
  pizzas$: Observable<any[]> = combineLatest([
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
    })
  );

  loading$: Observable<boolean> = this.store.pipe(
    select(pizzasStoreSelectors.getLoadingState),
    takeUntil(this.unsubscribe)
  );

  constructor(
    private store: Store,
    private restaurantsService: RestaurantsApiService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(pizzasStoreActions.getPizzas());
  }

  ngAfterContentChecked(): void {
    this.form.controls['toppings'].enable();
  }


  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
