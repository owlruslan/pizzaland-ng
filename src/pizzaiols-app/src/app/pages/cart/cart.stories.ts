import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {CartComponent} from './cart.component';
import {CartModule} from './cart.module';

storiesOf('Modules / Cart', module).addDecorator(
  moduleMetadata({
    imports: [
      RouterTestingModule,
      BrowserAnimationsModule,
      CartModule,
    ],
    providers: [
      provideMockStore(),
    ],
  }),
).add('default', () => {
  return {
    component: CartComponent,
  };
});
