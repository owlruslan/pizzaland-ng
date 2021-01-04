import { moduleMetadata, storiesOf } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasketModule } from './basket.module';
import { BasketComponent } from './basket.component';

storiesOf('Restaurants / Modules / Basket', module).addDecorator(
  moduleMetadata({
    imports: [
      RouterTestingModule,
      BrowserAnimationsModule,
      BasketModule,
    ],
    providers: [
      provideMockStore(),
    ],
  }),
).add('default', () => {
  return {
    component: BasketComponent,
  };
});
