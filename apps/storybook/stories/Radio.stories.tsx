import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Radio> = {
    title: 'Components/Radio',
    component: Radio,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        colorScheme: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error'] },
        isDisabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
    args: { label: 'Option 1', name: 'radio-default' },
};

export const RadioGroup: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Radio name="group1" label="Option A" defaultChecked />
            <Radio name="group1" label="Option B" />
            <Radio name="group1" label="Option C" />
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Radio size="sm" name="sizes" label="Small" />
            <Radio size="md" name="sizes" label="Medium" />
            <Radio size="lg" name="sizes" label="Large" />
        </div>
    ),
};
