import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PizzaToppingsModule} from '@app/modules/shared/pizza-toppings/pizza-toppings.module';

storiesOf('app.modules.shared.pizza-toppings.PizzaToppingsComponent', module)
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
