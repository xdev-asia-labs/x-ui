'use client';

import React, { ReactNode } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface TableProps {
    children: ReactNode;
    className?: string;
    /** Variant */
    variant?: 'default' | 'striped' | 'bordered';
    /** Size */
    size?: 'sm' | 'md' | 'lg';
}

export interface TableColumnProps<T> {
    /** Column header */
    header: string;
    /** Accessor key or function */
    accessor: keyof T | ((row: T) => ReactNode);
    /** Column width */
    width?: string | number;
    /** Is sortable */
    sortable?: boolean;
    /** Text alignment */
    align?: 'left' | 'center' | 'right';
}

const sizeStyles = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
};

const cellPadding = {
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-5 py-4',
};

export function Table({
    children,
    className,
    variant = 'default',
    size = 'md',
}: TableProps) {
    return (
        <div className={cn(
            'x-table-wrapper',
            `x-table-${variant}`,
            'w-full overflow-auto rounded-xl',
            'border border-white/[0.1]',
            'bg-white/[0.02]',
            className
        )}>
            <table className={cn(
                'x-table',
                'w-full border-collapse',
                sizeStyles[size]
            )}>
                {children}
            </table>
        </div>
    );
}

export function TableHead({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <thead className={cn(
            'x-table-head',
            'bg-white/[0.04]',
            'border-b border-white/[0.08]',
            className
        )}>
            {children}
        </thead>
    );
}

export function TableBody({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <tbody className={cn('x-table-body', 'divide-y divide-white/[0.05]', className)}>
            {children}
        </tbody>
    );
}

export function TableRow({
    children,
    className,
    isSelected,
    onClick,
}: {
    children: ReactNode;
    className?: string;
    isSelected?: boolean;
    onClick?: () => void;
}) {
    return (
        <tr
            className={cn(
                'x-table-row',
                'transition-colors duration-150',
                'hover:bg-white/[0.04]',
                isSelected && 'bg-[var(--x-primary)]/10',
                onClick && 'cursor-pointer',
                className
            )}
            onClick={onClick}
        >
            {children}
        </tr>
    );
}

export function TableHeaderCell({
    children,
    className,
    align = 'left',
    sortable,
    sortDirection,
    onSort,
    size = 'md',
}: {
    children: ReactNode;
    className?: string;
    align?: 'left' | 'center' | 'right';
    sortable?: boolean;
    sortDirection?: 'asc' | 'desc' | null;
    onSort?: () => void;
    size?: 'sm' | 'md' | 'lg';
}) {
    const alignStyles = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    return (
        <th
            className={cn(
                'x-table-th',
                cellPadding[size],
                alignStyles[align],
                'font-semibold text-[var(--x-foreground)]',
                'whitespace-nowrap',
                sortable && 'cursor-pointer select-none hover:bg-white/[0.04]',
                className
            )}
            onClick={sortable ? onSort : undefined}
        >
            <div className="flex items-center gap-2">
                {children}
                {sortable && (
                    <span className="text-[var(--x-mutedForeground)]">
                        {sortDirection === 'asc' ? '↑' : sortDirection === 'desc' ? '↓' : '↕'}
                    </span>
                )}
            </div>
        </th>
    );
}

export function TableCell({
    children,
    className,
    align = 'left',
    size = 'md',
}: {
    children: ReactNode;
    className?: string;
    align?: 'left' | 'center' | 'right';
    size?: 'sm' | 'md' | 'lg';
}) {
    const alignStyles = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };

    return (
        <td
            className={cn(
                'x-table-td',
                cellPadding[size],
                alignStyles[align],
                'text-[var(--x-foreground)]',
                className
            )}
        >
            {children}
        </td>
    );
}

export function TableEmpty({
    children = 'No data available',
    colSpan = 1,
}: {
    children?: ReactNode;
    colSpan?: number;
}) {
    return (
        <tr>
            <td
                colSpan={colSpan}
                className="px-4 py-12 text-center text-[var(--x-mutedForeground)]"
            >
                {children}
            </td>
        </tr>
    );
}

export default Table;
