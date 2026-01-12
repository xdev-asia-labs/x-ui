import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from '@xdev-asia/x-ui-react';
import { useState } from 'react';

const meta: Meta<typeof TimePicker> = {
    title: 'Forms/TimePicker',
    component: TimePicker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        defaultValue: '14:30',
    },
};

export const TwelveHour: Story = {
    args: {
        defaultValue: '14:30',
        use24Hour: false,
    },
};

export const CustomStep: Story = {
    args: {
        defaultValue: '12:00',
        minuteStep: 15,
    },
};

export const Controlled: Story = {
    render: () => {
        const [time, setTime] = useState('09:00');
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <TimePicker value={time} onChange={setTime} />
                <p style={{ color: 'white' }}>Selected time: {time}</p>
            </div>
        );
    },
};

export const Disabled: Story = {
    args: {
        defaultValue: '10:00',
        disabled: true,
    },
};
