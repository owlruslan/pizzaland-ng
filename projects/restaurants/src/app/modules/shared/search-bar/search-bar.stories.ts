import { moduleMetadata, storiesOf } from '@storybook/angular';
import { SearchMockService } from '../../../services/search/search-mock.service';
import { SearchBarComponent } from './search-bar.component';
import { SearchService } from '../../../services/search/search.service';
import { SearchBarModule } from './search-bar.module';


storiesOf('Restaurants / Modules / Shared / Search Bar', module)
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
