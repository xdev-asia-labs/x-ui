'use client';

import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    /** Variant */
    variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
    /** Width */
    width?: number | string;
    /** Height */
    height?: number | string;
    /** Animation */
    animation?: 'pulse' | 'wave' | 'none';
}

/**
 * Skeleton loading placeholder
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
    (
        {
            variant = 'text',
            width,
            height,
            animation = 'pulse',
            className,
            style,
            ...props
        },
        ref
    ) => {
        const variantStyles = {
            text: 'h-4 rounded',
            circular: 'rounded-full aspect-square',
            rectangular: 'rounded-none',
            rounded: 'rounded-lg',
        };

        const animationStyles = {
            pulse: 'animate-pulse',
            wave: 'animate-shimmer bg-gradient-to-r from-[var(--x-muted)] via-[var(--x-muted)]/50 to-[var(--x-muted)] bg-[length:200%_100%]',
            none: '',
        };

        return (
            <div
                ref={ref}
                className={cn(
                    'bg-[var(--x-muted)]',
                    variantStyles[variant],
                    animationStyles[animation],
                    className
                )}
                style={{
                    width: width ?? (variant === 'text' ? '100%' : undefined),
                    height: height ?? (variant === 'circular' ? width : undefined),
                    ...style,
                }}
                {...props}
            />
        );
    }
);

Skeleton.displayName = 'Skeleton';

// Preset components
export const SkeletonText = ({ lines = 3 }: { lines?: number }) => (
    <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
            <Skeleton
                key={i}
                variant="text"
                width={i === lines - 1 ? '60%' : '100%'}
            />
        ))}
    </div>
);

export const SkeletonAvatar = ({ size = 40 }: { size?: number }) => (
    <Skeleton variant="circular" width={size} height={size} />
);

export const SkeletonCard = () => (
    <div className="space-y-4">
        <Skeleton variant="rounded" height={200} />
        <SkeletonText lines={2} />
    </div>
);
