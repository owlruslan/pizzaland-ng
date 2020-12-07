import { moduleMetadata, storiesOf } from '@storybook/angular';

import { ButtonModule } from './button.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonType } from './button.component';

const type = ButtonType.SUCCESS;

storiesOf('app.ui.v1.button.ButtonComponent', module).addDecorator(
  moduleMetadata({
    imports: [
      ButtonModule,
      BrowserAnimationsModule,
    ],
  }),
).add('default', () => {
  return {
    template: `<uikit-ui-v1-button></uikit-ui-v1-button>`,
  };
}).add('success', () => {
  return {
    template: `<uikit-ui-v1-button [type]="type"></uikit-ui-v1-button>`,
    props: {
      type,
    },
  };
});
