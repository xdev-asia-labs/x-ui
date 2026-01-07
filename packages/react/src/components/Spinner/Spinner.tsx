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

// Liquid Glass sizing
const sizeStyles = {
    xs: 'h-4 w-4 border-[1.5px]',
    sm: 'h-5 w-5 border-2',
    md: 'h-7 w-7 border-2',
    lg: 'h-10 w-10 border-[3px]',
    xl: 'h-14 w-14 border-4',
};

// Colors with glow effects
const colorStyles = {
    primary: 'border-[var(--x-primary)]/30 border-t-[var(--x-primary)]',
    secondary: 'border-[var(--x-secondary)]/30 border-t-[var(--x-secondary)]',
    white: 'border-white/30 border-t-white',
    current: 'border-current/30 border-t-current',
};

// Glow shadows per color
const glowStyles = {
    primary: 'drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]',
    secondary: 'drop-shadow-[0_0_8px_rgba(100,116,139,0.4)]',
    white: 'drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]',
    current: '',
};

const speedStyles = {
    slow: 'animate-[spin_1.2s_linear_infinite]',
    normal: 'animate-[spin_0.8s_linear_infinite]',
    fast: 'animate-[spin_0.5s_linear_infinite]',
};

/**
 * Spinner component with Liquid Glass design
 * A loading spinner indicator with glow effect
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
                        speedStyles[speed],
                        glowStyles[color]
                    )}
                />
                <span className="sr-only">{label}</span>
            </div>
        );
    }
);

Spinner.displayName = 'Spinner';
