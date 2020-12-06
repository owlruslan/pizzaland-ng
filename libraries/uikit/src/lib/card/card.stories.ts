import { moduleMetadata, storiesOf } from '@storybook/angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from './card.module';

storiesOf('app.ui.Card', module).addDecorator(
  moduleMetadata({
    imports: [
      BrowserAnimationsModule,
      CardModule,
    ],
  }),
).add('default', () => {
  return {
    template: `<app-card/>`,
  };
});
