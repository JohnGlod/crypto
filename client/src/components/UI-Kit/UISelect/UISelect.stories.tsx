import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UISelect } from './UISelect';

import { SelectProps } from './UISelect.props';

export default {
  title: 'UI-Kit/UISelect',
  component: UISelect,
} as ComponentMeta<typeof UISelect>;

const Template: ComponentStory<typeof UISelect> = (args: SelectProps) => (
  <UISelect {...args} />
);

const options = [
  {
    value: 'all',
    key: '1',
    text: 'All',
  },
  { value: 'listed', key: '2', text: 'Recently Listed' },
  { value: 'visited', key: '3', text: ' Most Visited' },
];

export const Default = Template.bind({});
Default.args = {
  className: '',
  options: options,
  placeholder: 'Placeholder',
  name: 'name',
  onChange: () => {},
  size: 'normal',
};

