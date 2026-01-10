import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof DatePicker> = {
    title: 'Components/DatePicker',
    component: DatePicker,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        variant: { control: 'select', options: ['outline', 'filled', 'glass'] },
    },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
    args: {
        placeholder: 'Select date',
    },
};

export const WithLabel: Story = {
    render: () => (
        <div style={{ width: '280px' }}>
            <DatePicker label="Birth Date" placeholder="Select your birth date" />
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '280px' }}>
            <DatePicker variant="outline" placeholder="Outline" />
            <DatePicker variant="filled" placeholder="Filled" />
            <DatePicker variant="glass" placeholder="Glass" />
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '280px' }}>
            <DatePicker size="sm" placeholder="Small" />
            <DatePicker size="md" placeholder="Medium" />
            <DatePicker size="lg" placeholder="Large" />
        </div>
    ),
};
