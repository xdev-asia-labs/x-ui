import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, ThemeProvider } from '@xdev-asia/x-ui-native';
import { useState } from 'react';
import { View, Text } from 'react-native';

const meta: Meta<typeof Checkbox> = {
    title: 'Native/Checkbox',
    component: Checkbox,
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
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        colorScheme: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'warning', 'error'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        label: 'Accept terms and conditions',
    },
};

const ControlledCheckbox = () => {
    const [checked, setChecked] = useState(false);
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Checkbox
                value={checked}
                onValueChange={setChecked}
                label="Controlled checkbox"
            />
        </View>
    );
};

export const Controlled: Story = {
    render: () => <ControlledCheckbox />,
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Checkbox size="sm" label="Small" defaultValue />
            <Checkbox size="md" label="Medium" defaultValue />
            <Checkbox size="lg" label="Large" defaultValue />
        </div>
    ),
};

export const Colors: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Checkbox colorScheme="primary" label="Primary" defaultValue />
            <Checkbox colorScheme="secondary" label="Secondary" defaultValue />
            <Checkbox colorScheme="success" label="Success" defaultValue />
            <Checkbox colorScheme="warning" label="Warning" defaultValue />
            <Checkbox colorScheme="error" label="Error" defaultValue />
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        label: 'Disabled checkbox',
        isDisabled: true,
        defaultValue: true,
    },
};
