import type { Meta, StoryObj } from '@storybook/react';
import { Title } from '../components/Title';

const meta: Meta<typeof Title> = {
    title: 'DEMO/Title',
    component: Title,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {};