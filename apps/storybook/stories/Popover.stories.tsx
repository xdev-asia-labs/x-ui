import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Popover, PopoverHeader, PopoverBody, PopoverFooter, Button } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Popover> = {
    title: 'Components/Popover',
    component: Popover,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
    render: () => (
        <Popover trigger={<Button>Click me</Button>}>
            <PopoverHeader>Popover Title</PopoverHeader>
            <PopoverBody>
                This is the popover content. It can contain any elements.
            </PopoverBody>
        </Popover>
    ),
};

export const WithFooter: Story = {
    render: () => (
        <Popover trigger={<Button variant="outline">With Actions</Button>}>
            <PopoverHeader>Confirm Action</PopoverHeader>
            <PopoverBody>
                Are you sure you want to proceed?
            </PopoverBody>
            <PopoverFooter>
                <Button size="sm" variant="ghost">Cancel</Button>
                <Button size="sm">Confirm</Button>
            </PopoverFooter>
        </Popover>
    ),
};

export const Placements: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', padding: '80px' }}>
            <Popover placement="top" trigger={<Button variant="outline">Top</Button>}>
                <PopoverBody>Top placement</PopoverBody>
            </Popover>
            <Popover placement="bottom" trigger={<Button variant="outline">Bottom</Button>}>
                <PopoverBody>Bottom placement</PopoverBody>
            </Popover>
            <Popover placement="left" trigger={<Button variant="outline">Left</Button>}>
                <PopoverBody>Left placement</PopoverBody>
            </Popover>
            <Popover placement="right" trigger={<Button variant="outline">Right</Button>}>
                <PopoverBody>Right placement</PopoverBody>
            </Popover>
        </div>
    ),
};
