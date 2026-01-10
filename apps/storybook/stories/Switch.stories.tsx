import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Switch> = {
    title: 'Components/Switch',
    component: Switch,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        colorScheme: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error'] },
        isDisabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    args: { label: 'Enable notifications' },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Switch size="sm" label="Small switch" />
            <Switch size="md" label="Medium switch" />
            <Switch size="lg" label="Large switch" />
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Switch label="Off" />
            <Switch label="On" defaultChecked />
            <Switch label="Disabled off" isDisabled />
            <Switch label="Disabled on" isDisabled defaultChecked />
        </div>
    ),
};
