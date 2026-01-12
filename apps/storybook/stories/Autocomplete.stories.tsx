import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from '@xdev-asia/x-ui-react';
import { useState } from 'react';

const meta: Meta<typeof Autocomplete> = {
    title: 'Forms/Autocomplete',
    component: Autocomplete,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const countries = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'vn', label: 'Vietnam' },
    { value: 'sg', label: 'Singapore' },
    { value: 'kr', label: 'South Korea' },
];

export const Default: Story = {
    args: {
        options: countries,
        placeholder: 'Search countries...',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

export const Controlled: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <div style={{ width: '300px' }}>
                <Autocomplete
                    options={countries}
                    value={value}
                    onChange={setValue}
                    placeholder="Select a country"
                />
                <p style={{ color: 'white', marginTop: '16px' }}>
                    Selected: {value || 'None'}
                </p>
            </div>
        );
    },
};

export const WithDisabledOptions: Story = {
    args: {
        options: [
            { value: 'us', label: 'United States' },
            { value: 'uk', label: 'United Kingdom', disabled: true },
            { value: 'ca', label: 'Canada' },
            { value: 'au', label: 'Australia', disabled: true },
        ],
        placeholder: 'Some options disabled',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

export const Loading: Story = {
    args: {
        options: countries,
        loading: true,
        placeholder: 'Loading...',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

export const Disabled: Story = {
    args: {
        options: countries,
        disabled: true,
        defaultValue: 'vn',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};
