import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IconButton, SearchIcon, MenuIcon, XIcon } from '@xdev-asia/x-ui-react';

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
    render: () => <IconButton icon={<SearchIcon />} aria-label="Search" />,
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px' }}>
            <IconButton variant="solid" icon={<SearchIcon />} aria-label="Search" />
            <IconButton variant="outline" icon={<MenuIcon />} aria-label="Menu" />
            <IconButton variant="ghost" icon={<XIcon />} aria-label="Close" />
            <IconButton variant="glass" icon={<SearchIcon />} aria-label="Search" />
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <IconButton size="xs" icon={<SearchIcon />} aria-label="Search xs" />
            <IconButton size="sm" icon={<SearchIcon />} aria-label="Search sm" />
            <IconButton size="md" icon={<SearchIcon />} aria-label="Search md" />
            <IconButton size="lg" icon={<SearchIcon />} aria-label="Search lg" />
            <IconButton size="xl" icon={<SearchIcon />} aria-label="Search xl" />
        </div>
    ),
};

export const Round: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px' }}>
            <IconButton isRound icon={<SearchIcon />} aria-label="Search" />
            <IconButton isRound colorScheme="success" icon={<MenuIcon />} aria-label="Menu" />
            <IconButton isRound colorScheme="error" icon={<XIcon />} aria-label="Delete" />
        </div>
    ),
};

export const Colors: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px' }}>
            <IconButton colorScheme="primary" icon={<SearchIcon />} aria-label="Primary" />
            <IconButton colorScheme="secondary" icon={<SearchIcon />} aria-label="Secondary" />
            <IconButton colorScheme="success" icon={<SearchIcon />} aria-label="Success" />
            <IconButton colorScheme="warning" icon={<SearchIcon />} aria-label="Warning" />
            <IconButton colorScheme="error" icon={<SearchIcon />} aria-label="Error" />
        </div>
    ),
};
