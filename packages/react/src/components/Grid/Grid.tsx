'use client';

import React, { forwardRef, HTMLAttributes, ReactNode, useId, useMemo, useEffect, useState } from 'react';
import { cn, breakpoints } from '@xdev-asia/x-ui-core';

type BreakpointKey = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ResponsiveValue<T> {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    '2xl'?: T;
}

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    /** Number of columns (1-12) or responsive object */
    columns?: number | ResponsiveValue<number>;
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
    /** Column span (1-12) or responsive object */
    span?: number | ResponsiveValue<number>;
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

// Inject CSS once per unique className
const injectedStyles = new Set<string>();

function injectCSS(css: string, id: string) {
    if (typeof window === 'undefined') return;
    if (injectedStyles.has(id)) return;

    const styleEl = document.createElement('style');
    styleEl.setAttribute('data-x-grid', id);
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
    injectedStyles.add(id);
}

function isResponsiveValue<T>(value: T | ResponsiveValue<T>): value is ResponsiveValue<T> {
    return typeof value === 'object' && value !== null &&
        ('base' in value || 'sm' in value || 'md' in value || 'lg' in value || 'xl' in value || '2xl' in value);
}

function generateResponsiveCSS(
    className: string,
    property: string,
    values: ResponsiveValue<number>,
    valueFormatter: (val: number) => string
): string {
    let css = '';
    const breakpointOrder: BreakpointKey[] = ['base', 'sm', 'md', 'lg', 'xl', '2xl'];

    for (const bp of breakpointOrder) {
        const value = values[bp];
        if (value !== undefined) {
            const formattedValue = valueFormatter(value);

            if (bp === 'base') {
                css += `.${className} { ${property}: ${formattedValue}; }\n`;
            } else {
                const minWidth = breakpoints[bp as keyof typeof breakpoints];
                css += `@media (min-width: ${minWidth}px) { .${className} { ${property}: ${formattedValue}; } }\n`;
            }
        }
    }

    return css;
}

// Get first defined value for SSR fallback
function getFirstValue<T>(values: ResponsiveValue<T>): T | undefined {
    const order: BreakpointKey[] = ['base', 'sm', 'md', 'lg', 'xl', '2xl'];
    for (const bp of order) {
        if (values[bp] !== undefined) return values[bp];
    }
    return undefined;
}

/**
 * Grid component for CSS Grid layouts with responsive support
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
        const uniqueId = useId().replace(/:/g, '').replace(/r/g, '');
        const gridClassName = `x-grid-r${uniqueId}`;
        const [mounted, setMounted] = useState(false);

        const { responsiveCSS, baseColumns } = useMemo(() => {
            if (isResponsiveValue(columns)) {
                const css = generateResponsiveCSS(
                    gridClassName,
                    'grid-template-columns',
                    columns,
                    (val) => `repeat(${val}, minmax(0, 1fr))`
                );
                const base = getFirstValue(columns) || 12;
                return { responsiveCSS: css, baseColumns: base };
            }
            return { responsiveCSS: '', baseColumns: columns };
        }, [columns, gridClassName]);

        useEffect(() => {
            if (responsiveCSS) {
                injectCSS(responsiveCSS, gridClassName);
            }
            setMounted(true);
        }, [responsiveCSS, gridClassName]);

        const gridStyle: React.CSSProperties = {
            display: 'grid',
            // Only use inline style if not responsive, or as SSR fallback
            gridTemplateColumns: isResponsiveValue(columns) && mounted
                ? undefined  // Let CSS handle it
                : `repeat(${baseColumns}, minmax(0, 1fr))`,
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
                    isResponsiveValue(columns) && gridClassName,
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
 * Col component for Grid children with responsive span support
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
        const uniqueId = useId().replace(/:/g, '').replace(/r/g, '');
        const colClassName = `x-col-r${uniqueId}`;
        const [mounted, setMounted] = useState(false);

        const { responsiveCSS, baseSpan } = useMemo(() => {
            if (isResponsiveValue(span)) {
                const css = generateResponsiveCSS(
                    colClassName,
                    'grid-column',
                    span,
                    (val) => `span ${val} / span ${val}`
                );
                const base = getFirstValue(span) || 1;
                return { responsiveCSS: css, baseSpan: base };
            }
            return { responsiveCSS: '', baseSpan: span };
        }, [span, colClassName]);

        useEffect(() => {
            if (responsiveCSS) {
                injectCSS(responsiveCSS, colClassName);
            }
            setMounted(true);
        }, [responsiveCSS, colClassName]);

        const colStyle: React.CSSProperties = {
            gridColumn: start || end
                ? `${start || 'auto'} / ${end || 'auto'}`
                : isResponsiveValue(span) && mounted
                    ? undefined  // Let CSS handle it
                    : `span ${baseSpan} / span ${baseSpan}`,
            ...style,
        };

        return (
            <div
                ref={ref}
                className={cn('x-col', isResponsiveValue(span) && colClassName, className)}
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

export type { BreakpointKey };
