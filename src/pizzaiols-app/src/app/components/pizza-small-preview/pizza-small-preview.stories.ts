import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {PizzaSmallPreviewModule} from './pizza-small-preview.module';

storiesOf('Modules / Shared / PizzaSmallPreview', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        PizzaSmallPreviewModule,
      ],
    }),
  )
  .add('default', () => {
    return {
      template: `
        <div style="position: relative; max-width: 240px;width: 240px;height: 200px;">
            <app-pizza-small-preview></app-pizza-small-preview>
        </div>
      `
    };
  });
