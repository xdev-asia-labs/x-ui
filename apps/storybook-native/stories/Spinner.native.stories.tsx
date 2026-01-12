import type { Meta, StoryObj } from '@storybook/react';
import { Spinner, ThemeProvider } from '@xdev-asia/x-ui-native';

const meta: Meta<typeof Spinner> = {
    title: 'Native/Spinner',
    component: Spinner,
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
            options: ['sm', 'md', 'lg', 'xl'],
        },
        colorScheme: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'warning', 'error', 'neutral'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
    args: {
        size: 'md',
        colorScheme: 'primary',
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="xl" />
        </div>
    ),
};

export const Colors: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <Spinner colorScheme="primary" />
            <Spinner colorScheme="secondary" />
            <Spinner colorScheme="success" />
            <Spinner colorScheme="warning" />
            <Spinner colorScheme="error" />
        </div>
    ),
};
