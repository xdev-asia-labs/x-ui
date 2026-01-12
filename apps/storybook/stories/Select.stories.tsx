import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Select> = {
    title: 'Forms/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

const basicOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'solid', label: 'Solid' },
];

const groupedOptions = [
    { value: 'react', label: 'React', group: 'Frontend' },
    { value: 'vue', label: 'Vue', group: 'Frontend' },
    { value: 'angular', label: 'Angular', group: 'Frontend' },
    { value: 'node', label: 'Node.js', group: 'Backend' },
    { value: 'deno', label: 'Deno', group: 'Backend' },
    { value: 'bun', label: 'Bun', group: 'Backend' },
    { value: 'postgres', label: 'PostgreSQL', group: 'Database' },
    { value: 'mongodb', label: 'MongoDB', group: 'Database' },
];

const countryOptions = [
    { value: 'us', label: '🇺🇸 United States' },
    { value: 'uk', label: '🇬🇧 United Kingdom' },
    { value: 'jp', label: '🇯🇵 Japan' },
    { value: 'vn', label: '🇻🇳 Vietnam' },
    { value: 'kr', label: '🇰🇷 South Korea' },
    { value: 'sg', label: '🇸🇬 Singapore' },
    { value: 'de', label: '🇩🇪 Germany' },
    { value: 'fr', label: '🇫🇷 France' },
];

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <div style={{ width: 300 }}>
                <Select
                    options={basicOptions}
                    value={value}
                    onChange={setValue}
                    placeholder="Select a framework"
                    label="Framework"
                />
            </div>
        );
    },
};

export const Searchable: Story = {
    render: () => {
        const [value, setValue] = useState('');
        return (
            <div style={{ width: 300 }}>
                <Select
                    options={countryOptions}
                    value={value}
                    onChange={setValue}
                    placeholder="Search countries..."
                    label="Country"
                    searchable
                    clearable
                />
            </div>
        );
    },
};

export const MultiSelect: Story = {
    render: () => {
        const [values, setValues] = useState<string[]>([]);
        return (
            <div style={{ width: 350 }}>
                <Select
                    options={basicOptions}
                    values={values}
                    onValuesChange={setValues}
                    placeholder="Select frameworks"
                    label="Technologies"
                    multiple
                    searchable
                    clearable
                />
                <p style={{ marginTop: 16, color: '#888' }}>
                    Selected: {values.join(', ') || 'None'}
                </p>
            </div>
        );
    },
};

export const WithGroups: Story = {
    render: () => {
        const [values, setValues] = useState<string[]>([]);
        return (
            <div style={{ width: 350 }}>
                <Select
                    options={groupedOptions}
                    values={values}
                    onValuesChange={setValues}
                    placeholder="Select technologies"
                    label="Tech Stack"
                    multiple
                    searchable
                    clearable
                />
            </div>
        );
    },
};

export const Tagging: Story = {
    render: () => {
        const [options, setOptions] = useState([
            { value: 'bug', label: 'Bug' },
            { value: 'feature', label: 'Feature' },
            { value: 'enhancement', label: 'Enhancement' },
        ]);
        const [values, setValues] = useState<string[]>([]);

        return (
            <div style={{ width: 350 }}>
                <Select
                    options={options}
                    values={values}
                    onValuesChange={setValues}
                    placeholder="Add labels..."
                    label="Labels"
                    multiple
                    searchable
                    tagging
                    clearable
                    onCreateTag={(tag) => {
                        setOptions([...options, { value: tag, label: tag }]);
                    }}
                />
                <p style={{ marginTop: 8, fontSize: 12, color: '#888' }}>
                    Type custom label and press Enter to create
                </p>
            </div>
        );
    },
};

export const Variants: Story = {
    render: () => {
        const [v1, setV1] = useState('');
        const [v2, setV2] = useState('');
        const [v3, setV3] = useState('');
        return (
            <div style={{ width: 300, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <Select
                    options={basicOptions}
                    value={v1}
                    onChange={setV1}
                    placeholder="Outline variant"
                    variant="outline"
                />
                <Select
                    options={basicOptions}
                    value={v2}
                    onChange={setV2}
                    placeholder="Filled variant"
                    variant="filled"
                />
                <Select
                    options={basicOptions}
                    value={v3}
                    onChange={setV3}
                    placeholder="Glass variant"
                    variant="glass"
                />
            </div>
        );
    },
};

export const Sizes: Story = {
    render: () => {
        return (
            <div style={{ width: 300, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <Select options={basicOptions} placeholder="Small" size="sm" />
                <Select options={basicOptions} placeholder="Medium" size="md" />
                <Select options={basicOptions} placeholder="Large" size="lg" />
            </div>
        );
    },
};

export const States: Story = {
    render: () => {
        return (
            <div style={{ width: 300, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <Select
                    options={basicOptions}
                    placeholder="Normal"
                    label="Normal"
                />
                <Select
                    options={basicOptions}
                    placeholder="Loading..."
                    label="Loading"
                    isLoading
                />
                <Select
                    options={basicOptions}
                    placeholder="Disabled"
                    label="Disabled"
                    isDisabled
                />
                <Select
                    options={basicOptions}
                    placeholder="Invalid"
                    label="Invalid"
                    isInvalid
                    errorMessage="This field is required"
                />
            </div>
        );
    },
};
