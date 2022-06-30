import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UIAvatar } from './UIAvatar';
import { AvatarProps } from './UIAvatar.props';

import { TEST_AVATAR_SRC } from '../../../utils/constants';

export default {
  title: 'UI-Kit/UIAvatar',
  component: UIAvatar,
} as ComponentMeta<typeof UIAvatar>;

const Template: ComponentStory<typeof UIAvatar> = (args: AvatarProps) => (
  <UIAvatar {...args} />
);

export const Medium = Template.bind({});
Medium.args = {
  avatarSize: 'medium',
  avatarAlt: 'Medium size',
  avatarSrc: TEST_AVATAR_SRC,
};

export const Small = Template.bind({});
Small.args = {
  avatarSize: 'small',
  avatarAlt: 'Small size',
  avatarSrc: TEST_AVATAR_SRC,
};
