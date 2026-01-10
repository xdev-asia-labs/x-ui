'use client';

import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    /** Number of columns (1-12) */
    columns?: number | { sm?: number; md?: number; lg?: number; xl?: number };
    /** Gap between items */
    gap?: number | string;
    /** Row gap */
    rowGap?: number | string;
    /** Column gap */
    columnGap?: number | string;
    /** Align items */
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    /** Justify items */
    justify?: 'start' | 'center' | 'end' | 'stretch';
    children?: ReactNode;
}

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
    /** Column span (1-12) */
    span?: number | { sm?: number; md?: number; lg?: number; xl?: number };
    /** Start position */
    start?: number;
    /** End position */
    end?: number;
    children?: ReactNode;
}

const alignStyles = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
};

const justifyStyles = {
    start: 'justify-items-start',
    center: 'justify-items-center',
    end: 'justify-items-end',
    stretch: 'justify-items-stretch',
};

/**
 * Grid component for CSS Grid layouts
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
    (
        {
            columns = 12,
            gap,
            rowGap,
            columnGap,
            align = 'stretch',
            justify = 'stretch',
            className,
            style,
            children,
            ...props
        },
        ref
    ) => {
        const getGridColumns = () => {
            if (typeof columns === 'number') {
                return `repeat(${columns}, minmax(0, 1fr))`;
            }
            // For responsive, we'll use the largest defined
            return `repeat(${columns.xl || columns.lg || columns.md || columns.sm || 12}, minmax(0, 1fr))`;
        };

        const gridStyle: React.CSSProperties = {
            display: 'grid',
            gridTemplateColumns: getGridColumns(),
            gap: gap !== undefined ? (typeof gap === 'number' ? `${gap * 4}px` : gap) : undefined,
            rowGap: rowGap !== undefined ? (typeof rowGap === 'number' ? `${rowGap * 4}px` : rowGap) : undefined,
            columnGap: columnGap !== undefined ? (typeof columnGap === 'number' ? `${columnGap * 4}px` : columnGap) : undefined,
            ...style,
        };

        return (
            <div
                ref={ref}
                className={cn(
                    'x-grid',
                    alignStyles[align],
                    justifyStyles[justify],
                    className
                )}
                style={gridStyle}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Grid.displayName = 'Grid';

/**
 * Col component for Grid children
 */
export const Col = forwardRef<HTMLDivElement, ColProps>(
    (
        {
            span = 1,
            start,
            end,
            className,
            style,
            children,
            ...props
        },
        ref
    ) => {
        const getSpan = () => {
            if (typeof span === 'number') {
                return `span ${span} / span ${span}`;
            }
            const cols = span.xl || span.lg || span.md || span.sm || 1;
            return `span ${cols} / span ${cols}`;
        };

        const colStyle: React.CSSProperties = {
            gridColumn: start || end
                ? `${start || 'auto'} / ${end || 'auto'}`
                : getSpan(),
            ...style,
        };

        return (
            <div
                ref={ref}
                className={cn('x-col', className)}
                style={colStyle}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Col.displayName = 'Col';

// Row shorthand for Grid with single row
export const Row = forwardRef<HTMLDivElement, Omit<GridProps, 'columns'>>(
    (props, ref) => <Grid ref={ref} columns={12} {...props} />
);
Row.displayName = 'Row';
