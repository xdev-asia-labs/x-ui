'use client';

import React, { useState, useMemo, useCallback, ReactNode } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

// Types
export interface DataGridColumn<T> {
    /** Unique column key */
    key: string;
    /** Column header label */
    header: string;
    /** Accessor key or render function */
    accessor: keyof T | ((row: T, index: number) => ReactNode);
    /** Column width */
    width?: string | number;
    /** Enable sorting */
    sortable?: boolean;
    /** Enable filtering */
    filterable?: boolean;
    /** Text alignment */
    align?: 'left' | 'center' | 'right';
    /** Custom cell renderer */
    cell?: (value: unknown, row: T, index: number) => ReactNode;
    /** Custom header renderer */
    headerCell?: () => ReactNode;
}

export interface DataGridProps<T extends Record<string, unknown>> {
    /** Data array */
    data: T[];
    /** Column definitions */
    columns: DataGridColumn<T>[];
    /** Unique row key accessor */
    rowKey: keyof T | ((row: T) => string | number);
    /** Enable row selection */
    selectable?: boolean;
    /** Selection mode */
    selectionMode?: 'single' | 'multiple';
    /** Selected row keys */
    selectedKeys?: (string | number)[];
    /** Selection change handler */
    onSelectionChange?: (keys: (string | number)[]) => void;
    /** Row click handler */
    onRowClick?: (row: T, index: number) => void;
    /** Enable pagination */
    pagination?: boolean;
    /** Page size */
    pageSize?: number;
    /** Page size options */
    pageSizeOptions?: number[];
    /** Current page (controlled) */
    currentPage?: number;
    /** Page change handler */
    onPageChange?: (page: number) => void;
    /** Table size */
    size?: 'sm' | 'md' | 'lg';
    /** Table variant */
    variant?: 'default' | 'striped' | 'bordered';
    /** Loading state */
    loading?: boolean;
    /** Empty state message */
    emptyMessage?: ReactNode;
    /** Custom class name */
    className?: string;
    /** Enable virtual scrolling for large datasets */
    virtualized?: boolean;
    /** Fixed height for virtualized mode */
    height?: number;
}

export interface SortState {
    key: string;
    direction: 'asc' | 'desc';
}

export interface FilterState {
    [key: string]: string;
}

const sizeStyles = {
    sm: { text: 'text-xs', padding: 'px-3 py-2' },
    md: { text: 'text-sm', padding: 'px-4 py-3' },
    lg: { text: 'text-base', padding: 'px-5 py-4' },
};

export function DataGrid<T extends Record<string, unknown>>({
    data,
    columns,
    rowKey,
    selectable = false,
    selectionMode = 'multiple',
    selectedKeys = [],
    onSelectionChange,
    onRowClick,
    pagination = false,
    pageSize: initialPageSize = 10,
    pageSizeOptions = [10, 25, 50, 100],
    currentPage: controlledPage,
    onPageChange,
    size = 'md',
    variant = 'default',
    loading = false,
    emptyMessage = 'No data available',
    className,
}: DataGridProps<T>) {
    // Internal state
    const [sortState, setSortState] = useState<SortState | null>(null);
    const [filterState, setFilterState] = useState<FilterState>({});
    const [internalPage, setInternalPage] = useState(1);
    const [pageSize, setPageSize] = useState(initialPageSize);

    const currentPage = controlledPage ?? internalPage;

    // Get row key value
    const getRowKey = useCallback((row: T): string | number => {
        if (typeof rowKey === 'function') {
            return rowKey(row);
        }
        return row[rowKey] as string | number;
    }, [rowKey]);

    // Get cell value
    const getCellValue = useCallback((row: T, column: DataGridColumn<T>, index: number): ReactNode => {
        let value: unknown;

        if (typeof column.accessor === 'function') {
            value = column.accessor(row, index);
        } else {
            value = row[column.accessor];
        }

        if (column.cell) {
            return column.cell(value, row, index);
        }

        return value as ReactNode;
    }, []);

    // Filter data
    const filteredData = useMemo(() => {
        let result = [...data];

        // Apply filters
        Object.entries(filterState).forEach(([key, value]) => {
            if (value) {
                result = result.filter((row) => {
                    const column = columns.find((c) => c.key === key);
                    if (!column) return true;

                    let cellValue: unknown;
                    if (typeof column.accessor === 'function') {
                        cellValue = column.accessor(row, 0);
                    } else {
                        cellValue = row[column.accessor];
                    }

                    return String(cellValue).toLowerCase().includes(value.toLowerCase());
                });
            }
        });

        return result;
    }, [data, filterState, columns]);

    // Sort data
    const sortedData = useMemo(() => {
        if (!sortState) return filteredData;

        const column = columns.find((c) => c.key === sortState.key);
        if (!column) return filteredData;

        return [...filteredData].sort((a, b) => {
            let aValue: unknown;
            let bValue: unknown;

            if (typeof column.accessor === 'function') {
                aValue = column.accessor(a, 0);
                bValue = column.accessor(b, 0);
            } else {
                aValue = a[column.accessor];
                bValue = b[column.accessor];
            }

            if (aValue === bValue) return 0;
            if (aValue === null || aValue === undefined) return 1;
            if (bValue === null || bValue === undefined) return -1;

            const comparison = aValue < bValue ? -1 : 1;
            return sortState.direction === 'asc' ? comparison : -comparison;
        });
    }, [filteredData, sortState, columns]);

    // Paginate data
    const paginatedData = useMemo(() => {
        if (!pagination) return sortedData;

        const start = (currentPage - 1) * pageSize;
        return sortedData.slice(start, start + pageSize);
    }, [sortedData, pagination, currentPage, pageSize]);

    const totalPages = Math.ceil(sortedData.length / pageSize);

    // Handlers
    const handleSort = useCallback((key: string) => {
        setSortState((prev) => {
            if (prev?.key !== key) return { key, direction: 'asc' };
            if (prev.direction === 'asc') return { key, direction: 'desc' };
            return null;
        });
    }, []);

    const handleFilter = useCallback((key: string, value: string) => {
        setFilterState((prev) => ({ ...prev, [key]: value }));
        setInternalPage(1);
    }, []);

    const handlePageChange = useCallback((page: number) => {
        if (onPageChange) {
            onPageChange(page);
        } else {
            setInternalPage(page);
        }
    }, [onPageChange]);

    const handleSelect = useCallback((key: string | number) => {
        if (!onSelectionChange) return;

        if (selectionMode === 'single') {
            onSelectionChange(selectedKeys.includes(key) ? [] : [key]);
        } else {
            onSelectionChange(
                selectedKeys.includes(key)
                    ? selectedKeys.filter((k) => k !== key)
                    : [...selectedKeys, key]
            );
        }
    }, [selectedKeys, selectionMode, onSelectionChange]);

    const handleSelectAll = useCallback(() => {
        if (!onSelectionChange) return;

        const allKeys = paginatedData.map(getRowKey);
        const allSelected = allKeys.every((key) => selectedKeys.includes(key));

        if (allSelected) {
            onSelectionChange(selectedKeys.filter((key) => !allKeys.includes(key)));
        } else {
            onSelectionChange([...new Set([...selectedKeys, ...allKeys])]);
        }
    }, [paginatedData, selectedKeys, getRowKey, onSelectionChange]);

    const hasFilters = columns.some((c) => c.filterable);

    return (
        <div className={cn('x-datagrid', 'w-full', className)}>
            {/* Data Grid Table */}
            <div className={cn(
                'x-datagrid-wrapper',
                'overflow-auto rounded-xl',
                'border border-white/[0.1]',
                'bg-white/[0.02]',
            )}>
                <table className={cn(
                    'x-datagrid-table',
                    'w-full border-collapse',
                    sizeStyles[size].text,
                )}>
                    {/* Header */}
                    <thead className="x-datagrid-head bg-white/[0.04] border-b border-white/[0.08]">
                        <tr>
                            {selectable && (
                                <th className={cn(sizeStyles[size].padding, 'w-12')}>
                                    {selectionMode === 'multiple' && (
                                        <input
                                            type="checkbox"
                                            checked={paginatedData.length > 0 && paginatedData.every((row) => selectedKeys.includes(getRowKey(row)))}
                                            onChange={handleSelectAll}
                                            className="x-datagrid-checkbox rounded border-white/20 bg-white/5"
                                        />
                                    )}
                                </th>
                            )}
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className={cn(
                                        'x-datagrid-th',
                                        sizeStyles[size].padding,
                                        'text-left font-semibold text-[var(--x-foreground)]',
                                        'whitespace-nowrap',
                                        column.sortable && 'cursor-pointer select-none hover:bg-white/[0.04]',
                                        column.align === 'center' && 'text-center',
                                        column.align === 'right' && 'text-right',
                                    )}
                                    style={{ width: column.width }}
                                    onClick={column.sortable ? () => handleSort(column.key) : undefined}
                                >
                                    <div className="flex items-center gap-2">
                                        {column.headerCell ? column.headerCell() : column.header}
                                        {column.sortable && (
                                            <span className="text-[var(--x-mutedForeground)]">
                                                {sortState?.key === column.key
                                                    ? sortState.direction === 'asc' ? '↑' : '↓'
                                                    : '↕'}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                        {/* Filter Row */}
                        {hasFilters && (
                            <tr className="bg-white/[0.02]">
                                {selectable && <th className={sizeStyles[size].padding} />}
                                {columns.map((column) => (
                                    <th key={column.key} className={sizeStyles[size].padding}>
                                        {column.filterable && (
                                            <input
                                                type="text"
                                                placeholder={`Filter ${column.header}...`}
                                                value={filterState[column.key] || ''}
                                                onChange={(e) => handleFilter(column.key, e.target.value)}
                                                className={cn(
                                                    'x-datagrid-filter',
                                                    'w-full px-2 py-1 rounded',
                                                    'bg-white/5 border border-white/10',
                                                    'text-[var(--x-foreground)] placeholder:text-[var(--x-mutedForeground)]',
                                                    'focus:outline-none focus:border-[var(--x-primary)]',
                                                )}
                                            />
                                        )}
                                    </th>
                                ))}
                            </tr>
                        )}
                    </thead>

                    {/* Body */}
                    <tbody className="x-datagrid-body divide-y divide-white/[0.05]">
                        {loading ? (
                            <tr>
                                <td
                                    colSpan={columns.length + (selectable ? 1 : 0)}
                                    className="px-4 py-12 text-center text-[var(--x-mutedForeground)]"
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Loading...
                                    </div>
                                </td>
                            </tr>
                        ) : paginatedData.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={columns.length + (selectable ? 1 : 0)}
                                    className="px-4 py-12 text-center text-[var(--x-mutedForeground)]"
                                >
                                    {emptyMessage}
                                </td>
                            </tr>
                        ) : (
                            paginatedData.map((row, rowIndex) => {
                                const key = getRowKey(row);
                                const isSelected = selectedKeys.includes(key);

                                return (
                                    <tr
                                        key={key}
                                        className={cn(
                                            'x-datagrid-row',
                                            'transition-colors duration-150',
                                            'hover:bg-white/[0.04]',
                                            isSelected && 'bg-[var(--x-primary)]/10',
                                            onRowClick && 'cursor-pointer',
                                            variant === 'striped' && rowIndex % 2 === 1 && 'bg-white/[0.02]',
                                        )}
                                        onClick={() => onRowClick?.(row, rowIndex)}
                                    >
                                        {selectable && (
                                            <td className={cn(sizeStyles[size].padding, 'w-12')}>
                                                <input
                                                    type={selectionMode === 'single' ? 'radio' : 'checkbox'}
                                                    checked={isSelected}
                                                    onChange={() => handleSelect(key)}
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="x-datagrid-checkbox rounded border-white/20 bg-white/5"
                                                />
                                            </td>
                                        )}
                                        {columns.map((column) => (
                                            <td
                                                key={column.key}
                                                className={cn(
                                                    'x-datagrid-td',
                                                    sizeStyles[size].padding,
                                                    'text-[var(--x-foreground)]',
                                                    column.align === 'center' && 'text-center',
                                                    column.align === 'right' && 'text-right',
                                                )}
                                            >
                                                {getCellValue(row, column, rowIndex)}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {pagination && totalPages > 0 && (
                <div className={cn(
                    'x-datagrid-pagination',
                    'flex items-center justify-between gap-4 mt-4',
                    'text-sm text-[var(--x-mutedForeground)]',
                )}>
                    <div className="flex items-center gap-2">
                        <span>Rows per page:</span>
                        <select
                            value={pageSize}
                            onChange={(e) => {
                                setPageSize(Number(e.target.value));
                                handlePageChange(1);
                            }}
                            className={cn(
                                'px-2 py-1 rounded',
                                'bg-white/5 border border-white/10',
                                'text-[var(--x-foreground)]',
                                'focus:outline-none focus:border-[var(--x-primary)]',
                            )}
                        >
                            {pageSizeOptions.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center gap-1">
                        <span>
                            {(currentPage - 1) * pageSize + 1} - {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length}
                        </span>
                    </div>

                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1}
                            className={cn(
                                'x-datagrid-page-btn',
                                'px-2 py-1 rounded',
                                'hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed',
                            )}
                        >
                            ««
                        </button>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={cn(
                                'x-datagrid-page-btn',
                                'px-2 py-1 rounded',
                                'hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed',
                            )}
                        >
                            «
                        </button>
                        <span className="px-3 py-1 text-[var(--x-foreground)]">
                            {currentPage} / {totalPages}
                        </span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={cn(
                                'x-datagrid-page-btn',
                                'px-2 py-1 rounded',
                                'hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed',
                            )}
                        >
                            »
                        </button>
                        <button
                            onClick={() => handlePageChange(totalPages)}
                            disabled={currentPage === totalPages}
                            className={cn(
                                'x-datagrid-page-btn',
                                'px-2 py-1 rounded',
                                'hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed',
                            )}
                        >
                            »»
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DataGrid;
