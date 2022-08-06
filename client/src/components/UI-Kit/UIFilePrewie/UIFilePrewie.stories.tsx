import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UIFilePrewie } from './UIFilePrewie';
import { FilePrewieProps } from './UIFilePrewie.props';

import image from './media/42232c8e3e7a313f429b3e3867781e47.jpg'
import video from './media/stock-footage-aerial-footage-showing-a-forested-hill-in-the-foreground-moving-left-and-another-in-the-background.webm'

export default {
  title: 'UI-kit/UIFilePrewie',
  component: UIFilePrewie,
} as ComponentMeta<typeof UIFilePrewie>;

const Template: ComponentStory<typeof UIFilePrewie> = (args: FilePrewieProps) => (
  <UIFilePrewie {...args} />
);

export const Image = Template.bind({});
Image.args = {
  fileName: 'Default image.jpg' ,
  fileSrc: image,
  fileType: 'image/jpg',
} 

export const Video = Template.bind({});
Video.args = {
  fileName: 'Default stock-video webm',
  fileSrc: video,
  fileType: 'video/webm',
}
