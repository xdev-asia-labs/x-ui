import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@xdev-asia/x-ui-react';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'] },
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalDemo = ({ size = 'md' }: { size?: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={size as any}>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalBody>
                    <p>This is the modal content. You can put any content here.</p>
                </ModalBody>
                <ModalFooter>
                    <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button onClick={() => setIsOpen(false)}>Confirm</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export const Default: Story = {
    render: () => <ModalDemo />,
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px' }}>
            <ModalDemo size="sm" />
            <ModalDemo size="md" />
            <ModalDemo size="lg" />
        </div>
    ),
};
