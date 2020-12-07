import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PizzaSmallPreviewModule } from './pizza-small-preview.module';

storiesOf('Restaurants / Modules / Shared / PizzaSmallPreview', module)
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
            <restaurants-pizza-small-preview></restaurants-pizza-small-preview>
        </div>
      `
    };
  });
