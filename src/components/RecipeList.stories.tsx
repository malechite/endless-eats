import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { RecipeList } from './RecipeList';

export default {
  title: 'RecipeList',
  component: RecipeList,
} as Meta<typeof RecipeList>;

const Template: StoryFn<typeof RecipeList> = args => <RecipeList />;

export const Default = Template.bind({});
Default.args = {};
