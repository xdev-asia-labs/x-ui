'use client';

import React, { forwardRef, InputHTMLAttributes } from 'react';
import { cn, generateId } from '@xdev-asia/x-ui-core';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    /** Switch size */
    size?: 'sm' | 'md' | 'lg';
    /** Color when active */
    colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    /** Label text */
    label?: string;
    /** Label position */
    labelPosition?: 'left' | 'right';
    /** Disabled state */
    isDisabled?: boolean;
}

const sizeStyles = {
    sm: { track: 'w-8 h-4', thumb: 'w-3 h-3', translate: 'translate-x-4' },
    md: { track: 'w-11 h-6', thumb: 'w-5 h-5', translate: 'translate-x-5' },
    lg: { track: 'w-14 h-7', thumb: 'w-6 h-6', translate: 'translate-x-7' },
};

const colorStyles = {
    primary: 'peer-checked:bg-[var(--x-primary)]',
    secondary: 'peer-checked:bg-[var(--x-secondary)]',
    success: 'peer-checked:bg-emerald-500',
    warning: 'peer-checked:bg-amber-500',
    error: 'peer-checked:bg-red-500',
};

/**
 * Switch toggle component
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
    (
        {
            size = 'md',
            colorScheme = 'primary',
            label,
            labelPosition = 'right',
            isDisabled = false,
            className,
            id,
            ...props
        },
        ref
    ) => {
        const inputId = id || generateId('switch');
        const sizeStyle = sizeStyles[size];

        return (
            <label
                htmlFor={inputId}
                className={cn(
                    'inline-flex items-center gap-3 cursor-pointer',
                    isDisabled && 'opacity-50 cursor-not-allowed',
                    className
                )}
            >
                {label && labelPosition === 'left' && (
                    <span className="text-sm font-medium text-[var(--x-foreground)]">{label}</span>
                )}

                <div className="relative">
                    <input
                        ref={ref}
                        type="checkbox"
                        id={inputId}
                        className="peer sr-only"
                        disabled={isDisabled}
                        {...props}
                    />
                    <div
                        className={cn(
                            'rounded-full bg-[var(--x-muted)] transition-colors duration-200',
                            colorStyles[colorScheme],
                            sizeStyle.track
                        )}
                    />
                    <div
                        className={cn(
                            'absolute top-0.5 left-0.5 bg-white rounded-full shadow-md transition-transform duration-200',
                            `peer-checked:${sizeStyle.translate}`,
                            sizeStyle.thumb
                        )}
                    />
                </div>

                {label && labelPosition === 'right' && (
                    <span className="text-sm font-medium text-[var(--x-foreground)]">{label}</span>
                )}
            </label>
        );
    }
);

Switch.displayName = 'Switch';
