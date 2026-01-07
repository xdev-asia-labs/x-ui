'use client';

import React, { createContext, useContext, useState, ReactNode, forwardRef, HTMLAttributes } from 'react';
import { cn, generateId } from '@xdev-asia/x-ui-core';

// Accordion Context
interface AccordionContextValue {
    openItems: string[];
    toggleItem: (id: string) => void;
    allowMultiple: boolean;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

// Accordion Root
export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
    /** Allow multiple items open */
    allowMultiple?: boolean;
    /** Default open items */
    defaultValue?: string[];
    children?: ReactNode;
}

export function Accordion({
    allowMultiple = false,
    defaultValue = [],
    className,
    children,
    ...props
}: AccordionProps) {
    const [openItems, setOpenItems] = useState<string[]>(defaultValue);

    const toggleItem = (id: string) => {
        setOpenItems((prev) => {
            if (prev.includes(id)) {
                return prev.filter((item) => item !== id);
            }
            return allowMultiple ? [...prev, id] : [id];
        });
    };

    return (
        <AccordionContext.Provider value={{ openItems, toggleItem, allowMultiple }}>
            <div className={cn('divide-y divide-[var(--x-border)]', className)} {...props}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
}

// Accordion Item
export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    children?: ReactNode;
}

const AccordionItemContext = createContext<string>('');

export function AccordionItem({ value, className, children, ...props }: AccordionItemProps) {
    return (
        <AccordionItemContext.Provider value={value}>
            <div className={cn('', className)} {...props}>
                {children}
            </div>
        </AccordionItemContext.Provider>
    );
}

// Accordion Trigger
export interface AccordionTriggerProps extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
}

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
    ({ className, children, ...props }, ref) => {
        const itemValue = useContext(AccordionItemContext);
        const context = useContext(AccordionContext);
        if (!context) throw new Error('AccordionTrigger must be used within Accordion');

        const isOpen = context.openItems.includes(itemValue);

        return (
            <button
                ref={ref}
                type="button"
                onClick={() => context.toggleItem(itemValue)}
                className={cn(
                    'flex w-full items-center justify-between py-4 text-left font-medium',
                    'text-[var(--x-foreground)] hover:text-[var(--x-primary)] transition-colors',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--x-ring)]',
                    className
                )}
                aria-expanded={isOpen}
                {...props}
            >
                {children}
                <svg
                    className={cn(
                        'w-5 h-5 transition-transform duration-200',
                        isOpen && 'rotate-180'
                    )}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        );
    }
);
AccordionTrigger.displayName = 'AccordionTrigger';

// Accordion Content
export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
    ({ className, children, ...props }, ref) => {
        const itemValue = useContext(AccordionItemContext);
        const context = useContext(AccordionContext);
        if (!context) throw new Error('AccordionContent must be used within Accordion');

        const isOpen = context.openItems.includes(itemValue);

        if (!isOpen) return null;

        return (
            <div
                ref={ref}
                className={cn(
                    'pb-4 text-[var(--x-mutedForeground)]',
                    'animate-in slide-in-from-top-2 fade-in duration-200',
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
AccordionContent.displayName = 'AccordionContent';
