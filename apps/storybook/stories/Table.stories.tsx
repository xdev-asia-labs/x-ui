import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell, TableEmpty } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Table> = {
    title: 'Components/Table',
    component: Table,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['default', 'striped', 'bordered'] },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
    },
};

export default meta;
type Story = StoryObj<typeof Table>;

const sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
];

export const Default: Story = {
    render: () => (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Email</TableHeaderCell>
                    <TableHeaderCell>Role</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {sampleData.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.role}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h4 style={{ marginBottom: '8px', color: 'var(--x-mutedForeground)' }}>Small</h4>
                <Table size="sm">
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Role</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>Admin</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
            <div>
                <h4 style={{ marginBottom: '8px', color: 'var(--x-mutedForeground)' }}>Large</h4>
                <Table size="lg">
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Role</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>Admin</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    ),
};

export const Empty: Story = {
    render: () => (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Email</TableHeaderCell>
                    <TableHeaderCell>Role</TableHeaderCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableEmpty colSpan={3}>No data available</TableEmpty>
            </TableBody>
        </Table>
    ),
};
