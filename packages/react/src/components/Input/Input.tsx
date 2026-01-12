'use client';

import React, { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /** Input variant */
    variant?: 'outline' | 'filled' | 'flushed' | 'glass';
    /** Input size */
    size?: 'sm' | 'md' | 'lg';
    /** Show error state */
    isInvalid?: boolean;
    /** Disable the input */
    isDisabled?: boolean;
    /** Make input read-only */
    isReadOnly?: boolean;
    /** Left addon element */
    leftAddon?: ReactNode;
    /** Right addon element */
    rightAddon?: ReactNode;
    /** Left icon */
    leftIcon?: ReactNode;
    /** Right icon */
    rightIcon?: ReactNode;
    /** Error message */
    errorMessage?: string;
    /** Helper text */
    helperText?: string;
    /** Label text */
    label?: string;
}

// Liquid Glass inspired styles
const variantStyles = {
    outline: `
        border border-white/[0.1] bg-white/[0.02]
        focus:border-[var(--x-ring)] focus:bg-white/[0.04]
        hover:border-white/[0.15] hover:bg-white/[0.03]
    `,
    filled: `
        border border-transparent bg-white/[0.06]
        focus:bg-white/[0.08] focus:border-[var(--x-ring)]
        hover:bg-white/[0.08]
    `,
    flushed: `
        border-b border-white/[0.15] rounded-none bg-transparent px-0
        focus:border-[var(--x-ring)]
        hover:border-white/[0.2]
    `,
    glass: `
        border border-white/[0.1] bg-white/[0.06] backdrop-blur-xl
        focus:border-[var(--x-ring)] focus:bg-white/[0.08]
        hover:border-white/[0.15] hover:bg-white/[0.08]
        shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
    `,
};

const sizeStyles = {
    sm: 'h-9 text-sm px-3 rounded-xl',
    md: 'h-11 text-sm px-4 rounded-xl',
    lg: 'h-13 text-base px-5 rounded-2xl',
};

/**
 * Input component with Liquid Glass design
 * A text input with multiple variants and features
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            variant = 'outline',
            size = 'md',
            isInvalid = false,
            isDisabled = false,
            isReadOnly = false,
            leftIcon,
            rightIcon,
            leftAddon,
            rightAddon,
            errorMessage,
            helperText,
            label,
            className,
            id,
            ...props
        },
        ref
    ) => {
        const reactId = useId();
        const inputId = id || `input${reactId}`;

        return (
            <div className="x-input-wrapper w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="x-input-label block text-sm font-medium text-[var(--x-foreground)] mb-2"
                    >
                        {label}
                    </label>
                )}

                <div className="relative flex">
                    {leftAddon && (
                        <span className="inline-flex items-center px-4 bg-white/[0.06] border border-r-0 border-white/[0.1] rounded-l-xl text-[var(--x-mutedForeground)] text-sm backdrop-blur-sm">
                            {leftAddon}
                        </span>
                    )}

                    <div className="relative flex-1">
                        {leftIcon && (
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--x-mutedForeground)]">
                                {leftIcon}
                            </span>
                        )}

                        <input
                            ref={ref}
                            id={inputId}
                            className={cn(
                                // X-UI identifier classes
                                'x-input',
                                `x-input-${variant}`,
                                `x-input-${size}`,
                                // Base Liquid Glass styles
                                'w-full transition-all duration-200 ease-out',
                                'text-[var(--x-foreground)] placeholder:text-[var(--x-mutedForeground)]/60',
                                'focus:outline-none focus:ring-2 focus:ring-[var(--x-ring)]/20',
                                'disabled:opacity-50 disabled:cursor-not-allowed',
                                // Variant styles
                                variantStyles[variant],
                                // Size styles
                                sizeStyles[size],
                                // Icon padding
                                !!leftIcon && 'pl-11',
                                !!rightIcon && 'pr-11',
                                // Addon rounding
                                !!leftAddon && 'rounded-l-none',
                                !!rightAddon && 'rounded-r-none',
                                // Error state
                                isInvalid && 'border-[var(--x-destructive)] focus:border-[var(--x-destructive)] focus:ring-[var(--x-destructive)]/20',
                                className
                            )}
                            disabled={isDisabled}
                            readOnly={isReadOnly}
                            aria-invalid={isInvalid}
                            aria-describedby={errorMessage ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
                            {...props}
                        />

                        {rightIcon && (
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--x-mutedForeground)]">
                                {rightIcon}
                            </span>
                        )}
                    </div>

                    {rightAddon && (
                        <span className="inline-flex items-center px-4 bg-white/[0.06] border border-l-0 border-white/[0.1] rounded-r-xl text-[var(--x-mutedForeground)] text-sm backdrop-blur-sm">
                            {rightAddon}
                        </span>
                    )}
                </div>

                {errorMessage && isInvalid && (
                    <p id={`${inputId}-error`} className="x-input-error mt-2 text-sm text-[var(--x-destructive)]">
                        {errorMessage}
                    </p>
                )}

                {helperText && !isInvalid && (
                    <p id={`${inputId}-helper`} className="x-input-helper mt-2 text-sm text-[var(--x-mutedForeground)]">
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
