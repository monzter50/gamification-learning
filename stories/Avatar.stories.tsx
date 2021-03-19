// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { Avatar,AvatarProps } from './Avatar';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Avatar',
  component: Avatar,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Avatar',
};