import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RestaurantComponent} from './restaurant.component';
import {RestaurantModule} from './restaurant.module';

storiesOf('Modules / Pizzas', module).addDecorator(
  moduleMetadata({
    imports: [
      RouterTestingModule,
      BrowserAnimationsModule,
      RestaurantModule,
    ],
    providers: [
      provideMockStore(),
    ],
  }),
).add('default', () => {
  return {
    component: RestaurantComponent,
  };
});
