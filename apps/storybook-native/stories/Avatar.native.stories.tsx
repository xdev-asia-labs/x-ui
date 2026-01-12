import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, ThemeProvider } from '@xdev-asia/x-ui-native';

const meta: Meta<typeof Avatar> = {
    title: 'Native/Avatar',
    component: Avatar,
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
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        name: 'John Doe',
        size: 'md',
    },
};

export const WithImage: Story = {
    args: {
        src: 'https://i.pravatar.cc/150?img=1',
        name: 'Jane Smith',
        size: 'lg',
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Avatar size="xs" name="XS" />
            <Avatar size="sm" name="SM" />
            <Avatar size="md" name="MD" />
            <Avatar size="lg" name="LG" />
            <Avatar size="xl" name="XL" />
            <Avatar size="2xl" name="2XL" />
        </div>
    ),
};

export const AvatarGroup: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: 8 }}>
            <Avatar src="https://i.pravatar.cc/150?img=1" name="User 1" />
            <Avatar src="https://i.pravatar.cc/150?img=2" name="User 2" />
            <Avatar src="https://i.pravatar.cc/150?img=3" name="User 3" />
            <Avatar name="+5" />
        </div>
    ),
};
