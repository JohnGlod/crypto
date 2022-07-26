import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UIInfo } from './UIInfo';
import { InfoProps } from './UIInfo.props';

export default {
  title: 'UI-kit/UIInfo',
  component: UIInfo,
} as ComponentMeta<typeof UIInfo>;

const Template: ComponentStory<typeof UIInfo> = (args: InfoProps) => (
  <UIInfo {...args} />
);

export const normal = Template.bind({});
normal.args = {
  infoText:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur labore nisi numquam? Veritatis itaque laudantium tenetur aut nihil, quaerat numquam adipisci, quo eligendi velit culpa nam quae perspiciatis minus.',
  infoTitle: 'Lorem ipsum dolor sit amet.',
};
