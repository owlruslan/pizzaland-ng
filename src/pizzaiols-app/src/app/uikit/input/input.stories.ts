import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {moduleMetadata, storiesOf} from '@storybook/angular';

import {InputModule} from './input.module';

storiesOf('UI Kit / Input', module).addDecorator(
  moduleMetadata({
    imports: [
      InputModule,
      BrowserAnimationsModule,
    ],
  }),
).add('default', () => {
  return {
    template: `<uikit-ui-v1-input></uikit-ui-v1-input>`,
  };
});
