import { moduleMetadata, storiesOf } from '@storybook/angular';
import { SearchBarModule } from '@app/modules/shared/search-bar/search-bar.module';
import { SearchBarComponent } from '@app/modules/shared/search-bar/search-bar.component';
import { SearchService } from '@app/services/search/search.service';
import { SearchMockService } from '@app/services/search/search-mock.service';

storiesOf('app/shared/search-bar', module)
  .addDecorator(
    moduleMetadata({
      imports: [
        SearchBarModule,
      ],
      providers: [
        {provide: SearchService, useClass: SearchMockService}
      ]
    }),
  )
  .add('default', () => {
    return {
      component: SearchBarComponent
    };
  });
