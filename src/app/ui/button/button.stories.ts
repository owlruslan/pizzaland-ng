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
    template: `<ui-button></ui-button>`,
  };
}).add('success', () => {
  return {
    template: `<ui-button [type]="type"></ui-button>`,
    props: {
      type,
    },
  };
});
