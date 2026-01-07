'use client';

import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    /** Tag variant */
    variant?: 'solid' | 'outline' | 'subtle';
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

const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-2.5 py-1 text-sm gap-1.5',
    lg: 'px-3 py-1.5 text-sm gap-2',
};

const colorSchemes = {
    primary: {
        solid: 'bg-[var(--x-primary)] text-white',
        outline: 'border border-[var(--x-primary)] text-[var(--x-primary)]',
        subtle: 'bg-[var(--x-primary)]/10 text-[var(--x-primary)]',
    },
    secondary: {
        solid: 'bg-[var(--x-secondary)] text-white',
        outline: 'border border-[var(--x-secondary)] text-[var(--x-secondary)]',
        subtle: 'bg-[var(--x-secondary)]/10 text-[var(--x-secondary)]',
    },
    success: {
        solid: 'bg-emerald-500 text-white',
        outline: 'border border-emerald-500 text-emerald-600',
        subtle: 'bg-emerald-500/10 text-emerald-600',
    },
    warning: {
        solid: 'bg-amber-500 text-white',
        outline: 'border border-amber-500 text-amber-600',
        subtle: 'bg-amber-500/10 text-amber-600',
    },
    error: {
        solid: 'bg-red-500 text-white',
        outline: 'border border-red-500 text-red-600',
        subtle: 'bg-red-500/10 text-red-600',
    },
    neutral: {
        solid: 'bg-[var(--x-muted)] text-[var(--x-mutedForeground)]',
        outline: 'border border-[var(--x-border)] text-[var(--x-mutedForeground)]',
        subtle: 'bg-[var(--x-muted)] text-[var(--x-mutedForeground)]',
    },
};

/**
 * Tag/Chip component
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
                    'inline-flex items-center font-medium',
                    sizeStyles[size],
                    colorSchemes[colorScheme][variant],
                    rounded ? 'rounded-full' : 'rounded',
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
                        className="ml-1 hover:opacity-70 transition-opacity focus:outline-none"
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
