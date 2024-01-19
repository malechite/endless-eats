import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Tag } from './Tag';

export default {
  title: 'Tag',
  component: Tag,
} as Meta<typeof Tag>;

const Template: StoryFn<typeof Tag> = args => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Tag',
};
