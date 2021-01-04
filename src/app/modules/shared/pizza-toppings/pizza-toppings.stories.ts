import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PizzaToppingsModule } from './pizza-toppings.module';

storiesOf('Restaurants / Modules / Shared / Pizza Toppings', module)
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
