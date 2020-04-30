import {AfterContentChecked, AfterContentInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Unsubscribe} from '@app/interfaces/unsubscribe.interface';
import {BehaviorSubject, combineLatest, Observable, of, Subject} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {RootStoreState} from '@app/store/root';
import {filter, map, startWith, switchMap, takeUntil, tap, withLatestFrom} from 'rxjs/operators';
import {PizzasStoreSelectors} from '@app/store/root/client';
import {GetPizzasResponse} from '@app/models/pizzas/get-pizzas-response.model';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit, AfterContentChecked, OnDestroy, Unsubscribe {
  readonly unsubscribe = new Subject<void>();

  form = this.fb.group({
    toppings: [[]]
  });

  pizzasResponse$: Observable<GetPizzasResponse> = this.store.pipe(
    select(PizzasStoreSelectors.getPizzasResponseState),
    takeUntil(this.unsubscribe)
  );

  pizzas$: Observable<any[]> = combineLatest([
    this.form.controls.toppings.valueChanges,
    this.pizzasResponse$
  ]).pipe(
    map((results) => {
      const toppings = results[0];
      const pizzasResponse = results[1];

      if (toppings.length > 0) {
        return pizzasResponse.pizzas.filter(pizza =>
          toppings.some(topping => pizza.toppings.includes(topping))
        );
      } else {
        return pizzasResponse.pizzas;
      }
    })
  );

  constructor(
    private store: Store<RootStoreState.State>,
    private fb: FormBuilder
  ) {
    this.form.controls.toppings.enable();
  }

  ngOnInit(): void {
    // TODO: dispatch get pizzas response
  }

  ngAfterContentChecked(): void {
    this.form.controls.toppings.enable();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
