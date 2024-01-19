import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Icon, IconSize, IconType } from './Icon';

export default {
  title: 'Icon',
  component: Icon,
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: IconType.HEART_FILLED,
  size: IconSize.LARGE,
};
