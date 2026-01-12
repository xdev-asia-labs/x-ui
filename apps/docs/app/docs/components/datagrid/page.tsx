'use client';

import React, { useState } from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { DataGrid, DataGridColumn } from '@xdev-asia/x-ui-react';

interface User extends Record<string, unknown> {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive';
}

const sampleData: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'active' },
];

const columns: DataGridColumn<User>[] = [
    { key: 'id', header: 'ID', accessor: 'id', width: 60, sortable: true },
    { key: 'name', header: 'Name', accessor: 'name', sortable: true, filterable: true },
    { key: 'email', header: 'Email', accessor: 'email', sortable: true },
    { key: 'role', header: 'Role', accessor: 'role', sortable: true },
    {
        key: 'status',
        header: 'Status',
        accessor: 'status',
        cell: (value) => (
            <span style={{
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '12px',
                backgroundColor: value === 'active' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                color: value === 'active' ? '#10b981' : '#ef4444',
            }}>
                {value as string}
            </span>
        ),
    },
];

export default function DataGridPage() {
    const [selected, setSelected] = useState<(string | number)[]>([]);

    return (
        <DocsLayout>
            <div style={{ maxWidth: '900px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    DataGrid
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    Advanced data table with built-in sorting, filtering, pagination, and row selection.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { DataGrid } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Example
                    </h2>
                    <DataGrid
                        data={sampleData}
                        columns={columns}
                        rowKey="id"
                        pagination
                        pageSize={5}
                        selectable
                        selectedKeys={selected}
                        onSelectionChange={setSelected}
                    />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Features
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li>✅ Column sorting (ascending/descending)</li>
                        <li>✅ Column filtering with text search</li>
                        <li>✅ Pagination with customizable page sizes</li>
                        <li>✅ Row selection (single or multiple)</li>
                        <li>✅ Custom cell renderers</li>
                        <li>✅ Loading and empty states</li>
                    </ul>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>data</code> - Array of data objects</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>columns</code> - Column definitions array</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>rowKey</code> - Unique row identifier</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>pagination</code> - Enable pagination</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>pageSize</code> - Items per page (default: 10)</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>selectable</code> - Enable row selection</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>selectionMode</code> - 'single' | 'multiple'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>loading</code> - Show loading state</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>variant</code> - 'default' | 'striped' | 'bordered'</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
