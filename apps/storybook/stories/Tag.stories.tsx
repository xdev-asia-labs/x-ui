import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Tag> = {
    title: 'Components/Tag',
    component: Tag,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        colorScheme: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error', 'neutral'] },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        closable: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
    args: { children: 'Tag' },
};

export const ColorSchemes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Tag colorScheme="primary">Primary</Tag>
            <Tag colorScheme="secondary">Secondary</Tag>
            <Tag colorScheme="success">Success</Tag>
            <Tag colorScheme="warning">Warning</Tag>
            <Tag colorScheme="error">Error</Tag>
            <Tag colorScheme="neutral">Neutral</Tag>
        </div>
    ),
};

export const Closable: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px' }}>
            <Tag closable onClose={() => alert('Closed!')}>Closable Tag</Tag>
            <Tag closable colorScheme="success">Success</Tag>
            <Tag closable colorScheme="error">Error</Tag>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Tag size="sm">Small</Tag>
            <Tag size="md">Medium</Tag>
            <Tag size="lg">Large</Tag>
        </div>
    ),
};
