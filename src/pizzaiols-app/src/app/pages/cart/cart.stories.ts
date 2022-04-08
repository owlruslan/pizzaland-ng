import { moduleMetadata, storiesOf } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartModule } from './cart.module';
import { CartComponent } from './cart.component';

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
