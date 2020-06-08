import {Component, Input, OnInit} from '@angular/core';
import {ButtonType} from '@app/ui/v1/button/button.component';
import {BehaviorSubject} from 'rxjs';
import {Pizza} from '@app/models/pizzas/pizza.model';
import {Store} from '@ngrx/store';
import {RootStoreState} from '@app/store/root';
import {BasketStoreActions} from '@app/store/root/client';

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
  pizza$ = new BehaviorSubject<Pizza>(null);

  get pizza(): Pizza {
    return this.pizza$.getValue();
  }

  @Input()
  set pizza(value: Pizza) {
    this.pizza$.next(value);
  }

  constructor(
    private store: Store<RootStoreState.State>
  ) { }

  ngOnInit(): void {
  }

  onBuy(pizza: Pizza) {
    this.store.dispatch(new BasketStoreActions.AddPizza({pizza}));
  }
}
