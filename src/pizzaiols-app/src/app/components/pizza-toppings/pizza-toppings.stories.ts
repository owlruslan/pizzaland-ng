import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {PizzaToppingsModule} from './pizza-toppings.module';

storiesOf('Modules / Shared / Pizza Toppings', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        PizzaToppingsModule,
      ],
    }),
  )
  .add('default', () => {
    return {
      template: `
        <app-pizza-toppings></app-pizza-toppings>
      `
    };
  });
