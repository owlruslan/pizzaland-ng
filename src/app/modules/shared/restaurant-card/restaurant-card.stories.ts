import { Meta, Story } from '@storybook/angular/types-6-0';

import { RestaurantCardComponent } from './restaurant-card.component';

export default {
  title: 'Modules / Shared / Restaurant Card',
  component: RestaurantCardComponent,
} as Meta;

const Template: Story<RestaurantCardComponent> = (args: RestaurantCardComponent) => ({
  component: RestaurantCardComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
};
