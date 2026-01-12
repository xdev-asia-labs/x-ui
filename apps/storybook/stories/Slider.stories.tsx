import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@xdev-asia/x-ui-react';
import { useState } from 'react';

const meta: Meta<typeof Slider> = {
    title: 'Forms/Slider',
    component: Slider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        colorScheme: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'warning', 'error'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        defaultValue: 50,
        min: 0,
        max: 100,
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

export const WithValue: Story = {
    args: {
        defaultValue: 75,
        showValue: true,
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

export const ColorSchemes: Story = {
    render: () => (
        <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <p style={{ color: 'white', marginBottom: '8px', fontSize: '14px' }}>Primary</p>
                <Slider defaultValue={60} colorScheme="primary" showValue />
            </div>
            <div>
                <p style={{ color: 'white', marginBottom: '8px', fontSize: '14px' }}>Secondary</p>
                <Slider defaultValue={40} colorScheme="secondary" showValue />
            </div>
            <div>
                <p style={{ color: 'white', marginBottom: '8px', fontSize: '14px' }}>Success</p>
                <Slider defaultValue={80} colorScheme="success" showValue />
            </div>
            <div>
                <p style={{ color: 'white', marginBottom: '8px', fontSize: '14px' }}>Warning</p>
                <Slider defaultValue={30} colorScheme="warning" showValue />
            </div>
            <div>
                <p style={{ color: 'white', marginBottom: '8px', fontSize: '14px' }}>Error</p>
                <Slider defaultValue={20} colorScheme="error" showValue />
            </div>
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
                <p style={{ color: 'white', marginBottom: '8px', fontSize: '14px' }}>Small</p>
                <Slider defaultValue={50} size="sm" showValue />
            </div>
            <div>
                <p style={{ color: 'white', marginBottom: '8px', fontSize: '14px' }}>Medium</p>
                <Slider defaultValue={50} size="md" showValue />
            </div>
            <div>
                <p style={{ color: 'white', marginBottom: '8px', fontSize: '14px' }}>Large</p>
                <Slider defaultValue={50} size="lg" showValue />
            </div>
        </div>
    ),
};

export const Controlled: Story = {
    render: () => {
        const [value, setValue] = useState(50);
        return (
            <div style={{ width: '300px' }}>
                <Slider value={value} onChange={setValue} showValue />
                <p style={{ color: 'white', marginTop: '16px', fontSize: '14px' }}>
                    Current value: {value}
                </p>
            </div>
        );
    },
};

export const Disabled: Story = {
    args: {
        defaultValue: 50,
        disabled: true,
        showValue: true,
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};
