'use client';

import React, { useState, useRef, ReactNode } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface DropdownProps {
    /** Trigger element */
    trigger: ReactNode;
    /** Menu items */
    children: ReactNode;
    /** Alignment */
    align?: 'start' | 'center' | 'end';
    /** Side */
    side?: 'top' | 'bottom';
}

export interface DropdownItemProps {
    /** Item content */
    children: ReactNode;
    /** On click callback */
    onClick?: () => void;
    /** Disabled */
    isDisabled?: boolean;
    /** Icon */
    icon?: ReactNode;
    /** Destructive */
    isDestructive?: boolean;
    /** Shortcut */
    shortcut?: string;
}

export function Dropdown({
    trigger,
    children,
    align = 'start',
    side = 'bottom',
}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const alignStyles = {
        start: 'left-0',
        center: 'left-1/2 -translate-x-1/2',
        end: 'right-0',
    };

    const sideStyles = {
        top: 'bottom-full mb-2',
        bottom: 'top-full mt-2',
    };

    return (
        <div className="relative inline-block">
            {/* Trigger */}
            <div onClick={() => setIsOpen(!isOpen)}>
                {trigger}
            </div>

            {/* Menu */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Dropdown Menu */}
                    <div
                        className={cn(
                            'absolute z-50 min-w-[180px] py-2 rounded-xl',
                            'bg-[rgba(20,20,25,0.98)] backdrop-blur-xl',
                            'border border-white/[0.1]',
                            'shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)]',
                            'animate-in fade-in slide-in-from-top-2 duration-150',
                            alignStyles[align],
                            sideStyles[side]
                        )}
                        onClick={() => setIsOpen(false)}
                    >
                        {children}
                    </div>
                </>
            )}
        </div>
    );
}

export function DropdownItem({
    children,
    onClick,
    isDisabled = false,
    icon,
    isDestructive = false,
    shortcut,
}: DropdownItemProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={isDisabled}
            className={cn(
                'w-full flex items-center gap-3 px-3 py-2 text-sm',
                'transition-colors duration-100',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                isDestructive
                    ? 'text-red-400 hover:bg-red-500/10'
                    : 'text-[var(--x-foreground)] hover:bg-white/[0.08]'
            )}
        >
            {icon && <span className="w-4 h-4 flex-shrink-0">{icon}</span>}
            <span className="flex-1 text-left">{children}</span>
            {shortcut && (
                <span className="text-xs text-[var(--x-mutedForeground)] ml-2">
                    {shortcut}
                </span>
            )}
        </button>
    );
}

export function DropdownSeparator() {
    return <div className="h-px bg-white/[0.08] my-1" />;
}

export function DropdownLabel({ children }: { children: ReactNode }) {
    return (
        <div className="px-3 py-1.5 text-xs font-medium text-[var(--x-mutedForeground)] uppercase tracking-wider">
            {children}
        </div>
    );
}

export default Dropdown;
