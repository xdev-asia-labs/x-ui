import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        colorScheme: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error'] },
        isDisabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: { label: 'Accept terms and conditions' },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Checkbox size="sm" label="Small checkbox" />
            <Checkbox size="md" label="Medium checkbox" />
            <Checkbox size="lg" label="Large checkbox" />
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Checkbox label="Unchecked" />
            <Checkbox label="Checked" defaultChecked />
            <Checkbox label="Disabled" isDisabled />
            <Checkbox label="Disabled checked" isDisabled defaultChecked />
        </div>
    ),
};
