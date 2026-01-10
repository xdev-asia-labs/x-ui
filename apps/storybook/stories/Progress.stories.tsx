import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Progress> = {
    title: 'Components/Progress',
    component: Progress,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        value: { control: { type: 'range', min: 0, max: 100 } },
        colorScheme: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error'] },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        showLabel: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
    args: { value: 60, style: { width: '300px' } },
};

export const WithLabel: Story = {
    args: { value: 75, showLabel: true, style: { width: '300px' } },
};

export const ColorSchemes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
            <Progress value={80} colorScheme="primary" />
            <Progress value={60} colorScheme="success" />
            <Progress value={40} colorScheme="warning" />
            <Progress value={20} colorScheme="error" />
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
            <Progress value={50} size="sm" />
            <Progress value={50} size="md" />
            <Progress value={50} size="lg" />
        </div>
    ),
};
