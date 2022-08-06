import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UISearch } from './UISearch';
import { SearchProps } from './UISearch.props';

export default {
  title: 'UI-Kit/UISearch',
  component: UISearch,
} as ComponentMeta<typeof UISearch>;

const Template: ComponentStory<typeof UISearch> = (args: SearchProps) => (
  <UISearch {...args} />
);

export const normal = Template.bind({});

normal.args = {
  theme: 'light',
};

export const dark = Template.bind({});

dark.args = {
  theme: 'dark',
};
