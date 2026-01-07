'use client';

import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    /** Tag variant */
    variant?: 'solid' | 'outline' | 'subtle' | 'glass';
    /** Color scheme */
    colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
    /** Size */
    size?: 'sm' | 'md' | 'lg';
    /** Rounded */
    rounded?: boolean;
    /** Closable */
    closable?: boolean;
    /** On close callback */
    onClose?: () => void;
    /** Left icon */
    leftIcon?: ReactNode;
    children?: ReactNode;
}

// Liquid Glass sizing
const sizeStyles = {
    sm: 'px-2.5 py-1 text-xs gap-1.5',
    md: 'px-3 py-1.5 text-sm gap-2',
    lg: 'px-4 py-2 text-sm gap-2',
};

// Liquid Glass color schemes
const colorSchemes = {
    primary: {
        solid: 'bg-[var(--x-primary)] text-white shadow-[0_2px_8px_rgba(99,102,241,0.25)]',
        outline: 'border border-[var(--x-primary)]/50 text-[var(--x-primary)] bg-[var(--x-primary)]/5',
        subtle: 'bg-[var(--x-primary)]/15 text-[var(--x-primary)]',
        glass: 'bg-[var(--x-primary)]/10 backdrop-blur-xl text-[var(--x-primary)] border border-[var(--x-primary)]/20',
    },
    secondary: {
        solid: 'bg-white/15 text-[var(--x-foreground)] shadow-[0_2px_8px_rgba(0,0,0,0.15)]',
        outline: 'border border-white/20 text-[var(--x-foreground)] bg-transparent',
        subtle: 'bg-white/10 text-[var(--x-foreground)]',
        glass: 'bg-white/8 backdrop-blur-xl text-[var(--x-foreground)] border border-white/15',
    },
    success: {
        solid: 'bg-emerald-500 text-white shadow-[0_2px_8px_rgba(16,185,129,0.25)]',
        outline: 'border border-emerald-500/50 text-emerald-400 bg-emerald-500/5',
        subtle: 'bg-emerald-500/15 text-emerald-400',
        glass: 'bg-emerald-500/10 backdrop-blur-xl text-emerald-400 border border-emerald-500/20',
    },
    warning: {
        solid: 'bg-amber-500 text-white shadow-[0_2px_8px_rgba(245,158,11,0.25)]',
        outline: 'border border-amber-500/50 text-amber-400 bg-amber-500/5',
        subtle: 'bg-amber-500/15 text-amber-400',
        glass: 'bg-amber-500/10 backdrop-blur-xl text-amber-400 border border-amber-500/20',
    },
    error: {
        solid: 'bg-red-500 text-white shadow-[0_2px_8px_rgba(239,68,68,0.25)]',
        outline: 'border border-red-500/50 text-red-400 bg-red-500/5',
        subtle: 'bg-red-500/15 text-red-400',
        glass: 'bg-red-500/10 backdrop-blur-xl text-red-400 border border-red-500/20',
    },
    neutral: {
        solid: 'bg-white/15 text-[var(--x-foreground)]',
        outline: 'border border-white/15 text-[var(--x-mutedForeground)] bg-transparent',
        subtle: 'bg-white/8 text-[var(--x-mutedForeground)]',
        glass: 'bg-white/6 backdrop-blur-xl text-[var(--x-mutedForeground)] border border-white/10',
    },
};

/**
 * Tag/Chip component with Liquid Glass design
 */
export const Tag = forwardRef<HTMLSpanElement, TagProps>(
    (
        {
            variant = 'subtle',
            colorScheme = 'neutral',
            size = 'md',
            rounded = true,
            closable = false,
            onClose,
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
                    'inline-flex items-center font-medium',
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
                {closable && (
                    <button
                        type="button"
                        onClick={onClose}
                        className={cn(
                            'ml-1 p-0.5 rounded-full',
                            'hover:bg-white/20 active:bg-white/30',
                            'transition-all duration-150',
                            'focus:outline-none focus:ring-2 focus:ring-white/30'
                        )}
                        aria-label="Remove"
                    >
                        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                            <path d="M3.172 3.172a.5.5 0 01.707 0L6 5.293l2.121-2.121a.5.5 0 11.707.707L6.707 6l2.121 2.121a.5.5 0 11-.707.707L6 6.707 3.879 8.828a.5.5 0 11-.707-.707L5.293 6 3.172 3.879a.5.5 0 010-.707z" />
                        </svg>
                    </button>
                )}
            </span>
        );
    }
);

Tag.displayName = 'Tag';
