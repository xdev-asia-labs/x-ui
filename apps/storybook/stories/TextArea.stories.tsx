import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof TextArea> = {
    title: 'Components/TextArea',
    component: TextArea,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['outline', 'filled', 'glass'] },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        isDisabled: { control: 'boolean' },
        isReadOnly: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
    args: {
        placeholder: 'Enter your message...',
        rows: 4,
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
            <TextArea variant="outline" placeholder="Outline variant" />
            <TextArea variant="filled" placeholder="Filled variant" />
            <TextArea variant="glass" placeholder="Glass variant" />
        </div>
    ),
};

export const WithLabel: Story = {
    render: () => (
        <div style={{ width: '300px' }}>
            <TextArea label="Description" placeholder="Enter description..." helperText="Max 500 characters" />
        </div>
    ),
};
