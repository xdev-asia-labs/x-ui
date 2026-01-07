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

// Liquid Glass sizing with better padding
const sizeStyles = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-xs',
    lg: 'px-3 py-1.5 text-sm',
};

// Liquid Glass color schemes
const colorSchemes = {
    primary: {
        solid: 'bg-[var(--x-primary)] text-white shadow-[0_2px_8px_rgba(99,102,241,0.25)]',
        outline: 'border border-[var(--x-primary)]/60 text-[var(--x-primary)] bg-[var(--x-primary)]/5',
        subtle: 'bg-[var(--x-primary)]/15 text-[var(--x-primary)]',
        glass: 'bg-[var(--x-primary)]/15 backdrop-blur-xl text-[var(--x-primary)] border border-[var(--x-primary)]/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]',
    },
    secondary: {
        solid: 'bg-[var(--x-secondary)] text-[var(--x-secondaryForeground)] shadow-[0_2px_8px_rgba(0,0,0,0.15)]',
        outline: 'border border-white/20 text-[var(--x-foreground)] bg-white/5',
        subtle: 'bg-white/10 text-[var(--x-foreground)]',
        glass: 'bg-white/10 backdrop-blur-xl text-[var(--x-foreground)] border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]',
    },
    success: {
        solid: 'bg-emerald-500 text-white shadow-[0_2px_8px_rgba(16,185,129,0.25)]',
        outline: 'border border-emerald-500/60 text-emerald-500 bg-emerald-500/5',
        subtle: 'bg-emerald-500/15 text-emerald-400',
        glass: 'bg-emerald-500/15 backdrop-blur-xl text-emerald-400 border border-emerald-500/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]',
    },
    warning: {
        solid: 'bg-amber-500 text-white shadow-[0_2px_8px_rgba(245,158,11,0.25)]',
        outline: 'border border-amber-500/60 text-amber-500 bg-amber-500/5',
        subtle: 'bg-amber-500/15 text-amber-400',
        glass: 'bg-amber-500/15 backdrop-blur-xl text-amber-400 border border-amber-500/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]',
    },
    error: {
        solid: 'bg-red-500 text-white shadow-[0_2px_8px_rgba(239,68,68,0.25)]',
        outline: 'border border-red-500/60 text-red-500 bg-red-500/5',
        subtle: 'bg-red-500/15 text-red-400',
        glass: 'bg-red-500/15 backdrop-blur-xl text-red-400 border border-red-500/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]',
    },
    neutral: {
        solid: 'bg-white/15 text-[var(--x-foreground)] shadow-[0_2px_8px_rgba(0,0,0,0.1)]',
        outline: 'border border-white/15 text-[var(--x-mutedForeground)] bg-transparent',
        subtle: 'bg-white/8 text-[var(--x-mutedForeground)]',
        glass: 'bg-white/8 backdrop-blur-xl text-[var(--x-mutedForeground)] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]',
    },
};

/**
 * Badge component with Liquid Glass design
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
                    // Base Liquid Glass styles
                    'inline-flex items-center gap-1.5 font-semibold',
                    'transition-all duration-200',
                    // Size
                    sizeStyles[size],
                    // Color scheme + variant
                    colorSchemes[colorScheme][variant],
                    // Rounded
                    rounded ? 'rounded-full' : 'rounded-lg',
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
