import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { Pizza } from '../../../../../../../libraries/core/src/lib/models/pizzas/pizza.model';
import { RootStoreState } from '../../../store/root';
import { ButtonType } from '../../../../../../../libraries/uikit/src/lib/button/button.component';
import { BasketStoreActions } from '../../../store/root/client';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss'],
})
export class PizzaCardComponent implements OnInit {
  readonly buttonType = ButtonType.SUCCESS;

  /**
   * @input: pizza - Pizza entity.
   */
    // @ts-ignore
  pizza$ = new BehaviorSubject<Pizza>(null);

  get pizza(): Pizza {
    return this.pizza$.getValue();
  }

  @Input()
  set pizza(value: Pizza) {
    this.pizza$.next(value);
  }

  constructor(
    private store: Store<RootStoreState.State>,
  ) { }

  ngOnInit(): void {
  }

  onBuy(pizza: Pizza): void {
    this.store.dispatch(new BasketStoreActions.AddPizza({ pizza }));
  }
}
