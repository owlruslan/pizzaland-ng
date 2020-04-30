import {Component, Input, OnInit} from '@angular/core';
import {ButtonType} from '@app/ui/v1/button/button.component';
import {BehaviorSubject} from 'rxjs';

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
  pizza$ = new BehaviorSubject<any>(null);

  get pizza(): any {
    return this.pizza$.getValue();
  }

  @Input()
  set pizza(value: any) {
    this.pizza$.next(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
