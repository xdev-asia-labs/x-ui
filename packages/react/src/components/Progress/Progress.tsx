'use client';

import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
    /** Progress value 0-100 */
    value: number;
    /** Max value */
    max?: number;
    /** Size */
    size?: 'sm' | 'md' | 'lg';
    /** Color */
    colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    /** Variant */
    variant?: 'linear' | 'circular';
    /** Show label */
    showLabel?: boolean;
    /** Indeterminate state */
    isIndeterminate?: boolean;
}

const sizeStyles = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
};

const colorStyles = {
    primary: 'bg-[var(--x-primary)]',
    secondary: 'bg-[var(--x-secondary)]',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    error: 'bg-red-500',
};

/**
 * Progress bar component
 */
export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
    (
        {
            value,
            max = 100,
            size = 'md',
            colorScheme = 'primary',
            variant = 'linear',
            showLabel = false,
            isIndeterminate = false,
            className,
            ...props
        },
        ref
    ) => {
        const percentage = Math.min(100, Math.max(0, (value / max) * 100));

        if (variant === 'circular') {
            const strokeWidth = size === 'sm' ? 3 : size === 'md' ? 4 : 5;
            const circleSize = size === 'sm' ? 32 : size === 'md' ? 48 : 64;
            const radius = (circleSize - strokeWidth) / 2;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percentage / 100) * circumference;

            return (
                <div ref={ref} className={cn('relative inline-flex', className)} {...props}>
                    <svg width={circleSize} height={circleSize} className="-rotate-90">
                        <circle
                            cx={circleSize / 2}
                            cy={circleSize / 2}
                            r={radius}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={strokeWidth}
                            className="text-[var(--x-muted)]"
                        />
                        <circle
                            cx={circleSize / 2}
                            cy={circleSize / 2}
                            r={radius}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={strokeWidth}
                            strokeDasharray={circumference}
                            strokeDashoffset={isIndeterminate ? undefined : offset}
                            strokeLinecap="round"
                            className={cn(
                                colorStyles[colorScheme].replace('bg-', 'text-'),
                                isIndeterminate && 'animate-spin origin-center'
                            )}
                        />
                    </svg>
                    {showLabel && (
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                            {Math.round(percentage)}%
                        </span>
                    )}
                </div>
            );
        }

        return (
            <div ref={ref} className={cn('w-full', className)} {...props}>
                <div className={cn('w-full rounded-full bg-[var(--x-muted)] overflow-hidden', sizeStyles[size])}>
                    <div
                        className={cn(
                            'h-full rounded-full transition-all duration-300',
                            colorStyles[colorScheme],
                            isIndeterminate && 'animate-indeterminate w-1/3'
                        )}
                        style={isIndeterminate ? undefined : { width: `${percentage}%` }}
                        role="progressbar"
                        aria-valuenow={value}
                        aria-valuemax={max}
                    />
                </div>
                {showLabel && (
                    <span className="mt-1 text-sm text-[var(--x-mutedForeground)]">
                        {Math.round(percentage)}%
                    </span>
                )}
            </div>
        );
    }
);

Progress.displayName = 'Progress';
