'use client';

import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    /** Card variant */
    variant?: 'elevated' | 'outlined' | 'filled' | 'glass';
    /** Padding size */
    padding?: 'none' | 'sm' | 'md' | 'lg';
    /** Make card interactive (hover effects) */
    isInteractive?: boolean;
    /** Is card selected */
    isSelected?: boolean;
}

// Liquid Glass inspired styles
const variantStyles = {
    elevated: `
        bg-[var(--x-card)]
        shadow-[0_4px_24px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]
        border border-white/[0.05]
    `,
    outlined: `
        bg-[var(--x-card)]/80 backdrop-blur-sm
        border border-[var(--x-border)]
    `,
    filled: `
        bg-[var(--x-muted)]
        border border-transparent
    `,
    glass: `
        bg-white/[0.06] backdrop-blur-xl
        border border-white/[0.1]
        shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.08)]
    `,
};

const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
};

/**
 * Card component with Liquid Glass design
 * A container for grouping related content
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            variant = 'elevated',
            padding = 'md',
            isInteractive = false,
            isSelected = false,
            className,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn(
                    // X-UI identifier classes
                    'x-card',
                    `x-card-${variant}`,
                    // Base Liquid Glass styles
                    'rounded-2xl text-[var(--x-cardForeground)]',
                    'transition-all duration-300 ease-out',
                    'relative overflow-hidden',
                    // Variant styles
                    variantStyles[variant],
                    // Padding
                    paddingStyles[padding],
                    // Interactive states
                    isInteractive && `
                        cursor-pointer
                        hover:shadow-[0_12px_40px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1)]
                        hover:-translate-y-1 hover:border-white/[0.15]
                        active:translate-y-0 active:scale-[0.99]
                    `,
                    // Selected state
                    isSelected && 'ring-2 ring-[var(--x-primary)] ring-offset-2 ring-offset-[var(--x-background)]',
                    className
                )}
                {...props}
            >
                {/* Top specular highlight - only for glass variant */}
                {variant === 'glass' && (
                    <div
                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                        aria-hidden="true"
                    />
                )}
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn('x-card-header', 'flex flex-col gap-2 pb-4', className)} {...props}>
            {children}
        </div>
    )
);
CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    children?: ReactNode;
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ className, children, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn(
                'x-card-title',
                'text-lg font-semibold leading-tight tracking-tight',
                className
            )}
            {...props}
        >
            {children}
        </h3>
    )
);
CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
    children?: ReactNode;
}

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
    ({ className, children, ...props }, ref) => (
        <p
            ref={ref}
            className={cn('x-card-description', 'text-sm text-[var(--x-mutedForeground)] leading-relaxed', className)}
            {...props}
        >
            {children}
        </p>
    )
);
CardDescription.displayName = 'CardDescription';

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn('x-card-content', '', className)} {...props}>
            {children}
        </div>
    )
);
CardContent.displayName = 'CardContent';

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn('x-card-footer', 'flex items-center pt-4 gap-3', className)} {...props}>
            {children}
        </div>
    )
);
CardFooter.displayName = 'CardFooter';
