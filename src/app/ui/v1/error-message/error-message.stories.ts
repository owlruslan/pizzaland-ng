import {moduleMetadata, storiesOf} from '@storybook/angular';

import {ErrorMessageModule} from './error-message.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {of} from 'rxjs';
import mockErrorResponse from '@app/mocks/error/error-response.mock';

const errorResponse$ = of(mockErrorResponse);

storiesOf('app.ui.v1.ErrorMessageComponent', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        ErrorMessageModule,
        BrowserAnimationsModule
      ],
    }),
  )
  .add('default', () => {
    return {
      template: `<app-ui-error-message [errorResponse$]="errorResponse$"></app-ui-error-message>`,
      props: {
        errorResponse$,
      },
    };
  });
