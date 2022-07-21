import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UIPtag } from './UIPtag';
import { PtagProps } from './UIPtag.props';

export default {
  title: 'Typography/UIPtag',
  component: UIPtag,
} as ComponentMeta<typeof UIPtag>;

const Template: ComponentStory<typeof UIPtag> = (args: PtagProps) => (
  <UIPtag {...args} />
);

export const DEFAULT = Template.bind({});
DEFAULT.args = {
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  className: '',
};
