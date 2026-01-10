'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from '@xdev-asia/x-ui-react';

const sampleData = [
    { name: 'John Doe', role: 'Developer', status: 'Active' },
    { name: 'Jane Smith', role: 'Designer', status: 'Active' },
    { name: 'Bob Wilson', role: 'Manager', status: 'Away' },
];

export default function TablePage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '750px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Table
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    Display tabular data with sorting, pagination, and selection support.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { 
    Table, 
    TableHead, 
    TableBody, 
    TableRow, 
    TableHeaderCell, 
    TableCell 
} from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Example
                    </h2>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell>Name</TableHeaderCell>
                                <TableHeaderCell>Role</TableHeaderCell>
                                <TableHeaderCell>Status</TableHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sampleData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.role}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                        Table
                    </h3>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2, marginBottom: '24px' }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>variant</code> - 'default' | 'striped' | 'bordered'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>size</code> - 'sm' | 'md' | 'lg'</li>
                    </ul>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                        Compound Components
                    </h3>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>TableHead</code> - Table header container</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>TableBody</code> - Table body container</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>TableRow</code> - Table row</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>TableHeaderCell</code> - Header cell with sorting support</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>TableCell</code> - Data cell</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>TableEmpty</code> - Empty state</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
