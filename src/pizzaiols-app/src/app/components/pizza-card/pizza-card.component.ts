import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { Pizza } from '../../models';
import { RootStoreState } from '../../store/root';
import { BasketStoreActions } from '../../store/root/client';
import {ButtonType} from '../../uikit/button/button.component';

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
