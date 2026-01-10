import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Dropdown, DropdownItem, DropdownSeparator, DropdownLabel, Button } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Dropdown> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    render: () => (
        <Dropdown trigger={<Button>Open Menu</Button>}>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Help</DropdownItem>
            <DropdownSeparator />
            <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <Dropdown trigger={<Button variant="outline">Actions</Button>}>
            <DropdownLabel>Edit</DropdownLabel>
            <DropdownItem icon={<span>✏️</span>}>Edit</DropdownItem>
            <DropdownItem icon={<span>📋</span>}>Duplicate</DropdownItem>
            <DropdownItem icon={<span>📁</span>}>Archive</DropdownItem>
            <DropdownSeparator />
            <DropdownItem isDisabled icon={<span>🔒</span>}>Locked</DropdownItem>
            <DropdownItem isDestructive icon={<span>🗑️</span>}>Delete</DropdownItem>
        </Dropdown>
    ),
};

export const Aligned: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px' }}>
            <Dropdown trigger={<Button variant="ghost">Start</Button>} align="start">
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
            </Dropdown>
            <Dropdown trigger={<Button variant="ghost">Center</Button>} align="center">
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
            </Dropdown>
            <Dropdown trigger={<Button variant="ghost">End</Button>} align="end">
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
            </Dropdown>
        </div>
    ),
};
