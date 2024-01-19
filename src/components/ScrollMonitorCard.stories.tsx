import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ScrollMonitorCard } from './ScrollMonitorCard';
import { DEFAULT_CARD_WIDTH } from '../styles/style-helpers';

export default {
  title: 'ScrollMonitorCard',
  component: ScrollMonitorCard,
} as Meta<typeof ScrollMonitorCard>;

const Template: StoryFn<typeof ScrollMonitorCard> = args => <ScrollMonitorCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLoading: true,
  width: DEFAULT_CARD_WIDTH,
  loadFn: () => {},
};
