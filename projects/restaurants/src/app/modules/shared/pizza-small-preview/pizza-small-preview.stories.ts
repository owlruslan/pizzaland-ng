import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PizzaSmallPreviewModule} from '@app/modules/shared/pizza-small-preview/pizza-small-preview.module';

storiesOf('app.modules.shared.pizza-small-preview.PizzaSmallPreviewComponent', module)
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
