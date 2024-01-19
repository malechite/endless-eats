import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { FavoriteButton } from './FavoriteButton';

export default {
  title: 'FavoriteButton',
  component: FavoriteButton,
} as Meta<typeof FavoriteButton>;

const Template: StoryFn<typeof FavoriteButton> = args => <FavoriteButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  favorite: true,
};
