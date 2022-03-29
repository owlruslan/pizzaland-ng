import { moduleMetadata, storiesOf } from '@storybook/angular';

import { InputModule } from './input.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
