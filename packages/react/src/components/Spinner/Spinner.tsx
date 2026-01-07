'use client';

import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    /** Spinner size */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Color */
    color?: 'primary' | 'secondary' | 'white' | 'current';
    /** Speed of animation */
    speed?: 'slow' | 'normal' | 'fast';
    /** Loading label for accessibility */
    label?: string;
}

const sizeStyles = {
    xs: 'h-3 w-3 border-[1.5px]',
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-2',
    lg: 'h-8 w-8 border-[3px]',
    xl: 'h-12 w-12 border-4',
};

const colorStyles = {
    primary: 'border-[var(--x-primary)] border-t-transparent',
    secondary: 'border-[var(--x-secondary)] border-t-transparent',
    white: 'border-white border-t-transparent',
    current: 'border-current border-t-transparent',
};

const speedStyles = {
    slow: 'animate-[spin_1.2s_linear_infinite]',
    normal: 'animate-[spin_0.75s_linear_infinite]',
    fast: 'animate-[spin_0.5s_linear_infinite]',
};

/**
 * Spinner component
 * A loading spinner indicator
 */
export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
    (
        {
            size = 'md',
            color = 'primary',
            speed = 'normal',
            label = 'Loading...',
            className,
            ...props
        },
        ref
    ) => {
        return (
            <div ref={ref} role="status" className={cn('inline-flex', className)} {...props}>
                <div
                    className={cn(
                        'rounded-full',
                        sizeStyles[size],
                        colorStyles[color],
                        speedStyles[speed]
                    )}
                />
                <span className="sr-only">{label}</span>
            </div>
        );
    }
);

Spinner.displayName = 'Spinner';
