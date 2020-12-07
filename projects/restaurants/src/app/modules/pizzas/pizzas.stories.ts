import { moduleMetadata, storiesOf } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzasModule } from './pizzas.module';
import { PizzasComponent } from './pizzas.component';

storiesOf('Restaurants / Modules / Pizzas', module).addDecorator(
  moduleMetadata({
    imports: [
      RouterTestingModule,
      BrowserAnimationsModule,
      PizzasModule,
    ],
    providers: [
      provideMockStore(),
    ],
  }),
).add('default', () => {
  return {
    component: PizzasComponent,
  };
});
