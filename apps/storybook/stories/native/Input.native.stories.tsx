import type { Meta, StoryObj } from '@storybook/react';
import { Input, ThemeProvider } from '@xdev-asia/x-ui-native';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
    title: 'Native/Input',
    component: Input,
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div style={{ padding: 20, width: 300 }}>
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
            options: ['outline', 'filled', 'flushed'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        placeholder: 'Enter text...',
        label: 'Label',
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Input variant="outline" label="Outline" placeholder="Outline variant" />
            <Input variant="filled" label="Filled" placeholder="Filled variant" />
            <Input variant="flushed" label="Flushed" placeholder="Flushed variant" />
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Input size="sm" placeholder="Small" />
            <Input size="md" placeholder="Medium" />
            <Input size="lg" placeholder="Large" />
        </div>
    ),
};

export const WithError: Story = {
    args: {
        label: 'Email',
        placeholder: 'Enter email',
        isInvalid: true,
        errorMessage: 'Invalid email address',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled',
        placeholder: 'Cannot edit',
        isDisabled: true,
    },
};
