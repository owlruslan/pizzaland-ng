import {moduleMetadata, storiesOf} from '@storybook/angular';

import {ButtonModule} from './button.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonType} from '@app/ui/button/button.component';

const type = ButtonType.SUCCESS;

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
  })
  .add('success', () => {
    return {
      template: `<app-ui-v1-button [type]="type"></app-ui-v1-button>`,
      props: {
        type
      }
    };
  });
