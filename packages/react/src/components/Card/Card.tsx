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

const variantStyles = {
    elevated: 'bg-[var(--x-card)] shadow-lg border-transparent',
    outlined: 'bg-[var(--x-card)] border border-[var(--x-border)]',
    filled: 'bg-[var(--x-muted)] border-transparent',
    glass: 'bg-[var(--x-glass-bg)] backdrop-blur-lg border border-[var(--x-glass-border)]',
};

const paddingStyles = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7',
};

/**
 * Card component
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
                    'rounded-xl text-[var(--x-cardForeground)] transition-all duration-200',
                    variantStyles[variant],
                    paddingStyles[padding],
                    isInteractive && 'cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0',
                    isSelected && 'ring-2 ring-[var(--x-primary)] ring-offset-2',
                    className
                )}
                {...props}
            >
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
        <div ref={ref} className={cn('flex flex-col gap-1.5 pb-4', className)} {...props}>
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
        <h3 ref={ref} className={cn('text-xl font-semibold leading-none tracking-tight', className)} {...props}>
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
        <p ref={ref} className={cn('text-sm text-[var(--x-mutedForeground)]', className)} {...props}>
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
        <div ref={ref} className={cn('', className)} {...props}>
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
        <div ref={ref} className={cn('flex items-center pt-4 gap-3', className)} {...props}>
            {children}
        </div>
    )
);
CardFooter.displayName = 'CardFooter';
