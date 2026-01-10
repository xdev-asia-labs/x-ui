import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        colorScheme: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error', 'neutral'] },
        variant: { control: 'select', options: ['solid', 'outline', 'subtle'] },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: { children: 'Badge' },
};

export const ColorSchemes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Badge colorScheme="primary">Primary</Badge>
            <Badge colorScheme="secondary">Secondary</Badge>
            <Badge colorScheme="success">Success</Badge>
            <Badge colorScheme="warning">Warning</Badge>
            <Badge colorScheme="error">Error</Badge>
            <Badge colorScheme="neutral">Neutral</Badge>
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px' }}>
            <Badge variant="solid">Solid</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="subtle">Subtle</Badge>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
            <Badge size="lg">Large</Badge>
        </div>
    ),
};
