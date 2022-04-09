import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {NavbarModule} from './navbar.module';

storiesOf('Modules / Client / Shared / Navbar', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        NavbarModule,
      ],
      providers: [
        provideMockStore()
      ]
    }),
  )
  .add('default', () => {
    return {
      template: `<app-navbar></app-navbar>`
    };
  });
