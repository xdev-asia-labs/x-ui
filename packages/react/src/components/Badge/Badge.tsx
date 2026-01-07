'use client';

import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    /** Badge variant */
    variant?: 'solid' | 'outline' | 'subtle' | 'glass';
    /** Color scheme */
    colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
    /** Badge size */
    size?: 'sm' | 'md' | 'lg';
    /** Make badge rounded (pill shape) */
    rounded?: boolean;
    /** Left icon/dot */
    leftIcon?: ReactNode;
    children?: ReactNode;
}

const sizeStyles = {
    sm: 'px-1.5 py-0.5 text-xs',
    md: 'px-2 py-0.5 text-xs',
    lg: 'px-2.5 py-1 text-sm',
};

const colorSchemes = {
    primary: {
        solid: 'bg-[var(--x-primary)] text-white',
        outline: 'border border-[var(--x-primary)] text-[var(--x-primary)]',
        subtle: 'bg-[var(--x-primary)]/10 text-[var(--x-primary)]',
        glass: 'bg-[var(--x-primary)]/20 backdrop-blur-sm text-[var(--x-primary)] border border-[var(--x-primary)]/30',
    },
    secondary: {
        solid: 'bg-[var(--x-secondary)] text-white',
        outline: 'border border-[var(--x-secondary)] text-[var(--x-secondary)]',
        subtle: 'bg-[var(--x-secondary)]/10 text-[var(--x-secondary)]',
        glass: 'bg-[var(--x-secondary)]/20 backdrop-blur-sm text-[var(--x-secondary)] border border-[var(--x-secondary)]/30',
    },
    success: {
        solid: 'bg-emerald-500 text-white',
        outline: 'border border-emerald-500 text-emerald-500',
        subtle: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
        glass: 'bg-emerald-500/20 backdrop-blur-sm text-emerald-600 border border-emerald-500/30',
    },
    warning: {
        solid: 'bg-amber-500 text-white',
        outline: 'border border-amber-500 text-amber-500',
        subtle: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
        glass: 'bg-amber-500/20 backdrop-blur-sm text-amber-600 border border-amber-500/30',
    },
    error: {
        solid: 'bg-red-500 text-white',
        outline: 'border border-red-500 text-red-500',
        subtle: 'bg-red-500/10 text-red-600 dark:text-red-400',
        glass: 'bg-red-500/20 backdrop-blur-sm text-red-600 border border-red-500/30',
    },
    neutral: {
        solid: 'bg-[var(--x-muted)] text-[var(--x-mutedForeground)]',
        outline: 'border border-[var(--x-border)] text-[var(--x-mutedForeground)]',
        subtle: 'bg-[var(--x-muted)] text-[var(--x-mutedForeground)]',
        glass: 'bg-[var(--x-glass-bg)] backdrop-blur-sm text-[var(--x-mutedForeground)] border border-[var(--x-glass-border)]',
    },
};

/**
 * Badge component
 * A small status descriptor for UI elements
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    (
        {
            variant = 'solid',
            colorScheme = 'primary',
            size = 'md',
            rounded = true,
            leftIcon,
            className,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <span
                ref={ref}
                className={cn(
                    'inline-flex items-center gap-1 font-medium',
                    sizeStyles[size],
                    colorSchemes[colorScheme][variant],
                    rounded ? 'rounded-full' : 'rounded',
                    className
                )}
                {...props}
            >
                {leftIcon}
                {children}
            </span>
        );
    }
);

Badge.displayName = 'Badge';
