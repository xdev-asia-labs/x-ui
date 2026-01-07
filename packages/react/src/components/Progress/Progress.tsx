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

// Liquid Glass sizing
const sizeStyles = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
};

// Colors with glow effects
const colorStyles = {
    primary: {
        bar: 'bg-gradient-to-r from-[var(--x-primary)] to-purple-500',
        glow: 'shadow-[0_0_12px_rgba(99,102,241,0.5)]',
        stroke: 'text-[var(--x-primary)]',
    },
    secondary: {
        bar: 'bg-gradient-to-r from-slate-400 to-slate-500',
        glow: 'shadow-[0_0_12px_rgba(100,116,139,0.4)]',
        stroke: 'text-slate-500',
    },
    success: {
        bar: 'bg-gradient-to-r from-emerald-500 to-green-400',
        glow: 'shadow-[0_0_12px_rgba(16,185,129,0.5)]',
        stroke: 'text-emerald-500',
    },
    warning: {
        bar: 'bg-gradient-to-r from-amber-500 to-yellow-400',
        glow: 'shadow-[0_0_12px_rgba(245,158,11,0.5)]',
        stroke: 'text-amber-500',
    },
    error: {
        bar: 'bg-gradient-to-r from-red-500 to-rose-400',
        glow: 'shadow-[0_0_12px_rgba(239,68,68,0.5)]',
        stroke: 'text-red-500',
    },
};

/**
 * Progress bar component with Liquid Glass design
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
        const colors = colorStyles[colorScheme];

        if (variant === 'circular') {
            const strokeWidth = size === 'sm' ? 3 : size === 'md' ? 4 : 6;
            const circleSize = size === 'sm' ? 36 : size === 'md' ? 52 : 72;
            const radius = (circleSize - strokeWidth) / 2;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percentage / 100) * circumference;

            return (
                <div ref={ref} className={cn('relative inline-flex', className)} {...props}>
                    <svg width={circleSize} height={circleSize} className="-rotate-90">
                        {/* Track - Liquid Glass */}
                        <circle
                            cx={circleSize / 2}
                            cy={circleSize / 2}
                            r={radius}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={strokeWidth}
                            className="text-white/[0.08]"
                        />
                        {/* Progress - with gradient effect */}
                        <circle
                            cx={circleSize / 2}
                            cy={circleSize / 2}
                            r={radius}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={strokeWidth}
                            strokeDasharray={circumference}
                            strokeDashoffset={isIndeterminate ? circumference * 0.75 : offset}
                            strokeLinecap="round"
                            className={cn(
                                colors.stroke,
                                'transition-all duration-500 ease-out',
                                isIndeterminate && 'animate-spin origin-center'
                            )}
                            style={{
                                filter: `drop-shadow(0 0 6px currentColor)`,
                            }}
                        />
                    </svg>
                    {showLabel && (
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-[var(--x-foreground)]">
                            {Math.round(percentage)}%
                        </span>
                    )}
                </div>
            );
        }

        return (
            <div ref={ref} className={cn('w-full', className)} {...props}>
                {/* Track - Liquid Glass */}
                <div
                    className={cn(
                        'w-full rounded-full overflow-hidden',
                        'bg-white/[0.08] border border-white/[0.05]',
                        sizeStyles[size]
                    )}
                >
                    {/* Progress Bar */}
                    <div
                        className={cn(
                            'h-full rounded-full transition-all duration-500 ease-out',
                            colors.bar,
                            colors.glow,
                            isIndeterminate && 'animate-indeterminate w-1/3'
                        )}
                        style={isIndeterminate ? undefined : { width: `${percentage}%` }}
                        role="progressbar"
                        aria-valuenow={value}
                        aria-valuemax={max}
                    />
                </div>
                {showLabel && (
                    <span className="mt-2 text-sm font-medium text-[var(--x-mutedForeground)]">
                        {Math.round(percentage)}%
                    </span>
                )}
            </div>
        );
    }
);

Progress.displayName = 'Progress';
