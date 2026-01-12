import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DataGrid, DataGridColumn } from '@xdev-asia/x-ui-react';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive';
    joinDate: string;
}

const sampleData: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', joinDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active', joinDate: '2024-02-20' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'inactive', joinDate: '2024-03-10' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'active', joinDate: '2024-04-05' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'active', joinDate: '2024-05-12' },
    { id: 6, name: 'Diana Lee', email: 'diana@example.com', role: 'Viewer', status: 'inactive', joinDate: '2024-06-01' },
    { id: 7, name: 'Edward Chen', email: 'edward@example.com', role: 'Editor', status: 'active', joinDate: '2024-07-18' },
    { id: 8, name: 'Fiona Davis', email: 'fiona@example.com', role: 'Admin', status: 'active', joinDate: '2024-08-22' },
    { id: 9, name: 'George Miller', email: 'george@example.com', role: 'Viewer', status: 'active', joinDate: '2024-09-30' },
    { id: 10, name: 'Hannah White', email: 'hannah@example.com', role: 'Editor', status: 'inactive', joinDate: '2024-10-14' },
    { id: 11, name: 'Ivan Taylor', email: 'ivan@example.com', role: 'Viewer', status: 'active', joinDate: '2024-11-08' },
    { id: 12, name: 'Julia Anderson', email: 'julia@example.com', role: 'Admin', status: 'active', joinDate: '2024-12-01' },
];

const columns: DataGridColumn<User>[] = [
    { key: 'id', header: 'ID', accessor: 'id', width: 60, sortable: true },
    { key: 'name', header: 'Name', accessor: 'name', sortable: true, filterable: true },
    { key: 'email', header: 'Email', accessor: 'email', sortable: true, filterable: true },
    { key: 'role', header: 'Role', accessor: 'role', sortable: true, filterable: true },
    {
        key: 'status',
        header: 'Status',
        accessor: 'status',
        sortable: true,
        cell: (value) => (
            <span className={`px-2 py-1 rounded-full text-xs ${value === 'active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                {value as string}
            </span>
        ),
    },
    { key: 'joinDate', header: 'Join Date', accessor: 'joinDate', sortable: true },
];

const meta: Meta<typeof DataGrid> = {
    title: 'Data Display/DataGrid',
    component: DataGrid,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

export const Default: Story = {
    render: () => (
        <DataGrid
            data={sampleData}
            columns={columns}
            rowKey="id"
        />
    ),
};

export const WithPagination: Story = {
    render: () => (
        <DataGrid
            data={sampleData}
            columns={columns}
            rowKey="id"
            pagination
            pageSize={5}
        />
    ),
};

export const WithSelection: Story = {
    render: () => {
        const [selected, setSelected] = useState<(string | number)[]>([]);
        return (
            <div>
                <p className="mb-4 text-sm text-gray-400">Selected: {selected.join(', ') || 'None'}</p>
                <DataGrid
                    data={sampleData}
                    columns={columns}
                    rowKey="id"
                    selectable
                    selectionMode="multiple"
                    selectedKeys={selected}
                    onSelectionChange={setSelected}
                    pagination
                    pageSize={5}
                />
            </div>
        );
    },
};

export const WithFiltering: Story = {
    render: () => (
        <DataGrid
            data={sampleData}
            columns={columns.map(c => ({ ...c, filterable: true }))}
            rowKey="id"
            pagination
            pageSize={5}
        />
    ),
};

export const Loading: Story = {
    render: () => (
        <DataGrid
            data={[]}
            columns={columns}
            rowKey="id"
            loading
        />
    ),
};

export const Empty: Story = {
    render: () => (
        <DataGrid
            data={[]}
            columns={columns}
            rowKey="id"
            emptyMessage="No users found. Try adjusting your filters."
        />
    ),
};

export const Striped: Story = {
    render: () => (
        <DataGrid
            data={sampleData}
            columns={columns}
            rowKey="id"
            variant="striped"
            pagination
            pageSize={5}
        />
    ),
};
