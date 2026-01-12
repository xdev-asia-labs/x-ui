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

// Size configurations
const sizeConfig = {
    sm: { track: { width: 36, height: 20 }, thumb: { size: 14, offset: 3 } },
    md: { track: { width: 48, height: 28 }, thumb: { size: 20, offset: 4 } },
    lg: { track: { width: 56, height: 32 }, thumb: { size: 24, offset: 4 } },
};

// Color configurations
const colorConfig = {
    primary: { bg: 'var(--x-primary)', glow: 'rgba(99,102,241,0.4)' },
    secondary: { bg: 'var(--x-secondary)', glow: 'rgba(100,116,139,0.3)' },
    success: { bg: '#10b981', glow: 'rgba(16,185,129,0.4)' },
    warning: { bg: '#f59e0b', glow: 'rgba(245,158,11,0.4)' },
    error: { bg: '#ef4444', glow: 'rgba(239,68,68,0.4)' },
};

/**
 * Switch toggle component with smooth animation
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
            checked,
            defaultChecked,
            onChange,
            ...props
        },
        ref
    ) => {
        const reactId = useId();
        const inputId = id || `switch${reactId}`;
        const config = sizeConfig[size];
        const color = colorConfig[colorScheme];

        // Calculate thumb translate distance
        const translateX = config.track.width - config.thumb.size - config.thumb.offset * 2;

        return (
            <label
                htmlFor={inputId}
                className={cn(
                    'x-switch',
                    `x-switch-${size}`,
                    'inline-flex items-center gap-3 cursor-pointer select-none',
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
                        checked={checked}
                        defaultChecked={defaultChecked}
                        onChange={onChange}
                        {...props}
                    />
                    {/* Track */}
                    <div
                        className="rounded-full transition-all duration-300 ease-out peer-checked:border-transparent"
                        style={{
                            width: config.track.width,
                            height: config.track.height,
                            backgroundColor: 'rgba(255,255,255,0.08)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                        }}
                    />
                    {/* Colored overlay when checked */}
                    <div
                        className="absolute inset-0 rounded-full transition-all duration-300 ease-out opacity-0 peer-checked:opacity-100"
                        style={{
                            backgroundColor: color.bg,
                            boxShadow: `0 0 20px ${color.glow}`,
                        }}
                    />
                    {/* Thumb */}
                    <div
                        className="absolute rounded-full bg-white transition-all duration-300 ease-out peer-checked:translate-x-[var(--translate-x)]"
                        style={{
                            width: config.thumb.size,
                            height: config.thumb.size,
                            top: config.thumb.offset,
                            left: config.thumb.offset,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                            '--translate-x': `${translateX}px`,
                        } as React.CSSProperties}
                    >
                        {/* Specular highlight */}
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
                            }}
                        />
                    </div>
                </div>

                {label && labelPosition === 'right' && (
                    <span className="text-sm font-medium text-[var(--x-foreground)]">{label}</span>
                )}
            </label>
        );
    }
);

Switch.displayName = 'Switch';

