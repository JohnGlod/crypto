import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UICard } from './UICard';
import { CardProps } from './UICard.props';

export default {
  title: 'UI-kit/UICard',
  component: UICard,
} as ComponentMeta<typeof UICard>;

const Template: ComponentStory<typeof UICard> = (args: CardProps) => (
  <UICard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  loading: true,
  imageSrc:
    'https://media0.giphy.com/media/kd9BlRovbPOykLBMqX/giphy.gif?cid=ecf05e475tksax6oc8xon3ri35yhwdxll1zb3o43xtav1z1x&rid=giphy.gif&ct=g',
  name: 'Leonardo Dicaprio Reaction GIF ',
};
