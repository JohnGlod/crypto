import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UIDialog } from './UIDialog';
import { DialogProps } from './UIDialog.props';

export default {
  title: 'UI-Kit/UIPtag',
  component: UIDialog,
} as ComponentMeta<typeof UIDialog>;

const Template: ComponentStory<typeof UIDialog> = (args: DialogProps) => (
  <UIDialog {...args} />
);