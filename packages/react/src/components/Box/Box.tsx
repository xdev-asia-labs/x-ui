'use client';

import React, { forwardRef, HTMLAttributes, ElementType } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface BoxProps extends HTMLAttributes<HTMLElement> {
    /** Element type to render */
    as?: ElementType;
    /** Padding */
    p?: number | string;
    /** Padding X (horizontal) */
    px?: number | string;
    /** Padding Y (vertical) */
    py?: number | string;
    /** Margin */
    m?: number | string;
    /** Margin X (horizontal) */
    mx?: number | string;
    /** Margin Y (vertical) */
    my?: number | string;
    /** Background color */
    bg?: string;
    /** Border radius */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
    /** Add shadow */
    shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    /** Glass effect */
    glass?: boolean;
}

const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
};

const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
};

/**
 * Box component
 * A flexible container component for layout and styling
 */
export const Box = forwardRef<HTMLElement, BoxProps>(
    (
        {
            as: Component = 'div',
            p,
            px,
            py,
            m,
            mx,
            my,
            bg,
            rounded,
            shadow,
            glass = false,
            className,
            style,
            children,
            ...props
        },
        ref
    ) => {
        const computedStyle: React.CSSProperties = {
            ...(p !== undefined && { padding: typeof p === 'number' ? `${p * 4}px` : p }),
            ...(px !== undefined && { paddingLeft: typeof px === 'number' ? `${px * 4}px` : px, paddingRight: typeof px === 'number' ? `${px * 4}px` : px }),
            ...(py !== undefined && { paddingTop: typeof py === 'number' ? `${py * 4}px` : py, paddingBottom: typeof py === 'number' ? `${py * 4}px` : py }),
            ...(m !== undefined && { margin: typeof m === 'number' ? `${m * 4}px` : m }),
            ...(mx !== undefined && { marginLeft: typeof mx === 'number' ? `${mx * 4}px` : mx, marginRight: typeof mx === 'number' ? `${mx * 4}px` : mx }),
            ...(my !== undefined && { marginTop: typeof my === 'number' ? `${my * 4}px` : my, marginBottom: typeof my === 'number' ? `${my * 4}px` : my }),
            ...(bg && { backgroundColor: bg }),
            ...style,
        };

        return (
            <Component
                ref={ref}
                className={cn(
                    'x-box',
                    rounded && roundedStyles[rounded],
                    shadow && shadowStyles[shadow],
                    glass && 'bg-[var(--x-glass-bg)] backdrop-blur-lg border border-[var(--x-glass-border)]',
                    className
                )}
                style={computedStyle}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

Box.displayName = 'Box';
