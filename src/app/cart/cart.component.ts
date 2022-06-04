import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Pizza} from '../models';
import {cartStoreSelectors} from "../store/cart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  readonly unsubscribe = new Subject<void>();

  pizzas$: Observable<Pizza[]> = this.store.pipe(
    select(cartStoreSelectors.getPizzas),
    takeUntil(this.unsubscribe),
  );

  total$: Observable<number> = this.store.pipe(
    select(cartStoreSelectors.getTotalState),
    takeUntil(this.unsubscribe),
  );

  // @ts-ignore
  activePizza$ = new BehaviorSubject<Pizza>(null);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.pizzas$.subscribe(resp => {
      if (resp) {
        // @ts-ignore
        this.activePizza$.next(resp[0]);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  onPizzaHover(pizza: Pizza): void {
    this.activePizza$.next(pizza);
  }
}
