import { moduleMetadata, storiesOf } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestaurantModule } from './restaurant.module';
import { RestaurantComponent } from './restaurant.component';

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
