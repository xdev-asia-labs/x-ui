import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Box> = {
    title: 'Components/Box',
    component: Box,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
    render: () => (
        <Box style={{ padding: '24px', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '12px' }}>
            This is a Box component
        </Box>
    ),
};

export const AsCard: Story = {
    render: () => (
        <Box
            as="article"
            style={{
                padding: '24px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                maxWidth: '300px',
            }}
        >
            <h3 style={{ margin: '0 0 12px 0' }}>Card Title</h3>
            <p style={{ margin: 0, color: 'var(--x-mutedForeground)' }}>
                Box can render as any HTML element using the "as" prop.
            </p>
        </Box>
    ),
};

export const Nested: Story = {
    render: () => (
        <Box style={{ padding: '24px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '16px' }}>
            <Box style={{ padding: '16px', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '12px', marginBottom: '12px' }}>
                Nested Box 1
            </Box>
            <Box style={{ padding: '16px', background: 'rgba(139, 92, 246, 0.2)', borderRadius: '12px' }}>
                Nested Box 2
            </Box>
        </Box>
    ),
};
