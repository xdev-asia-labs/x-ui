'use client';

import React, { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { cn, generateId } from '@xdev-asia/x-ui-core';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    /** Checkbox size */
    size?: 'sm' | 'md' | 'lg';
    /** Color when checked */
    colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    /** Label text */
    label?: ReactNode;
    /** Description text */
    description?: string;
    /** Disabled state */
    isDisabled?: boolean;
    /** Indeterminate state */
    isIndeterminate?: boolean;
}

const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
};

const colorStyles = {
    primary: 'checked:bg-[var(--x-primary)] checked:border-[var(--x-primary)]',
    secondary: 'checked:bg-[var(--x-secondary)] checked:border-[var(--x-secondary)]',
    success: 'checked:bg-emerald-500 checked:border-emerald-500',
    warning: 'checked:bg-amber-500 checked:border-amber-500',
    error: 'checked:bg-red-500 checked:border-red-500',
};

/**
 * Checkbox component
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            size = 'md',
            colorScheme = 'primary',
            label,
            description,
            isDisabled = false,
            isIndeterminate = false,
            className,
            id,
            ...props
        },
        ref
    ) => {
        const inputId = id || generateId('checkbox');

        return (
            <label
                htmlFor={inputId}
                className={cn(
                    'inline-flex items-start gap-3 cursor-pointer',
                    isDisabled && 'opacity-50 cursor-not-allowed',
                    className
                )}
            >
                <div className="relative flex items-center justify-center">
                    <input
                        ref={ref}
                        type="checkbox"
                        id={inputId}
                        className={cn(
                            'appearance-none border-2 border-[var(--x-border)] rounded transition-all duration-200',
                            'focus:outline-none focus:ring-2 focus:ring-[var(--x-ring)]/30 focus:ring-offset-2',
                            colorStyles[colorScheme],
                            sizeStyles[size]
                        )}
                        disabled={isDisabled}
                        {...props}
                    />
                    <svg
                        className={cn(
                            'absolute pointer-events-none text-white opacity-0 transition-opacity',
                            'peer-checked:opacity-100',
                            size === 'sm' ? 'w-2.5 h-2.5' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'
                        )}
                        viewBox="0 0 12 12"
                        fill="none"
                    >
                        {isIndeterminate ? (
                            <line x1="2" y1="6" x2="10" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        ) : (
                            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        )}
                    </svg>
                </div>

                {(label || description) && (
                    <div className="flex flex-col">
                        {label && <span className="text-sm font-medium text-[var(--x-foreground)]">{label}</span>}
                        {description && <span className="text-xs text-[var(--x-mutedForeground)]">{description}</span>}
                    </div>
                )}
            </label>
        );
    }
);

Checkbox.displayName = 'Checkbox';
