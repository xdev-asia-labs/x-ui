'use client';

import React, { forwardRef, HTMLAttributes, useState, useRef, useEffect, ReactNode } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
    /** Tooltip content */
    content: ReactNode;
    /** Trigger element */
    children: ReactNode;
    /** Placement */
    placement?: 'top' | 'bottom' | 'left' | 'right';
    /** Delay before showing (ms) */
    delay?: number;
    /** Whether tooltip is disabled */
    isDisabled?: boolean;
}

/**
 * Tooltip component
 */
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
    (
        {
            content,
            children,
            placement = 'top',
            delay = 200,
            isDisabled = false,
            className,
            ...props
        },
        ref
    ) => {
        const [isVisible, setIsVisible] = useState(false);
        const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

        const handleMouseEnter = () => {
            if (isDisabled) return;
            timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
        };

        const handleMouseLeave = () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setIsVisible(false);
        };

        useEffect(() => {
            return () => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
            };
        }, []);

        const placementStyles = {
            top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
            bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
            left: 'right-full top-1/2 -translate-y-1/2 mr-2',
            right: 'left-full top-1/2 -translate-y-1/2 ml-2',
        };

        return (
            <div
                ref={ref}
                className={cn('relative inline-block', className)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleMouseEnter}
                onBlur={handleMouseLeave}
                {...props}
            >
                {children}
                {isVisible && (
                    <div
                        className={cn(
                            'absolute z-50 px-3 py-1.5 text-sm rounded-lg shadow-lg',
                            'bg-[var(--x-popover)] text-[var(--x-popoverForeground)] border border-[var(--x-border)]',
                            'animate-in fade-in zoom-in-95 duration-150',
                            placementStyles[placement]
                        )}
                        role="tooltip"
                    >
                        {content}
                    </div>
                )}
            </div>
        );
    }
);

Tooltip.displayName = 'Tooltip';
