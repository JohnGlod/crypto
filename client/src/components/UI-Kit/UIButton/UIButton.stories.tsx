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

export const Normal = Template.bind({});
Normal.args = {
  rounded :'rounded',
  size: 'normal',
  children: 'Click me!!!',
  type: 'button',
  className: '',
  disabled : false,
};

export const Full = Template.bind({});
Full.args = {
  rounded :'rounded',
  size: 'full',
  children: 'Click me!!!',
  type: 'button',
  className: '',
  disabled : false,
};

export const Primary = Template.bind({});
Primary.args = {
  rounded :'rounded',
  size: 'normal',
  children: 'Click me!!!',
  type: 'button',
  className: '',
  appearance: 'primary',
  disabled : false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  rounded :'rounded',
  size: 'normal',
  children: 'Click me!!!',
  type: 'button',
  className: '',
  appearance: 'secondary',
  disabled : false,
};


export const disabled = Template.bind({});
disabled.args = {
  rounded :'rounded',
  size: 'normal',
  children: 'Click me!!!',
  type: 'button',
  className: '',
  disabled : true,
};
