'use client';

import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
    /** Orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Variant */
    variant?: 'solid' | 'dashed' | 'dotted';
    /** Color */
    color?: 'default' | 'muted' | 'primary';
    /** Label in center */
    label?: string;
}

const variantStyles = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
};

const colorStyles = {
    default: 'border-[var(--x-border)]',
    muted: 'border-[var(--x-muted)]',
    primary: 'border-[var(--x-primary)]/30',
};

/**
 * Divider component
 */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(
    (
        {
            orientation = 'horizontal',
            variant = 'solid',
            color = 'default',
            label,
            className,
            ...props
        },
        ref
    ) => {
        if (label && orientation === 'horizontal') {
            return (
                <div
                    ref={ref}
                    className={cn('flex items-center gap-4', className)}
                    {...props}
                >
                    <div className={cn('flex-1 border-t', variantStyles[variant], colorStyles[color])} />
                    <span className="text-sm text-[var(--x-mutedForeground)] whitespace-nowrap">{label}</span>
                    <div className={cn('flex-1 border-t', variantStyles[variant], colorStyles[color])} />
                </div>
            );
        }

        return (
            <div
                ref={ref}
                className={cn(
                    orientation === 'horizontal' ? 'w-full border-t' : 'h-full border-l self-stretch',
                    variantStyles[variant],
                    colorStyles[color],
                    className
                )}
                role="separator"
                {...props}
            />
        );
    }
);

Divider.displayName = 'Divider';
