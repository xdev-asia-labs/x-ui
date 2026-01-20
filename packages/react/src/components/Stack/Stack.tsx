'use client';

import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
    /** Direction */
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    /** Spacing */
    spacing?: number;
    /** Align items */
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    /** Justify content */
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    /** Wrap items */
    wrap?: boolean;
    /** Add dividers between items */
    divider?: ReactNode;
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
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
};

/**
 * Stack component for flexbox layouts
 */
export const Stack = forwardRef<HTMLDivElement, StackProps>(
    (
        {
            direction = 'column',
            spacing = 4,
            align = 'stretch',
            justify = 'start',
            wrap = false,
            divider,
            className,
            style,
            children,
            ...props
        },
        ref
    ) => {
        const childArray = React.Children.toArray(children).filter(Boolean);

        return (
            <div
                ref={ref}
                className={cn(
                    'x-stack',
                    'flex',
                    direction === 'row' && 'flex-row',
                    direction === 'column' && 'flex-col',
                    direction === 'row-reverse' && 'flex-row-reverse',
                    direction === 'column-reverse' && 'flex-col-reverse',
                    alignStyles[align],
                    justifyStyles[justify],
                    wrap && 'flex-wrap',
                    className
                )}
                style={{ gap: spacing * 4, ...style }}
                {...props}
            >
                {divider
                    ? childArray.map((child, i) => (
                        <React.Fragment key={i}>
                            {child}
                            {i < childArray.length - 1 && divider}
                        </React.Fragment>
                    ))
                    : children}
            </div>
        );
    }
);

Stack.displayName = 'Stack';

// HStack shorthand
export const HStack = forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
    ({ align = 'center', ...props }, ref) => <Stack ref={ref} direction="row" align={align} {...props} />
);
HStack.displayName = 'HStack';

// VStack shorthand
export const VStack = forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
    (props, ref) => <Stack ref={ref} direction="column" {...props} />
);
VStack.displayName = 'VStack';
