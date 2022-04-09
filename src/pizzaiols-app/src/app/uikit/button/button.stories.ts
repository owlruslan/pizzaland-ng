import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {ButtonType} from './button.component';

import {ButtonModule} from './button.module';

const type = ButtonType.SUCCESS;

storiesOf('UI Kit / Button', module).addDecorator(
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
