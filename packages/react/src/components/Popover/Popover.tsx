'use client';

import React, { useState, useRef, ReactNode } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface PopoverProps {
    /** Trigger element */
    trigger: ReactNode;
    /** Popover content */
    children: ReactNode;
    /** Placement */
    placement?: 'top' | 'bottom' | 'left' | 'right';
    /** Alignment */
    align?: 'start' | 'center' | 'end';
    /** Is controlled open */
    isOpen?: boolean;
    /** On open change */
    onOpenChange?: (open: boolean) => void;
    /** Has arrow */
    hasArrow?: boolean;
}

export function Popover({
    trigger,
    children,
    placement = 'bottom',
    align = 'center',
    isOpen: controlledOpen,
    onOpenChange,
    hasArrow = true,
}: PopoverProps) {
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = controlledOpen ?? internalOpen;

    const handleOpenChange = (open: boolean) => {
        setInternalOpen(open);
        onOpenChange?.(open);
    };

    const placementStyles = {
        top: 'bottom-full mb-2',
        bottom: 'top-full mt-2',
        left: 'right-full mr-2',
        right: 'left-full ml-2',
    };

    const alignStyles = {
        start: placement === 'top' || placement === 'bottom' ? 'left-0' : 'top-0',
        center: placement === 'top' || placement === 'bottom' ? 'left-1/2 -translate-x-1/2' : 'top-1/2 -translate-y-1/2',
        end: placement === 'top' || placement === 'bottom' ? 'right-0' : 'bottom-0',
    };

    const arrowStyles = {
        top: 'bottom-[-6px] left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent',
        bottom: 'top-[-6px] left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent',
        left: 'right-[-6px] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent',
        right: 'left-[-6px] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent',
    };

    return (
        <div className="relative inline-block">
            {/* Trigger */}
            <div onClick={() => handleOpenChange(!isOpen)}>
                {trigger}
            </div>

            {/* Popover */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => handleOpenChange(false)}
                    />

                    {/* Content */}
                    <div
                        className={cn(
                            'absolute z-50 min-w-[200px] p-4 rounded-xl',
                            'bg-[rgba(20,20,25,0.98)] backdrop-blur-xl',
                            'border border-white/[0.1]',
                            'shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]',
                            'animate-in fade-in zoom-in-95 duration-150',
                            placementStyles[placement],
                            alignStyles[align]
                        )}
                    >
                        {hasArrow && (
                            <div
                                className={cn(
                                    'absolute w-0 h-0 border-[6px]',
                                    placement === 'top' && 'border-t-[rgba(20,20,25,0.98)]',
                                    placement === 'bottom' && 'border-b-[rgba(20,20,25,0.98)]',
                                    placement === 'left' && 'border-l-[rgba(20,20,25,0.98)]',
                                    placement === 'right' && 'border-r-[rgba(20,20,25,0.98)]',
                                    arrowStyles[placement]
                                )}
                            />
                        )}
                        {children}
                    </div>
                </>
            )}
        </div>
    );
}

export interface PopoverHeaderProps {
    children: ReactNode;
}

export function PopoverHeader({ children }: PopoverHeaderProps) {
    return (
        <div className="font-semibold text-[var(--x-foreground)] mb-2">
            {children}
        </div>
    );
}

export function PopoverBody({ children }: { children: ReactNode }) {
    return (
        <div className="text-sm text-[var(--x-mutedForeground)]">
            {children}
        </div>
    );
}

export function PopoverFooter({ children }: { children: ReactNode }) {
    return (
        <div className="mt-4 pt-4 border-t border-white/[0.08] flex gap-2 justify-end">
            {children}
        </div>
    );
}

export default Popover;
