'use client';

import React, { forwardRef, InputHTMLAttributes, useId } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

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

// Liquid Glass sizing
const sizeStyles = {
    sm: { track: 'w-9 h-5', thumb: 'w-4 h-4', translate: 'translate-x-4' },
    md: { track: 'w-12 h-7', thumb: 'w-5.5 h-5.5', translate: 'translate-x-5' },
    lg: { track: 'w-14 h-8', thumb: 'w-6.5 h-6.5', translate: 'translate-x-6' },
};

// Liquid Glass colors with glow effects
const colorStyles = {
    primary: 'peer-checked:bg-[var(--x-primary)] peer-checked:shadow-[0_0_20px_rgba(99,102,241,0.4)]',
    secondary: 'peer-checked:bg-[var(--x-secondary)] peer-checked:shadow-[0_0_20px_rgba(100,116,139,0.3)]',
    success: 'peer-checked:bg-emerald-500 peer-checked:shadow-[0_0_20px_rgba(16,185,129,0.4)]',
    warning: 'peer-checked:bg-amber-500 peer-checked:shadow-[0_0_20px_rgba(245,158,11,0.4)]',
    error: 'peer-checked:bg-red-500 peer-checked:shadow-[0_0_20px_rgba(239,68,68,0.4)]',
};

/**
 * Switch toggle component with Liquid Glass design
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
        const reactId = useId();
        const inputId = id || `switch${reactId}`;
        const sizeStyle = sizeStyles[size];

        return (
            <label
                htmlFor={inputId}
                className={cn(
                    'x-switch',
                    `x-switch-${size}`,
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
                    {/* Track - Liquid Glass style */}
                    <div
                        className={cn(
                            'rounded-full transition-all duration-300 ease-out',
                            // Off state - glass effect
                            'bg-white/[0.08] border border-white/[0.12]',
                            'shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]',
                            // On state - color + glow
                            colorStyles[colorScheme],
                            'peer-checked:border-transparent',
                            sizeStyle.track
                        )}
                    />
                    {/* Thumb - Liquid Glass style with specular */}
                    <div
                        className={cn(
                            'absolute top-[3px] left-[3px] rounded-full transition-all duration-300 ease-out',
                            // Liquid glass appearance
                            'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.2)]',
                            // Specular highlight
                            'before:absolute before:inset-0 before:rounded-full',
                            'before:bg-gradient-to-b before:from-white/40 before:to-transparent',
                            // Movement
                            `peer-checked:${sizeStyle.translate}`,
                            // Size
                            size === 'sm' ? 'w-3.5 h-3.5' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'
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
