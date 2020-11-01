import { moduleMetadata, storiesOf } from '@storybook/angular'
import { SearchBarModule } from '@app/modules/shared/search-bar/search-bar.module'
import { SearchBarComponent } from '@app/modules/shared/search-bar/search-bar.component'

storiesOf('app/shared/search-bar', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        SearchBarModule,
      ],
    }),
  )
  .add('default', () => {
    return {
      component: SearchBarComponent
    };
  });
