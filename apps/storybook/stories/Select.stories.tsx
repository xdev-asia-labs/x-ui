import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        variant: { control: 'select', options: ['outline', 'filled', 'glass'] },
        isDisabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
];

export const Default: Story = {
    args: {
        placeholder: 'Select a framework',
        options,
    },
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '250px' }}>
            <Select variant="outline" placeholder="Outline" options={options} />
            <Select variant="filled" placeholder="Filled" options={options} />
            <Select variant="glass" placeholder="Glass" options={options} />
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '250px' }}>
            <Select size="sm" placeholder="Small" options={options} />
            <Select size="md" placeholder="Medium" options={options} />
            <Select size="lg" placeholder="Large" options={options} />
        </div>
    ),
};
