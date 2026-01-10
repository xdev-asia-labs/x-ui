import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Box } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Stack> = {
    title: 'Components/Stack',
    component: Stack,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        direction: { control: 'select', options: ['row', 'column'] },
        spacing: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
        align: { control: 'select', options: ['start', 'center', 'end', 'stretch'] },
    },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const boxStyle = { padding: '16px', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '8px', color: 'white' };

export const Horizontal: Story = {
    render: () => (
        <Stack direction="row" spacing="md">
            <Box style={boxStyle}>Item 1</Box>
            <Box style={boxStyle}>Item 2</Box>
            <Box style={boxStyle}>Item 3</Box>
        </Stack>
    ),
};

export const Vertical: Story = {
    render: () => (
        <Stack direction="column" spacing="md">
            <Box style={boxStyle}>Item 1</Box>
            <Box style={boxStyle}>Item 2</Box>
            <Box style={boxStyle}>Item 3</Box>
        </Stack>
    ),
};

export const Spacing: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Stack direction="row" spacing="xs">
                <Box style={boxStyle}>XS</Box>
                <Box style={boxStyle}>XS</Box>
                <Box style={boxStyle}>XS</Box>
            </Stack>
            <Stack direction="row" spacing="md">
                <Box style={boxStyle}>MD</Box>
                <Box style={boxStyle}>MD</Box>
                <Box style={boxStyle}>MD</Box>
            </Stack>
            <Stack direction="row" spacing="xl">
                <Box style={boxStyle}>XL</Box>
                <Box style={boxStyle}>XL</Box>
                <Box style={boxStyle}>XL</Box>
            </Stack>
        </div>
    ),
};
