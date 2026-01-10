import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Skeleton> = {
    title: 'Components/Skeleton',
    component: Skeleton,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['text', 'circular', 'rectangular'] },
    },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    args: { width: 200, height: 20 },
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Skeleton variant="text" width={250} />
            <Skeleton variant="circular" width={50} height={50} />
            <Skeleton variant="rectangular" width={200} height={100} />
        </div>
    ),
};

export const CardSkeleton: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
            <Skeleton variant="circular" width={48} height={48} />
            <div style={{ flex: 1 }}>
                <Skeleton variant="text" width="60%" height={20} />
                <Skeleton variant="text" width="40%" height={16} style={{ marginTop: 8 }} />
            </div>
        </div>
    ),
};
