import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ToastProvider, useToast, Button } from '@xdev-asia/x-ui-react';

// Create a wrapper component for Storybook
const ToastWrapper = ({ children }: { children: React.ReactNode }) => (
    <ToastProvider>{children}</ToastProvider>
);

const meta: Meta = {
    title: 'Components/Toast',
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <ToastWrapper>
                <Story />
            </ToastWrapper>
        ),
    ],
};

export default meta;
type Story = StoryObj;

const ToastDemo = () => {
    const { toast } = useToast();

    return (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button onClick={() => toast({ title: 'Default toast', description: 'This is a default notification' })}>
                Default
            </Button>
            <Button colorScheme="success" onClick={() => toast({ title: 'Success!', description: 'Action completed', status: 'success' })}>
                Success
            </Button>
            <Button colorScheme="error" onClick={() => toast({ title: 'Error', description: 'Something went wrong', status: 'error' })}>
                Error
            </Button>
            <Button colorScheme="warning" onClick={() => toast({ title: 'Warning', description: 'Please review', status: 'warning' })}>
                Warning
            </Button>
        </div>
    );
};

export const Default: Story = {
    render: () => <ToastDemo />,
};

const ToastPositions = () => {
    const { toast } = useToast();

    return (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="outline" onClick={() => toast({ title: 'Top Right', description: 'Default position' })}>
                Show Toast
            </Button>
        </div>
    );
};

export const Positions: Story = {
    render: () => <ToastPositions />,
};
