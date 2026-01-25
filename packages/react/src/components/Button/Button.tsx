'use client';

import React, { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Button variant style */
    variant?: 'solid' | 'outline' | 'ghost' | 'glass' | 'link' | 'primary';
    /** Button size */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Color scheme */
    colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
    /** Show loading spinner */
    isLoading?: boolean;
    /** Disable the button */
    isDisabled?: boolean;
    /** Full width button */
    fullWidth?: boolean;
    /** Left icon */
    leftIcon?: ReactNode;
    /** Right icon */
    rightIcon?: ReactNode;
    /** Button content */
    children?: ReactNode;
}

// Liquid Glass inspired styles
const variantStyles = {
    solid: `
        bg-[var(--btn-bg)] text-[var(--btn-fg)]
        shadow-[0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1)]
        hover:shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]
        hover:brightness-110
        active:scale-[0.98] active:shadow-[0_1px_4px_rgba(0,0,0,0.15)]
    `,
    primary: `
        bg-[var(--btn-bg)] text-[var(--btn-fg)]
        shadow-[0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1)]
        hover:shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.15)]
        hover:brightness-110
        active:scale-[0.98] active:shadow-[0_1px_4px_rgba(0,0,0,0.15)]
    `,
    outline: `
        border-2 border-[var(--btn-bg)] text-[var(--btn-bg)] bg-transparent
        hover:bg-[var(--btn-bg)]/10
        active:bg-[var(--btn-bg)]/20 active:scale-[0.98]
    `,
    ghost: `
        text-[var(--btn-bg)] bg-transparent
        hover:bg-[var(--btn-bg)]/10
        active:bg-[var(--btn-bg)]/15 active:scale-[0.98]
    `,
    glass: `
        bg-white/[0.08] backdrop-blur-xl
        border border-white/[0.12]
        text-[var(--x-foreground)]
        shadow-[0_4px_24px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.1)]
        hover:bg-white/[0.12] hover:border-white/[0.18]
        hover:shadow-[0_8px_32px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.15)]
        active:scale-[0.98] active:bg-white/[0.15]
    `,
    link: 'text-[var(--btn-bg)] bg-transparent underline-offset-4 hover:underline p-0',
};

// Liquid Glass rounded corners
const sizeStyles = {
    xs: 'h-7 px-3 text-xs gap-1.5 rounded-lg',
    sm: 'h-8 px-3.5 text-sm gap-1.5 rounded-xl',
    md: 'h-10 px-5 text-sm gap-2 rounded-xl',
    lg: 'h-12 px-6 text-base gap-2.5 rounded-2xl',
    xl: 'h-14 px-8 text-lg gap-3 rounded-2xl',
};

const colorSchemeVars = {
    primary: { '--btn-bg': 'var(--x-primary)', '--btn-fg': 'var(--x-primaryForeground)' },
    secondary: { '--btn-bg': 'var(--x-secondary)', '--btn-fg': 'var(--x-secondaryForeground)' },
    success: { '--btn-bg': 'rgb(16, 185, 129)', '--btn-fg': '#FFFFFF' },
    warning: { '--btn-bg': 'rgb(245, 158, 11)', '--btn-fg': '#FFFFFF' },
    error: { '--btn-bg': 'var(--x-destructive)', '--btn-fg': 'var(--x-destructiveForeground)' },
    neutral: { '--btn-bg': 'var(--x-muted)', '--btn-fg': 'var(--x-mutedForeground)' },
};

/**
 * Button component with Liquid Glass design
 * A customizable button with multiple variants, sizes, and color schemes
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'solid',
            size = 'md',
            colorScheme = 'primary',
            isLoading = false,
            isDisabled = false,
            fullWidth = false,
            leftIcon,
            rightIcon,
            className,
            children,
            style,
            ...props
        },
        ref
    ) => {
        const disabled = isDisabled || isLoading;

        return (
            <button
                ref={ref}
                className={cn(
                    // X-UI identifier classes
                    'x-button',
                    `x-button-${variant}`,
                    `x-button-${size}`,
                    // Base styles with Liquid Glass aesthetics
                    'inline-flex items-center justify-center font-semibold cursor-pointer',
                    'transition-all duration-200 ease-out',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--x-ring)] focus-visible:ring-offset-2',
                    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
                    // Variant styles
                    variantStyles[variant],
                    // Size styles
                    sizeStyles[size],
                    // Full width
                    fullWidth && 'w-full',
                    className
                )}
                style={{
                    ...colorSchemeVars[colorScheme],
                    ...style,
                } as React.CSSProperties}
                disabled={disabled}
                {...props}
            >
                {isLoading ? (
                    <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                ) : (
                    leftIcon
                )}
                {children}
                {!isLoading && rightIcon}
            </button>
        );
    }
);

Button.displayName = 'Button';
