'use client';

import React, { forwardRef, ImgHTMLAttributes } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    /** Avatar size */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /** Fallback initials when image fails */
    fallback?: string;
    /** Show status indicator */
    status?: 'online' | 'offline' | 'away' | 'busy';
    /** Make avatar rounded */
    rounded?: boolean;
    /** Show border */
    bordered?: boolean;
}

const sizeStyles = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-16 w-16 text-lg',
    '2xl': 'h-20 w-20 text-xl',
};

const statusStyles = {
    online: 'bg-emerald-500',
    offline: 'bg-neutral-400',
    away: 'bg-amber-500',
    busy: 'bg-red-500',
};

/**
 * Avatar component
 * Displays user profile image with fallback and status indicator
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
    (
        {
            size = 'md',
            fallback,
            status,
            rounded = true,
            bordered = false,
            src,
            alt,
            className,
            ...props
        },
        ref
    ) => {
        const [hasError, setHasError] = React.useState(false);

        return (
            <div
                ref={ref}
                className={cn(
                    // X-UI identifier classes
                    'x-avatar',
                    `x-avatar-${size}`,
                    'relative inline-flex items-center justify-center overflow-hidden bg-[var(--x-muted)]',
                    sizeStyles[size],
                    rounded ? 'rounded-full' : 'rounded-lg',
                    bordered && 'ring-2 ring-[var(--x-background)] ring-offset-2 ring-offset-[var(--x-muted)]',
                    className
                )}
            >
                {src && !hasError ? (
                    <img
                        src={src}
                        alt={alt}
                        className="h-full w-full object-cover"
                        onError={() => setHasError(true)}
                        {...props}
                    />
                ) : (
                    <span className="font-medium text-[var(--x-mutedForeground)]">
                        {fallback || alt?.charAt(0)?.toUpperCase() || '?'}
                    </span>
                )}

                {status && (
                    <span
                        className={cn(
                            'absolute bottom-0 right-0 block rounded-full ring-2 ring-[var(--x-background)]',
                            size === 'xs' || size === 'sm' ? 'h-2 w-2' : 'h-3 w-3',
                            statusStyles[status]
                        )}
                    />
                )}
            </div>
        );
    }
);

Avatar.displayName = 'Avatar';
