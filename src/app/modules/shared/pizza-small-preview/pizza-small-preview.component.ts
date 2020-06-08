import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pizza-small-preview',
  templateUrl: './pizza-small-preview.component.html',
  styleUrls: ['./pizza-small-preview.component.scss']
})
export class PizzaSmallPreviewComponent implements OnInit {
  @Input()
  toppings = [
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
