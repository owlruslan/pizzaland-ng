import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarModule} from '@app/modules/shared/navbar/navbar.module';

storiesOf('app.modules.shared.navbar.NavbarComponent', module)
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
