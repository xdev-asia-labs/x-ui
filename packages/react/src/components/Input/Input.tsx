'use client';

import React, { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { cn, generateId } from '@xdev-asia/x-ui-core';

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

const variantStyles = {
    outline: 'border border-[var(--x-input)] bg-transparent focus:border-[var(--x-ring)]',
    filled: 'border border-transparent bg-[var(--x-muted)] focus:bg-transparent focus:border-[var(--x-ring)]',
    flushed: 'border-b border-[var(--x-input)] rounded-none bg-transparent focus:border-[var(--x-ring)] px-0',
    glass: 'border border-[var(--x-glass-border)] bg-[var(--x-glass-bg)] backdrop-blur-lg focus:border-[var(--x-ring)]',
};

const sizeStyles = {
    sm: 'h-8 text-sm px-3',
    md: 'h-10 text-sm px-4',
    lg: 'h-12 text-base px-4',
};

/**
 * Input component
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
        const inputId = id || generateId('input');

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-[var(--x-foreground)] mb-1.5"
                    >
                        {label}
                    </label>
                )}

                <div className="relative flex">
                    {leftAddon && (
                        <span className="inline-flex items-center px-3 bg-[var(--x-muted)] border border-r-0 border-[var(--x-input)] rounded-l-lg text-[var(--x-mutedForeground)] text-sm">
                            {leftAddon}
                        </span>
                    )}

                    <div className="relative flex-1">
                        {leftIcon && (
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--x-mutedForeground)]">
                                {leftIcon}
                            </span>
                        )}

                        <input
                            ref={ref}
                            id={inputId}
                            className={cn(
                                'w-full rounded-lg transition-colors duration-200',
                                'text-[var(--x-foreground)] placeholder:text-[var(--x-mutedForeground)]',
                                'focus:outline-none focus:ring-2 focus:ring-[var(--x-ring)]/30',
                                'disabled:opacity-50 disabled:cursor-not-allowed',
                                variantStyles[variant],
                                sizeStyles[size],
                                !!leftIcon && 'pl-10',
                                !!rightIcon && 'pr-10',
                                !!leftAddon && 'rounded-l-none',
                                !!rightAddon && 'rounded-r-none',
                                isInvalid && 'border-[var(--x-destructive)] focus:border-[var(--x-destructive)] focus:ring-[var(--x-destructive)]/30',
                                className
                            )}
                            disabled={isDisabled}
                            readOnly={isReadOnly}
                            aria-invalid={isInvalid}
                            aria-describedby={errorMessage ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
                            {...props}
                        />

                        {rightIcon && (
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--x-mutedForeground)]">
                                {rightIcon}
                            </span>
                        )}
                    </div>

                    {rightAddon && (
                        <span className="inline-flex items-center px-3 bg-[var(--x-muted)] border border-l-0 border-[var(--x-input)] rounded-r-lg text-[var(--x-mutedForeground)] text-sm">
                            {rightAddon}
                        </span>
                    )}
                </div>

                {errorMessage && isInvalid && (
                    <p id={`${inputId}-error`} className="mt-1.5 text-sm text-[var(--x-destructive)]">
                        {errorMessage}
                    </p>
                )}

                {helperText && !isInvalid && (
                    <p id={`${inputId}-helper`} className="mt-1.5 text-sm text-[var(--x-mutedForeground)]">
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
