import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
        variant: { control: 'select', options: ['circle', 'rounded', 'square'] },
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        src: 'https://i.pravatar.cc/150?img=1',
        alt: 'User avatar',
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Avatar size="xs" src="https://i.pravatar.cc/150?img=1" />
            <Avatar size="sm" src="https://i.pravatar.cc/150?img=2" />
            <Avatar size="md" src="https://i.pravatar.cc/150?img=3" />
            <Avatar size="lg" src="https://i.pravatar.cc/150?img=4" />
            <Avatar size="xl" src="https://i.pravatar.cc/150?img=5" />
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px' }}>
            <Avatar variant="circle" src="https://i.pravatar.cc/150?img=6" />
            <Avatar variant="rounded" src="https://i.pravatar.cc/150?img=7" />
            <Avatar variant="square" src="https://i.pravatar.cc/150?img=8" />
        </div>
    ),
};

export const Fallback: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px' }}>
            <Avatar fallback="JD" />
            <Avatar fallback="AB" />
            <Avatar fallback="XY" />
        </div>
    ),
};
