'use client';

import React, { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

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

// Liquid Glass sizing
const sizeStyles = {
    sm: 'w-4 h-4 rounded-md',
    md: 'w-5 h-5 rounded-lg',
    lg: 'w-6 h-6 rounded-lg',
};

// Colors with glow effects
const colorStyles = {
    primary: 'checked:bg-[var(--x-primary)] checked:border-[var(--x-primary)] checked:shadow-[0_0_12px_rgba(99,102,241,0.4)]',
    secondary: 'checked:bg-[var(--x-secondary)] checked:border-[var(--x-secondary)] checked:shadow-[0_0_12px_rgba(100,116,139,0.3)]',
    success: 'checked:bg-emerald-500 checked:border-emerald-500 checked:shadow-[0_0_12px_rgba(16,185,129,0.4)]',
    warning: 'checked:bg-amber-500 checked:border-amber-500 checked:shadow-[0_0_12px_rgba(245,158,11,0.4)]',
    error: 'checked:bg-red-500 checked:border-red-500 checked:shadow-[0_0_12px_rgba(239,68,68,0.4)]',
};

/**
 * Checkbox component with Liquid Glass design
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
        const reactId = useId();
        const inputId = id || `checkbox${reactId}`;

        return (
            <label
                htmlFor={inputId}
                className={cn(
                    'x-checkbox',
                    `x-checkbox-${size}`,
                    'inline-flex items-start gap-3 cursor-pointer group',
                    isDisabled && 'opacity-50 cursor-not-allowed',
                    className
                )}
            >
                <div className="relative flex items-center justify-center mt-0.5">
                    <input
                        ref={ref}
                        type="checkbox"
                        id={inputId}
                        className={cn(
                            // Base Liquid Glass styles
                            'appearance-none transition-all duration-200 ease-out',
                            // Unchecked - glass effect
                            'bg-white/[0.06] border border-white/[0.15]',
                            'shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]',
                            // Hover
                            'hover:bg-white/[0.1] hover:border-white/[0.2]',
                            // Focus
                            'focus:outline-none focus:ring-2 focus:ring-[var(--x-ring)]/30 focus:ring-offset-2 focus:ring-offset-[var(--x-background)]',
                            // Checked - color with glow
                            colorStyles[colorScheme],
                            // Size + rounded
                            sizeStyles[size]
                        )}
                        disabled={isDisabled}
                        {...props}
                    />
                    {/* Checkmark SVG */}
                    <svg
                        className={cn(
                            'absolute pointer-events-none text-white',
                            'opacity-0 scale-50 transition-all duration-200',
                            size === 'sm' ? 'w-2.5 h-2.5' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'
                        )}
                        viewBox="0 0 12 12"
                        fill="none"
                        style={{
                            opacity: props.checked ? 1 : 0,
                            transform: props.checked ? 'scale(1)' : 'scale(0.5)',
                        }}
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
                        {description && <span className="text-xs text-[var(--x-mutedForeground)] mt-0.5">{description}</span>}
                    </div>
                )}
            </label>
        );
    }
);

Checkbox.displayName = 'Checkbox';
