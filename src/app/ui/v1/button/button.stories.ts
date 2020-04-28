import {moduleMetadata, storiesOf} from '@storybook/angular';

import {ButtonModule} from './button.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

storiesOf('app.ui.v1.button.ButtonComponent', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        ButtonModule,
        BrowserAnimationsModule
      ],
    }),
  )
  .add('default', () => {
    return {
      template: `<app-ui-v1-button></app-ui-v1-button>`,
    };
  });
