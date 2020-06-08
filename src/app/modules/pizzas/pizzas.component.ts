import {AfterContentChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {Unsubscribe} from '@app/interfaces/unsubscribe.interface';
import {combineLatest, Observable, Subject} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {RootStoreState} from '@app/store/root';
import {map, takeUntil} from 'rxjs/operators';
import {PizzasStoreActions, PizzasStoreSelectors} from '@app/store/root/client';
import {GetPizzasResponse} from '@app/models/pizzas/get-pizzas-response.model';
import {FormBuilder} from '@angular/forms';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

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
