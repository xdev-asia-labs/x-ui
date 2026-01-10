import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Divider> = {
    title: 'Components/Divider',
    component: Divider,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        orientation: { control: 'select', options: ['horizontal', 'vertical'] },
        variant: { control: 'select', options: ['solid', 'dashed', 'dotted'] },
    },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
    render: () => (
        <div style={{ width: '300px' }}>
            <p>Content above</p>
            <Divider />
            <p>Content below</p>
        </div>
    ),
};

export const Vertical: Story = {
    render: () => (
        <div style={{ display: 'flex', alignItems: 'center', height: '50px', gap: '16px' }}>
            <span>Left</span>
            <Divider orientation="vertical" />
            <span>Right</span>
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Divider variant="solid" />
            <Divider variant="dashed" />
            <Divider variant="dotted" />
        </div>
    ),
};
