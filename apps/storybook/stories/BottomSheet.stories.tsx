import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { BottomSheet, Button } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof BottomSheet> = {
    title: 'Overlays/BottomSheet',
    component: BottomSheet,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

const BottomSheetDemo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Bottom Sheet</Button>
            <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} title="Select an option">
                <div style={{ padding: '16px' }}>
                    <p style={{ margin: '0 0 16px', color: 'rgb(var(--x-mutedForeground))' }}>
                        This is a bottom sheet that slides up from the bottom of the screen.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Button variant="ghost" fullWidth onClick={() => setIsOpen(false)}>Option 1</Button>
                        <Button variant="ghost" fullWidth onClick={() => setIsOpen(false)}>Option 2</Button>
                        <Button variant="ghost" fullWidth onClick={() => setIsOpen(false)}>Option 3</Button>
                    </div>
                </div>
            </BottomSheet>
        </>
    );
};

export const Default: Story = {
    render: () => <BottomSheetDemo />,
};

const BottomSheetWithSnaps = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open with Snap Points</Button>
            <BottomSheet
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Draggable Sheet"
                snapPoints={[0.25, 0.5, 0.9]}
            >
                <div style={{ padding: '16px', minHeight: '300px' }}>
                    <p style={{ color: 'rgb(var(--x-mutedForeground))' }}>
                        Drag the handle to resize. This sheet has snap points at 25%, 50%, and 90%.
                    </p>
                </div>
            </BottomSheet>
        </>
    );
};

export const WithSnapPoints: Story = {
    render: () => <BottomSheetWithSnaps />,
};
