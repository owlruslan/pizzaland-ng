import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PizzasComponent} from '@app/modules/pizzas/pizzas.component';
import {BasketComponent} from '@app/modules/basket/basket.component';
import {BasketModule} from '@app/modules/basket/basket.module';

storiesOf('app.modules.basket.BasketComponent', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        BasketModule,
      ],
      providers: [
        provideMockStore()
      ]
    }),
  )
  .add('default', () => {
    return {
      component: BasketComponent
    };
  });
