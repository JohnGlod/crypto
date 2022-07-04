import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UIButton } from './UIButton';
import { ButtonProps } from './UIButton.props';

export default {
  title: 'UI-Kit/UIButton',
  component: UIButton,
} as ComponentMeta<typeof UIButton>;

const Template: ComponentStory<typeof UIButton> = (args: ButtonProps) => (
  <UIButton {...args} />
);

export const Medium = Template.bind({});
Medium.args = {
  type: 'button',
  children: 'Click me!',
  cName: '',
};

export const Small = Template.bind({});
Small.args = {
  type: 'button',
  children: 'Click me!',
  cName: ''
};