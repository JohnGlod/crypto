import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UIHtag } from './UIHtag';
import { HtagProps } from './UIHtag.props';

export default {
  title: 'Typography/UIHtag',
  component: UIHtag,
} as ComponentMeta<typeof UIHtag>;

const Template: ComponentStory<typeof UIHtag> = (args: HtagProps) => (
  <UIHtag {...args} />
);

export const H1 = Template.bind({});
H1.args = {
  tag: 'h1' ,
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  className: '',
};

export const H2 = Template.bind({});
H2.args = {
  tag: 'h2' ,
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  className: '',
};

export const H3 = Template.bind({});
H3.args = {
  tag: 'h3' ,
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  className: '',
};
