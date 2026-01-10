import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AlertDialog, Button } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof AlertDialog> = {
    title: 'Components/AlertDialog',
    component: AlertDialog,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

const AlertDialogDemo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button colorScheme="error" onClick={() => setIsOpen(true)}>
                Delete Item
            </Button>
            <AlertDialog
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onConfirm={() => {
                    console.log('Confirmed!');
                    setIsOpen(false);
                }}
                title="Delete Confirmation"
                description="Are you sure you want to delete this item? This action cannot be undone."
                confirmText="Delete"
                cancelText="Cancel"
                variant="danger"
            />
        </>
    );
};

export const Default: Story = {
    render: () => <AlertDialogDemo />,
};

const WarningDialogDemo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button colorScheme="warning" onClick={() => setIsOpen(true)}>
                Reset Settings
            </Button>
            <AlertDialog
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onConfirm={() => {
                    console.log('Reset confirmed!');
                    setIsOpen(false);
                }}
                title="⚠️ Reset All Settings"
                description="This will reset all your preferences to default values. Are you sure?"
                confirmText="Reset"
                cancelText="Keep Settings"
                variant="warning"
            />
        </>
    );
};

export const Warning: Story = {
    render: () => <WarningDialogDemo />,
};

const InfoDialogDemo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>
                Learn More
            </Button>
            <AlertDialog
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onConfirm={() => setIsOpen(false)}
                title="Information"
                description="This feature allows you to customize your experience. Would you like to proceed?"
                confirmText="Proceed"
                cancelText="Maybe Later"
                variant="info"
            />
        </>
    );
};

export const Info: Story = {
    render: () => <InfoDialogDemo />,
};
