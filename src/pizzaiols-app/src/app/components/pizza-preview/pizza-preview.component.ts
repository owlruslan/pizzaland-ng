import {animate, animateChild, query, style, transition, trigger} from '@angular/animations';
import {Component, Input} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export const SLIDE_ANIMATION = trigger('slide', [
  transition(':enter', [
    style({transform: 'translate3d(-400px, -400px, 0px)'}),
    animate('300ms 100ms', style({transform: 'translate3d(0px, 0px, 0px)'})),
    query('@drop', [
      animateChild()
    ]),
  ]),
  transition(':leave', [
    style({transform: 'translate3d(0px, 0px, 0px)'}),
    animate('200ms', style({transform: 'translate3d(-400px, -400px, 0px)'})),
  ])
]);


export const DROP_ANIMATION = trigger('drop', [
  transition(':enter', [
    style({transform: 'translateY(-200px)', opacity: 0}),
    animate('200ms 300ms', style({transform: 'translateY(0)', opacity: 1}))
  ]),
]);

@Component({
  selector: 'app-pizza-preview',
  animations: [DROP_ANIMATION, SLIDE_ANIMATION],
  templateUrl: './pizza-preview.component.html',
  styleUrls: ['./pizza-preview.component.scss']
})
export class PizzaPreviewComponent {
  pizza$ = new BehaviorSubject<any[]>([]);
  toppings = [
    'anchovy', 'bacon', 'basil', 'chili', 'mozzarella', 'mushroom',
    'olive', 'onion', 'pepper', 'pepperoni', 'sweetcorn', 'tomato'
  ];

  get pizza(): any {
    return this.pizza$.getValue()[0];
  }

  @Input()
  set pizza(value: any) {
    this.pizza$.next([value]);
  }
}
