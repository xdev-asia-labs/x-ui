import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['solid', 'outline', 'ghost', 'glass', 'link'],
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        colorScheme: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'warning', 'error', 'neutral'],
        },
        isDisabled: { control: 'boolean' },
        isLoading: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Button',
        variant: 'solid',
        size: 'md',
        colorScheme: 'primary',
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="solid">Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="glass">Glass</Button>
            <Button variant="link">Link</Button>
        </div>
    ),
};

export const ColorSchemes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Button colorScheme="primary">Primary</Button>
            <Button colorScheme="secondary">Secondary</Button>
            <Button colorScheme="success">Success</Button>
            <Button colorScheme="warning">Warning</Button>
            <Button colorScheme="error">Error</Button>
            <Button colorScheme="neutral">Neutral</Button>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '12px' }}>
            <Button>Normal</Button>
            <Button isDisabled>Disabled</Button>
            <Button isLoading>Loading</Button>
        </div>
    ),
};

export const FullWidth: Story = {
    render: () => (
        <div style={{ width: '300px' }}>
            <Button fullWidth>Full Width Button</Button>
        </div>
    ),
};
