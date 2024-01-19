import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Recipe } from '../types/recipe';
import { RecipeCard } from './RecipeCard';
import recipes from '../data/recipes.json';
import { DEFAULT_CARD_WIDTH } from '../styles/style-helpers';

export default {
  title: 'RecipeCard',
  component: RecipeCard,
} as Meta<typeof RecipeCard>;

const Template: StoryFn<typeof RecipeCard> = args => <RecipeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  recipe: recipes[0] as Recipe,
  width: DEFAULT_CARD_WIDTH,
};
