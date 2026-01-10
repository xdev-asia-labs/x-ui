import type { Meta, StoryObj } from '@storybook/react';
import { Drawer, DrawerHeader, DrawerBody, DrawerFooter, Button } from '@xdev-asia/x-ui-react';
import { useState } from 'react';

const meta: Meta<typeof Drawer> = {
    title: 'Components/Drawer',
    component: Drawer,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        placement: { control: 'select', options: ['left', 'right', 'top', 'bottom'] },
        size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'] },
    },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const DrawerDemo = ({ placement = 'right', size = 'md' }: { placement?: string; size?: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open {placement} Drawer</Button>
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} placement={placement as any} size={size as any}>
                <DrawerHeader>Drawer Title</DrawerHeader>
                <DrawerBody>
                    <p>This is the drawer content. It slides in from the {placement}.</p>
                </DrawerBody>
                <DrawerFooter>
                    <Button variant="ghost" onClick={() => setIsOpen(false)}>Close</Button>
                    <Button onClick={() => setIsOpen(false)}>Save</Button>
                </DrawerFooter>
            </Drawer>
        </>
    );
};

export const Default: Story = {
    render: () => <DrawerDemo />,
};

export const Placements: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <DrawerDemo placement="left" />
            <DrawerDemo placement="right" />
            <DrawerDemo placement="top" />
            <DrawerDemo placement="bottom" />
        </div>
    ),
};
