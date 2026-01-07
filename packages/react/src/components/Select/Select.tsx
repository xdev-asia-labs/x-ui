'use client';

import React, { forwardRef, SelectHTMLAttributes, ReactNode } from 'react';
import { cn, generateId } from '@xdev-asia/x-ui-core';

export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    /** Options to display */
    options: SelectOption[];
    /** Placeholder text */
    placeholder?: string;
    /** Variant */
    variant?: 'outline' | 'filled' | 'glass';
    /** Size */
    size?: 'sm' | 'md' | 'lg';
    /** Error state */
    isInvalid?: boolean;
    /** Disabled */
    isDisabled?: boolean;
    /** Label */
    label?: string;
    /** Error message */
    errorMessage?: string;
    /** Icon on left */
    leftIcon?: ReactNode;
}

const variantStyles = {
    outline: 'border border-[var(--x-input)] bg-transparent focus:border-[var(--x-ring)]',
    filled: 'border border-transparent bg-[var(--x-muted)] focus:bg-transparent focus:border-[var(--x-ring)]',
    glass: 'border border-[var(--x-glass-border)] bg-[var(--x-glass-bg)] backdrop-blur-lg focus:border-[var(--x-ring)]',
};

const sizeStyles = {
    sm: 'h-8 text-sm px-3 pr-8',
    md: 'h-10 text-sm px-4 pr-10',
    lg: 'h-12 text-base px-4 pr-12',
};

/**
 * Select dropdown component
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    (
        {
            options,
            placeholder,
            variant = 'outline',
            size = 'md',
            isInvalid = false,
            isDisabled = false,
            label,
            errorMessage,
            leftIcon,
            className,
            id,
            ...props
        },
        ref
    ) => {
        const inputId = id || generateId('select');

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

                <div className="relative">
                    {leftIcon && (
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--x-mutedForeground)] pointer-events-none">
                            {leftIcon}
                        </span>
                    )}

                    <select
                        ref={ref}
                        id={inputId}
                        className={cn(
                            'w-full rounded-lg appearance-none cursor-pointer transition-colors duration-200',
                            'text-[var(--x-foreground)]',
                            'focus:outline-none focus:ring-2 focus:ring-[var(--x-ring)]/30',
                            'disabled:opacity-50 disabled:cursor-not-allowed',
                            variantStyles[variant],
                            sizeStyles[size],
                            !!leftIcon && 'pl-10',
                            isInvalid && 'border-[var(--x-destructive)]',
                            className
                        )}
                        disabled={isDisabled}
                        {...props}
                    >
                        {placeholder && (
                            <option value="" disabled>
                                {placeholder}
                            </option>
                        )}
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                                {opt.label}
                            </option>
                        ))}
                    </select>

                    {/* Chevron icon */}
                    <svg
                        className={cn(
                            'absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--x-mutedForeground)]',
                            size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'
                        )}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>

                {errorMessage && isInvalid && (
                    <p className="mt-1.5 text-sm text-[var(--x-destructive)]">{errorMessage}</p>
                )}
            </div>
        );
    }
);

Select.displayName = 'Select';
