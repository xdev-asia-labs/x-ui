'use client';

import React, { createContext, useContext, useState, ReactNode, forwardRef, HTMLAttributes } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

// Tabs Context
interface TabsContextValue {
    value: string;
    onChange: (value: string) => void;
    variant: 'line' | 'enclosed' | 'pills';
}

const TabsContext = createContext<TabsContextValue | null>(null);

// Tabs Root
export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
    /** Controlled value */
    value?: string;
    /** Default value */
    defaultValue?: string;
    /** Change callback */
    onValueChange?: (value: string) => void;
    /** Variant style */
    variant?: 'line' | 'enclosed' | 'pills';
    children?: ReactNode;
}

export function Tabs({
    value: controlledValue,
    defaultValue = '',
    onValueChange,
    variant = 'line',
    className,
    children,
    ...props
}: TabsProps) {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const value = controlledValue ?? internalValue;

    const onChange = (newValue: string) => {
        setInternalValue(newValue);
        onValueChange?.(newValue);
    };

    return (
        <TabsContext.Provider value={{ value, onChange, variant }}>
            <div className={cn('w-full', className)} {...props}>
                {children}
            </div>
        </TabsContext.Provider>
    );
}

// Tab List
export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
    ({ className, children, ...props }, ref) => {
        const context = useContext(TabsContext);
        const variant = context?.variant || 'line';

        return (
            <div
                ref={ref}
                role="tablist"
                className={cn(
                    'flex gap-1',
                    variant === 'line' && 'border-b border-[var(--x-border)]',
                    variant === 'enclosed' && 'bg-[var(--x-muted)] p-1 rounded-lg',
                    variant === 'pills' && 'gap-2',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
TabList.displayName = 'TabList';

// Tab Trigger
export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
    value: string;
    disabled?: boolean;
    children?: ReactNode;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
    ({ value, disabled, className, children, ...props }, ref) => {
        const context = useContext(TabsContext);
        if (!context) throw new Error('Tab must be used within Tabs');

        const isActive = context.value === value;
        const variant = context.variant;

        const variantStyles = {
            line: cn(
                'px-4 py-2 text-sm font-medium -mb-px border-b-2 transition-colors',
                isActive
                    ? 'border-[var(--x-primary)] text-[var(--x-primary)]'
                    : 'border-transparent text-[var(--x-mutedForeground)] hover:text-[var(--x-foreground)]'
            ),
            enclosed: cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                isActive
                    ? 'bg-[var(--x-card)] text-[var(--x-foreground)] shadow-sm'
                    : 'text-[var(--x-mutedForeground)] hover:text-[var(--x-foreground)]'
            ),
            pills: cn(
                'px-4 py-2 text-sm font-medium rounded-full transition-all',
                isActive
                    ? 'bg-[var(--x-primary)] text-white'
                    : 'text-[var(--x-mutedForeground)] hover:bg-[var(--x-muted)]'
            ),
        };

        return (
            <button
                ref={ref}
                role="tab"
                aria-selected={isActive}
                disabled={disabled}
                onClick={() => context.onChange(value)}
                className={cn(
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--x-ring)]',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    variantStyles[variant],
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);
Tab.displayName = 'Tab';

// Tab Panel
export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    children?: ReactNode;
}

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
    ({ value, className, children, ...props }, ref) => {
        const context = useContext(TabsContext);
        if (!context) throw new Error('TabPanel must be used within Tabs');

        if (context.value !== value) return null;

        return (
            <div
                ref={ref}
                role="tabpanel"
                className={cn('py-4', className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);
TabPanel.displayName = 'TabPanel';
