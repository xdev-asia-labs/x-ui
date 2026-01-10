import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Button } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Tooltip> = {
    title: 'Components/Tooltip',
    component: Tooltip,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    render: () => (
        <Tooltip content="This is a tooltip">
            <Button>Hover me</Button>
        </Tooltip>
    ),
};

export const Placements: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', padding: '60px' }}>
            <Tooltip content="Top tooltip" placement="top">
                <Button variant="outline">Top</Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" placement="bottom">
                <Button variant="outline">Bottom</Button>
            </Tooltip>
            <Tooltip content="Left tooltip" placement="left">
                <Button variant="outline">Left</Button>
            </Tooltip>
            <Tooltip content="Right tooltip" placement="right">
                <Button variant="outline">Right</Button>
            </Tooltip>
        </div>
    ),
};
