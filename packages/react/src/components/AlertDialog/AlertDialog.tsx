'use client';

import React, { forwardRef, HTMLAttributes, ReactNode, useEffect } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface AlertDialogProps extends HTMLAttributes<HTMLDivElement> {
    /** Whether dialog is open */
    isOpen: boolean;
    /** Close callback */
    onClose: () => void;
    /** Confirm callback */
    onConfirm: () => void;
    /** Title */
    title: string;
    /** Description */
    description?: string;
    /** Confirm button text */
    confirmText?: string;
    /** Cancel button text */
    cancelText?: string;
    /** Variant */
    variant?: 'info' | 'warning' | 'danger';
    /** Loading state */
    isLoading?: boolean;
}

const variantStyles = {
    info: { button: 'bg-[var(--x-primary)] hover:bg-[var(--x-primary)]/90', icon: 'text-[var(--x-primary)]' },
    warning: { button: 'bg-amber-500 hover:bg-amber-600', icon: 'text-amber-500' },
    danger: { button: 'bg-red-500 hover:bg-red-600', icon: 'text-red-500' },
};

/**
 * Alert Dialog for confirmations
 */
export const AlertDialog = forwardRef<HTMLDivElement, AlertDialogProps>(
    (
        {
            isOpen,
            onClose,
            onConfirm,
            title,
            description,
            confirmText = 'Confirm',
            cancelText = 'Cancel',
            variant = 'info',
            isLoading = false,
            className,
            ...props
        },
        ref
    ) => {
        useEffect(() => {
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return () => { document.body.style.overflow = ''; };
        }, [isOpen]);

        useEffect(() => {
            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === 'Escape' && !isLoading) onClose();
            };
            if (isOpen) document.addEventListener('keydown', handleEsc);
            return () => document.removeEventListener('keydown', handleEsc);
        }, [isOpen, isLoading, onClose]);

        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={!isLoading ? onClose : undefined} />
                <div
                    ref={ref}
                    className={cn(
                        'relative w-full max-w-md bg-[var(--x-card)] rounded-xl shadow-2xl p-6',
                        'animate-in zoom-in-95 fade-in duration-200',
                        className
                    )}
                    role="alertdialog"
                    aria-modal="true"
                    {...props}
                >
                    <div className="flex items-start gap-4">
                        <div className={cn('p-2 rounded-full bg-current/10', variantStyles[variant].icon)}>
                            {variant === 'danger' ? (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )}
                        </div>
                        <div className="flex-1">
                            <h2 className="text-lg font-semibold text-[var(--x-foreground)]">{title}</h2>
                            {description && (
                                <p className="mt-2 text-sm text-[var(--x-mutedForeground)]">{description}</p>
                            )}
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isLoading}
                            className="px-4 py-2 text-sm font-medium rounded-lg bg-[var(--x-muted)] text-[var(--x-foreground)] hover:bg-[var(--x-muted)]/80 disabled:opacity-50"
                        >
                            {cancelText}
                        </button>
                        <button
                            type="button"
                            onClick={onConfirm}
                            disabled={isLoading}
                            className={cn(
                                'px-4 py-2 text-sm font-medium rounded-lg text-white disabled:opacity-50',
                                variantStyles[variant].button
                            )}
                        >
                            {isLoading ? 'Loading...' : confirmText}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
);

AlertDialog.displayName = 'AlertDialog';
