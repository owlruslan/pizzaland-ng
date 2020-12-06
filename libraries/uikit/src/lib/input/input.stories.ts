import { moduleMetadata, storiesOf } from '@storybook/angular';

import { InputModule } from './input.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

storiesOf('app.ui.v1.input.InputComponent', module).addDecorator(
  moduleMetadata({
    imports: [
      InputModule,
      BrowserAnimationsModule,
    ],
  }),
).add('default', () => {
  return {
    template: `<app-ui-v1-input></app-ui-v1-input>`,
  };
});
