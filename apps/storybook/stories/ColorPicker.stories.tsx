import type { Meta, StoryObj } from '@storybook/react';
import { ColorPicker } from '@xdev-asia/x-ui-react';
import { useState } from 'react';

const meta: Meta<typeof ColorPicker> = {
    title: 'Forms/ColorPicker',
    component: ColorPicker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        defaultValue: '#6366f1',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

export const Controlled: Story = {
    render: () => {
        const [color, setColor] = useState('#22c55e');
        return (
            <div style={{ width: '300px' }}>
                <ColorPicker value={color} onChange={setColor} />
                <div style={{
                    marginTop: '16px',
                    padding: '16px',
                    borderRadius: '8px',
                    backgroundColor: color,
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 600
                }}>
                    Preview: {color}
                </div>
            </div>
        );
    },
};

export const CustomPresets: Story = {
    args: {
        defaultValue: '#1a1a2e',
        presets: [
            '#1a1a2e', '#16213e', '#0f3460', '#e94560',
            '#533483', '#0a1128', '#001f54', '#034078',
        ],
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

export const NoInput: Story = {
    args: {
        defaultValue: '#f59e0b',
        showInput: false,
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

export const Disabled: Story = {
    args: {
        defaultValue: '#6366f1',
        disabled: true,
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

export const BrandColors: Story = {
    render: () => {
        const [primary, setPrimary] = useState('#6366f1');
        const [secondary, setSecondary] = useState('#a855f7');
        const [accent, setAccent] = useState('#22c55e');

        return (
            <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <p style={{ color: 'white', marginBottom: '8px', fontWeight: 500 }}>Primary Color</p>
                    <ColorPicker value={primary} onChange={setPrimary} />
                </div>
                <div>
                    <p style={{ color: 'white', marginBottom: '8px', fontWeight: 500 }}>Secondary Color</p>
                    <ColorPicker value={secondary} onChange={setSecondary} />
                </div>
                <div>
                    <p style={{ color: 'white', marginBottom: '8px', fontWeight: 500 }}>Accent Color</p>
                    <ColorPicker value={accent} onChange={setAccent} />
                </div>
                <div style={{
                    display: 'flex',
                    gap: '8px',
                    padding: '16px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255,255,255,0.1)'
                }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: primary }} />
                    <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: secondary }} />
                    <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: accent }} />
                </div>
            </div>
        );
    },
};
