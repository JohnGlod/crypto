import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UILogo } from './UILogo';
import { LogoProps } from './UILogo.props';

export default {
  title: 'UI-Kit/UILogo',
  component: UILogo,
} as ComponentMeta<typeof UILogo>;

const Template: ComponentStory<typeof UILogo> = (args: LogoProps) => (
  <UILogo {...args} />
);

export const Dark = Template.bind({});
Dark.args = {
  theme: 'dark',
  logoClick: () => {
    alert('Logo click!');
  }, 
};

export const Light = Template.bind({});
Light.args = {
  theme: 'light',
  logoClick: () => {
    alert('Logo click!');
  }, 
};
