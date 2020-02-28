import {addDecorator, addParameters, configure} from '@storybook/angular'; // <- or your storybook framework
import '../src/styles.scss';

import {withCssResources} from '@storybook/addon-cssresources';

import 'hammerjs';

addParameters({
  backgrounds: [{
      name: 'white',
      value: '#ffffff',
      default: true
    },
    {
      name: 'dark',
      value: 'grey'
    },
  ],
});

addDecorator(withCssResources);

// automatically import all files ending in *.stories.ts
configure(require.context('../src', true, /\.stories\.ts$/), module);
