import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Spinner> = {
    title: 'Components/Spinner',
    component: Spinner,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
        colorScheme: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error', 'neutral'] },
    },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
    args: {},
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Spinner size="xs" />
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="xl" />
        </div>
    ),
};

export const ColorSchemes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '24px' }}>
            <Spinner colorScheme="primary" />
            <Spinner colorScheme="secondary" />
            <Spinner colorScheme="success" />
            <Spinner colorScheme="warning" />
            <Spinner colorScheme="error" />
        </div>
    ),
};
