import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';


export const DROP_ANIMATION = trigger('drop', [
  transition(':enter', [
    style({ transform: 'translateY(-200px)', opacity: 0 }),
    animate('300ms cubic-bezier(1.000, 0.000, 0.000, 1.000)', style({ transform: 'translateY(0)', opacity: 1 }))
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)', opacity: 1 }),
    animate('200ms cubic-bezier(1.000, 0.000, 0.000, 1.000)', style({ transform: 'translateY(-200px)', opacity: 0 }))
  ])
]);

@Component({
  selector: 'app-pizza-preview',
  animations: [DROP_ANIMATION],
  templateUrl: './pizza-preview.component.html',
  styleUrls: ['./pizza-preview.component.scss']
})
export class PizzaPreviewComponent implements OnInit {
  toppings = [
    'anchovy', 'bacon', 'basil', 'chili', 'mozzarella', 'mushroom',
    'olive', 'onion', 'pepper', 'pepperoni', 'sweetcorn', 'tomato'
  ];

  activePizza = 1;

  pizzas = [
    1
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
