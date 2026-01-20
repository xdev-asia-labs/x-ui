'use client';

import React, { forwardRef, HTMLAttributes, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@xdev-asia/x-ui-core';

// ============================================
// Sheet
// ============================================
export interface SheetProps extends HTMLAttributes<HTMLDivElement> {
    /** Open state */
    open?: boolean;
    /** Close callback */
    onClose?: () => void;
    /** Side to slide from */
    side?: 'left' | 'right' | 'top' | 'bottom';
    /** Sheet content */
    children?: ReactNode;
}

export const Sheet = forwardRef<HTMLDivElement, SheetProps>(
    (
        {
            open = false,
            onClose,
            side = 'left',
            className,
            children,
            ...props
        },
        ref
    ) => {
        // Close on ESC key
        useEffect(() => {
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === 'Escape' && open && onClose) {
                    onClose();
                }
            };

            if (open) {
                document.addEventListener('keydown', handleEscape);
                document.body.style.overflow = 'hidden';
            }

            return () => {
                document.removeEventListener('keydown', handleEscape);
                document.body.style.overflow = '';
            };
        }, [open, onClose]);

        if (!open) return null;

        const sideClasses = {
            left: 'left-0 top-0 h-full w-80 translate-x-[-100%] data-[open=true]:translate-x-0',
            right: 'right-0 top-0 h-full w-80 translate-x-[100%] data-[open=true]:translate-x-0',
            top: 'top-0 left-0 w-full h-80 translate-y-[-100%] data-[open=true]:translate-y-0',
            bottom: 'bottom-0 left-0 w-full h-80 translate-y-[100%] data-[open=true]:translate-y-0',
        };

        const content = (
            <>
                {/* Overlay */}
                <div
                    className={cn(
                        'fixed inset-0 z-50 bg-black/80 backdrop-blur-sm',
                        'transition-opacity duration-300',
                        open ? 'opacity-100' : 'opacity-0'
                    )}
                    onClick={onClose}
                />

                {/* Sheet */}
                <div
                    ref={ref}
                    data-open={open}
                    className={cn(
                        'x-sheet',
                        'fixed z-50',
                        'bg-[var(--x-card)] border-[var(--x-border)]',
                        'shadow-2xl',
                        'transition-transform duration-300 ease-out',
                        sideClasses[side],
                        className
                    )}
                    {...props}
                >
                    {children}
                </div>
            </>
        );

        return createPortal(content, document.body);
    }
);
Sheet.displayName = 'Sheet';

// ============================================
// SheetHeader
// ============================================
export interface SheetHeaderProps extends HTMLAttributes<HTMLDivElement> {
    /** Title */
    title?: string;
    /** Show close button */
    showClose?: boolean;
    /** Close callback */
    onClose?: () => void;
    children?: ReactNode;
}

export const SheetHeader = forwardRef<HTMLDivElement, SheetHeaderProps>(
    ({ title, showClose = true, onClose, className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                'x-sheet-header',
                'flex items-center justify-between',
                'px-6 py-4',
                'border-b border-[var(--x-border)]',
                className
            )}
            {...props}
        >
            {children ?? (
                <>
                    {title && (
                        <h2 className="text-lg font-semibold text-[var(--x-foreground)]">
                            {title}
                        </h2>
                    )}
                    {showClose && onClose && (
                        <button
                            onClick={onClose}
                            className={cn(
                                'rounded-lg p-2',
                                'text-[var(--x-mutedForeground)]',
                                'hover:text-[var(--x-foreground)]',
                                'hover:bg-[var(--x-muted)]',
                                'transition-colors'
                            )}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    )}
                </>
            )}
        </div>
    )
);
SheetHeader.displayName = 'SheetHeader';

// ============================================
// SheetContent
// ============================================
export interface SheetContentProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export const SheetContent = forwardRef<HTMLDivElement, SheetContentProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                'x-sheet-content',
                'flex-1 overflow-y-auto p-6',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
);
SheetContent.displayName = 'SheetContent';

// ============================================
// SheetFooter
// ============================================
export interface SheetFooterProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export const SheetFooter = forwardRef<HTMLDivElement, SheetFooterProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                'x-sheet-footer',
                'flex items-center justify-end gap-2',
                'px-6 py-4',
                'border-t border-[var(--x-border)]',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
);
SheetFooter.displayName = 'SheetFooter';
