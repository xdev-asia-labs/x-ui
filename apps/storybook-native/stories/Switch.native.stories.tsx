import type { Meta, StoryObj } from '@storybook/react';
import { Switch, ThemeProvider } from '@xdev-asia/x-ui-native';
import { useState } from 'react';
import { View, Text } from 'react-native';

const meta: Meta<typeof Switch> = {
    title: 'Native/Switch',
    component: Switch,
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
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    args: {
        defaultValue: false,
    },
};

const ControlledSwitch = () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Switch value={isOn} onValueChange={setIsOn} />
            <Text>{isOn ? 'ON' : 'OFF'}</Text>
        </View>
    );
};

export const Controlled: Story = {
    render: () => <ControlledSwitch />,
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <Switch size="sm" defaultValue />
            <Switch size="md" defaultValue />
            <Switch size="lg" defaultValue />
        </div>
    ),
};

export const Colors: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <Switch colorScheme="primary" defaultValue />
            <Switch colorScheme="secondary" defaultValue />
            <Switch colorScheme="success" defaultValue />
            <Switch colorScheme="warning" defaultValue />
            <Switch colorScheme="error" defaultValue />
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        isDisabled: true,
        defaultValue: true,
    },
};
