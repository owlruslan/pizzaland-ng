import {AfterContentChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Observable, Subject} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {map, takeUntil} from 'rxjs/operators';
import {FormBuilder} from '@angular/forms';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {
  PizzasStoreActions,
  PizzasStoreSelectors,
} from '../../store/root/client';
import { GetPizzasResponse } from '../../../../../../libraries/core/src/lib/models/pizzas/get-pizzas-response.model';
import { Unsubscribe } from '../../../../../../libraries/core/src/lib/components/unsubscribe.interface';
import { RootStoreState } from '../../store/root';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss'],
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
export class PizzasComponent implements OnInit, AfterContentChecked, OnDestroy, Unsubscribe {
  readonly unsubscribe = new Subject<void>();

  form = this.fb.group({
    toppings: [[]]
  });

  pizzasResponse$: Observable<GetPizzasResponse> = this.store.pipe(
    select(PizzasStoreSelectors.getPizzasResponseState),
    takeUntil(this.unsubscribe)
  );

  // @ts-ignore
  pizzas$: Observable<any[]> = combineLatest([
    this.form.controls.toppings.valueChanges,
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
    select(PizzasStoreSelectors.getLoadingState),
    takeUntil(this.unsubscribe)
  );

  constructor(
    private store: Store<RootStoreState.State>,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new PizzasStoreActions.GetPizzas());
  }

  ngAfterContentChecked(): void {
    this.form.controls.toppings.enable();
  }


  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
