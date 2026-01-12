import type { Meta, StoryObj } from '@storybook/react';
import { Badge, ThemeProvider } from '@xdev-asia/x-ui-native';

const meta: Meta<typeof Badge> = {
    title: 'Native/Badge',
    component: Badge,
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
            options: ['solid', 'subtle', 'outline'],
        },
        colorScheme: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'warning', 'error', 'neutral'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        children: 'Badge',
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Badge variant="solid">Solid</Badge>
            <Badge variant="subtle">Subtle</Badge>
            <Badge variant="outline">Outline</Badge>
        </div>
    ),
};

export const Colors: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Badge colorScheme="primary">Primary</Badge>
            <Badge colorScheme="secondary">Secondary</Badge>
            <Badge colorScheme="success">Success</Badge>
            <Badge colorScheme="warning">Warning</Badge>
            <Badge colorScheme="error">Error</Badge>
            <Badge colorScheme="neutral">Neutral</Badge>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
            <Badge size="lg">Large</Badge>
        </div>
    ),
};
