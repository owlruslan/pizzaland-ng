import {Component, Input} from '@angular/core';

const TOPPINGS = [
  'anchovy',
  'bacon',
  'basil',
  'chili',
  /*  'mozzarella',
    'mushroom',
    'olive',
    'onion',
    'pepper',
    'pepperoni',
    'sweetcorn',
    'tomato'*/
];

@Component({
  selector: 'app-pizza-small-preview',
  templateUrl: './pizza-small-preview.component.html',
  styleUrls: ['./pizza-small-preview.component.scss']
})
export class PizzaSmallPreviewComponent {
  @Input() toppings = TOPPINGS
}
