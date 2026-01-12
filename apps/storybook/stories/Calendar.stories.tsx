import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@xdev-asia/x-ui-react';
import { useState } from 'react';

const meta: Meta<typeof Calendar> = {
    title: 'Data Display/Calendar',
    component: Calendar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        defaultValue: new Date(),
    },
};

export const Controlled: Story = {
    render: () => {
        const [date, setDate] = useState(new Date());
        return (
            <div>
                <Calendar value={date} onChange={setDate} />
                <p style={{ color: 'white', marginTop: '16px', textAlign: 'center' }}>
                    Selected: {date.toLocaleDateString()}
                </p>
            </div>
        );
    },
};

export const WithMinMax: Story = {
    args: {
        defaultValue: new Date(),
        minDate: new Date(new Date().setDate(new Date().getDate() - 7)),
        maxDate: new Date(new Date().setDate(new Date().getDate() + 30)),
    },
};

export const Disabled: Story = {
    args: {
        defaultValue: new Date(),
        disabled: true,
    },
};
