import { moduleMetadata, storiesOf } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth.module';
import { AuthComponent } from './auth.component';

storiesOf('Restaurants / Modules / Auth', module).addDecorator(
  moduleMetadata({
    imports: [
      RouterTestingModule,
      BrowserAnimationsModule,
      AuthModule,
    ],
    providers: [
      provideMockStore(),
    ],
  }),
).add('default', () => {
  return {
    component: AuthComponent,
  };
});
