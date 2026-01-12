import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { DataGrid } from '../DataGrid';

interface TestData extends Record<string, unknown> {
    id: number;
    name: string;
    email: string;
    status: string;
}

const testData: TestData[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'active' },
];

const columns = [
    { key: 'name', header: 'Name', accessor: 'name' as keyof TestData, sortable: true },
    { key: 'email', header: 'Email', accessor: 'email' as keyof TestData, filterable: true },
    { key: 'status', header: 'Status', accessor: 'status' as keyof TestData },
];

describe('DataGrid', () => {
    it('renders data correctly', () => {
        render(<DataGrid data={testData} columns={columns} rowKey="id" />);

        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('jane@example.com')).toBeInTheDocument();
        expect(screen.getByText('Bob Johnson')).toBeInTheDocument();
    });

    it('renders column headers', () => {
        render(<DataGrid data={testData} columns={columns} rowKey="id" />);

        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('Status')).toBeInTheDocument();
    });

    it('has correct ARIA role for grid', () => {
        render(<DataGrid data={testData} columns={columns} rowKey="id" />);

        expect(screen.getByRole('grid')).toBeInTheDocument();
    });

    it('calls onRowClick when row is clicked', () => {
        const onRowClick = vi.fn();
        render(<DataGrid data={testData} columns={columns} rowKey="id" onRowClick={onRowClick} />);

        fireEvent.click(screen.getByText('John Doe').closest('tr')!);
        expect(onRowClick).toHaveBeenCalledWith(testData[0], 0);
    });

    it('shows empty message when data is empty', () => {
        render(<DataGrid data={[]} columns={columns} rowKey="id" emptyMessage="No data" />);

        expect(screen.getByText('No data')).toBeInTheDocument();
    });

    it('shows loading state', () => {
        render(<DataGrid data={testData} columns={columns} rowKey="id" loading />);

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('handles row selection', () => {
        const onSelectionChange = vi.fn();
        render(
            <DataGrid
                data={testData}
                columns={columns}
                rowKey="id"
                selectable
                selectionMode="multiple"
                selectedKeys={[]}
                onSelectionChange={onSelectionChange}
            />
        );

        const checkboxes = screen.getAllByRole('checkbox');
        fireEvent.click(checkboxes[1]); // Click first row checkbox
        expect(onSelectionChange).toHaveBeenCalledWith([1]);
    });

    it('renders pagination when enabled', () => {
        render(<DataGrid data={testData} columns={columns} rowKey="id" pagination pageSize={2} />);

        expect(screen.getByText('Rows per page:')).toBeInTheDocument();
        expect(screen.getByText('1 / 2')).toBeInTheDocument();
    });
});
