import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const PIZZA_TOPPINGS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PizzaToppingsComponent),
  multi: true
};

@Component({
  selector: 'app-pizza-toppings',
  providers: [PIZZA_TOPPINGS_ACCESSOR],
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.scss'],
})
export class PizzaToppingsComponent implements ControlValueAccessor {
  toppings = [
    'anchovy', 'bacon', 'basil', 'chili', 'mozzarella', 'mushroom',
    'olive', 'onion', 'pepper', 'pepperoni', 'sweetcorn', 'tomato'
  ];

  value: string | string[] = [];
  focused: string | undefined;

  onTouch: (() => void | undefined) | undefined;
  onModelChange: (() => void | undefined) | undefined;

  registerOnChange(fn: () => void | undefined): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: () => void | undefined): void {
    this.onTouch = fn;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  updateTopping(topping: string): void {
    if (this.value.includes(topping)) {
      if (typeof this.value !== 'string') {
        this.value = this.value.filter((x: string) => topping !== x);
      }
    } else {
      // @ts-ignore
      this.value = this.value.concat([topping]);
    }
    // @ts-ignore
    this.onModelChange(this.value);
  }

  onBlur(value: string): void {
    this.focused = '';
  }

  onFocus(value: string): void {
    this.focused = value;
    // @ts-ignore
    this.onTouch();
  }
}
