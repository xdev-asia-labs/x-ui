'use client';

import React, { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Icon to display */
    icon: ReactNode;
    /** Button variant */
    variant?: 'solid' | 'outline' | 'ghost' | 'glass';
    /** Size */
    size?: 'sm' | 'md' | 'lg';
    /** Color */
    colorScheme?: 'primary' | 'secondary' | 'neutral';
    /** Rounded style */
    isRound?: boolean;
    /** Loading state */
    isLoading?: boolean;
    /** Aria label (required for accessibility) */
    'aria-label': string;
}

const sizeStyles = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
};

const variantStyles = {
    solid: 'bg-[var(--btn-bg)] text-[var(--btn-fg)] hover:opacity-90',
    outline: 'border border-[var(--btn-bg)] text-[var(--btn-bg)] hover:bg-[var(--btn-bg)]/10',
    ghost: 'text-[var(--btn-bg)] hover:bg-[var(--btn-bg)]/10',
    glass: 'bg-[var(--x-glass-bg)] backdrop-blur-lg border border-[var(--x-glass-border)] text-[var(--x-foreground)]',
};

const colorSchemes = {
    primary: { '--btn-bg': 'var(--x-primary)', '--btn-fg': '#fff' },
    secondary: { '--btn-bg': 'var(--x-secondary)', '--btn-fg': '#fff' },
    neutral: { '--btn-bg': 'var(--x-mutedForeground)', '--btn-fg': '#fff' },
};

/**
 * Icon-only button component
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    (
        {
            icon,
            variant = 'ghost',
            size = 'md',
            colorScheme = 'neutral',
            isRound = false,
            isLoading = false,
            className,
            disabled,
            style,
            ...props
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center transition-all duration-200 cursor-pointer',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--x-ring)]',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    sizeStyles[size],
                    variantStyles[variant],
                    isRound ? 'rounded-full' : 'rounded-lg',
                    className
                )}
                style={{ ...colorSchemes[colorScheme], ...style } as React.CSSProperties}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading ? (
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75" />
                    </svg>
                ) : (
                    icon
                )}
            </button>
        );
    }
);

IconButton.displayName = 'IconButton';
