import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeProvider } from '@xdev-asia/x-ui-native';

const meta: Meta<typeof Button> = {
    title: 'Native/Button',
    component: Button,
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div style={{ padding: 20 }}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['solid', 'outline', 'ghost', 'glass'],
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        colorScheme: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'warning', 'error', 'neutral'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'Native Button',
        variant: 'solid',
        colorScheme: 'primary',
        size: 'md',
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="solid" colorScheme="primary">Solid</Button>
            <Button variant="outline" colorScheme="primary">Outline</Button>
            <Button variant="ghost" colorScheme="primary">Ghost</Button>
            <Button variant="glass" colorScheme="primary">Glass</Button>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <Button size="xs">XS</Button>
            <Button size="sm">SM</Button>
            <Button size="md">MD</Button>
            <Button size="lg">LG</Button>
            <Button size="xl">XL</Button>
        </div>
    ),
};

export const ColorSchemes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button colorScheme="primary">Primary</Button>
            <Button colorScheme="secondary">Secondary</Button>
            <Button colorScheme="success">Success</Button>
            <Button colorScheme="warning">Warning</Button>
            <Button colorScheme="error">Error</Button>
            <Button colorScheme="neutral">Neutral</Button>
        </div>
    ),
};

export const Loading: Story = {
    args: {
        children: 'Loading',
        isLoading: true,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        isDisabled: true,
    },
};

export const FullWidth: Story = {
    args: {
        children: 'Full Width Button',
        fullWidth: true,
    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div style={{ width: 300, padding: 20 }}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
};
