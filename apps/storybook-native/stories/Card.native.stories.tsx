import type { Meta, StoryObj } from '@storybook/react';
import { Card, ThemeProvider, Box } from '@xdev-asia/x-ui-native';
import { Text } from 'react-native';

const meta: Meta<typeof Card> = {
    title: 'Native/Card',
    component: Card,
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
        variant: {
            control: 'select',
            options: ['elevated', 'outlined', 'filled', 'glass'],
        },
        padding: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: () => (
        <Card style={{ width: 300 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Card Title</Text>
            <Text style={{ color: '#666' }}>This is a native card component rendered on web via react-native-web.</Text>
        </Card>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Card variant="elevated" style={{ width: 200, padding: 16 }}>
                <Text style={{ fontWeight: '600' }}>Elevated</Text>
            </Card>
            <Card variant="outlined" style={{ width: 200, padding: 16 }}>
                <Text style={{ fontWeight: '600' }}>Outlined</Text>
            </Card>
            <Card variant="filled" style={{ width: 200, padding: 16 }}>
                <Text style={{ fontWeight: '600' }}>Filled</Text>
            </Card>
            <Card variant="glass" style={{ width: 200, padding: 16 }}>
                <Text style={{ fontWeight: '600' }}>Glass</Text>
            </Card>
        </div>
    ),
};
