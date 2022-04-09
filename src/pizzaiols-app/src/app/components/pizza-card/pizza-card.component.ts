import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {BehaviorSubject} from 'rxjs';
import {Pizza} from '../../models';
import {cartStoreActions} from "../../store/cart";
import {ButtonType} from '../../uikit/button/button.component';


@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss'],
})
export class PizzaCardComponent {
  readonly buttonType = ButtonType.SUCCESS;

  // @ts-ignore
  pizza$ = new BehaviorSubject<Pizza>(undefined);

  constructor(private store: Store) { }

  get pizza(): Pizza {
    return this.pizza$.getValue();
  }

  @Input()
  set pizza(value: Pizza) {
    this.pizza$.next(value);
  }

  onBuy(pizza: Pizza): void {
    this.store.dispatch(cartStoreActions.add({pizza}));
  }
}
