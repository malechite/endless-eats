import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TagBox } from './TagBox';
import recipes from '../data/recipes.json';

export default {
  title: 'TagBox',
  component: TagBox,
} as Meta<typeof TagBox>;

const Template: StoryFn<typeof TagBox> = args => <TagBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: recipes[0].tags,
};
