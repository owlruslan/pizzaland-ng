import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PizzaCardModule} from '@app/modules/shared/pizza-card/pizza-card.module';

storiesOf('app.modules.shared.pizza-card.PizzaCardComponent', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        PizzaCardModule,
      ],
      providers: [
        provideMockStore()
      ]
    }),
  )
  .add('default', () => {
    return {
      template: `<app-pizza-card></app-pizza-card>`
    };
  });
