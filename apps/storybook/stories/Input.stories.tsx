import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['outline', 'filled', 'flushed', 'glass'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        isDisabled: { control: 'boolean' },
        isInvalid: { control: 'boolean' },
        isReadOnly: { control: 'boolean' },
        label: { control: 'text' },
        placeholder: { control: 'text' },
        helperText: { control: 'text' },
        errorMessage: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        placeholder: 'Enter text...',
        variant: 'outline',
        size: 'md',
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Email',
        placeholder: 'you@example.com',
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Username',
        placeholder: 'johndoe',
        helperText: 'This will be your display name',
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
            <Input variant="outline" placeholder="Outline" />
            <Input variant="filled" placeholder="Filled" />
            <Input variant="flushed" placeholder="Flushed" />
            <Input variant="glass" placeholder="Glass" />
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
            <Input size="sm" placeholder="Small" />
            <Input size="md" placeholder="Medium" />
            <Input size="lg" placeholder="Large" />
        </div>
    ),
};

export const ErrorState: Story = {
    args: {
        label: 'Email',
        isInvalid: true,
        errorMessage: 'Please enter a valid email',
        defaultValue: 'invalid-email',
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Disabled input',
        isDisabled: true,
    },
};

/**
 * Interactive Playground - Try all the props!
 */
export const Playground: Story = {
    args: {
        label: 'Email Address',
        placeholder: 'you@example.com',
        helperText: 'We will never share your email',
        variant: 'outline',
        size: 'md',
        isDisabled: false,
        isInvalid: false,
        isReadOnly: false,
    },
    parameters: {
        docs: {
            description: {
                story: '🎮 **Interactive Playground** - Use the Controls panel to experiment with all Input props.',
            },
        },
    },
};
