import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IconButton, Search, Settings, Menu, X, Bell, User } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof IconButton> = {
    title: 'Components/IconButton',
    component: IconButton,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['solid', 'outline', 'ghost', 'glass'] },
        size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
        colorScheme: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error', 'neutral'] },
        isRound: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
    render: () => <IconButton icon={<Search />} aria-label="Search" />,
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px' }}>
            <IconButton variant="solid" icon={<Settings />} aria-label="Settings" />
            <IconButton variant="outline" icon={<Menu />} aria-label="Menu" />
            <IconButton variant="ghost" icon={<X />} aria-label="Close" />
            <IconButton variant="glass" icon={<Bell />} aria-label="Notifications" />
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <IconButton size="xs" icon={<Search />} aria-label="Search xs" />
            <IconButton size="sm" icon={<Search />} aria-label="Search sm" />
            <IconButton size="md" icon={<Search />} aria-label="Search md" />
            <IconButton size="lg" icon={<Search />} aria-label="Search lg" />
            <IconButton size="xl" icon={<Search />} aria-label="Search xl" />
        </div>
    ),
};

export const Round: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px' }}>
            <IconButton isRound icon={<Bell />} aria-label="Notifications" />
            <IconButton isRound colorScheme="success" icon={<User />} aria-label="Profile" />
            <IconButton isRound colorScheme="error" icon={<X />} aria-label="Delete" />
        </div>
    ),
};

export const Colors: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px' }}>
            <IconButton colorScheme="primary" icon={<Search />} aria-label="Primary" />
            <IconButton colorScheme="secondary" icon={<Search />} aria-label="Secondary" />
            <IconButton colorScheme="success" icon={<Search />} aria-label="Success" />
            <IconButton colorScheme="warning" icon={<Search />} aria-label="Warning" />
            <IconButton colorScheme="error" icon={<Search />} aria-label="Error" />
        </div>
    ),
};
