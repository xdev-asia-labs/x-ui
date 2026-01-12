'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

// Toast types
export interface Toast {
    id: string;
    title?: string;
    description?: string;
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
    duration?: number;
    action?: ReactNode;
}

export interface ToastProps {
    title?: string;
    description?: string;
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
    duration?: number;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
    onClose?: () => void;
}

interface ToastContextValue {
    toasts: Toast[];
    addToast: (toast: Omit<Toast, 'id'>) => string;
    removeToast: (id: string) => void;
    clearToasts: () => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

// Toast Provider
export interface ToastProviderProps {
    children: ReactNode;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
    maxToasts?: number;
}

export function ToastProvider({ children, position = 'top-right', maxToasts = 5 }: ToastProviderProps) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
        const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        const duration = toast.duration ?? 5000;

        setToasts((prev) => {
            const newToasts = [...prev, { ...toast, id }];
            return newToasts.slice(-maxToasts);
        });

        if (duration > 0) {
            setTimeout(() => {
                setToasts((prev) => prev.filter((t) => t.id !== id));
            }, duration);
        }

        return id;
    }, [maxToasts]);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const clearToasts = useCallback(() => {
        setToasts([]);
    }, []);

    const positionStyles = {
        'top-right': 'top-4 right-4',
        'top-left': 'top-4 left-4',
        'bottom-right': 'bottom-4 right-4',
        'bottom-left': 'bottom-4 left-4',
        'top-center': 'top-4 left-1/2 -translate-x-1/2',
        'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
    };

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast, clearToasts }}>
            {children}
            <div className={cn('fixed z-50 flex flex-col gap-2 max-w-sm w-full', positionStyles[position])}>
                {toasts.map((toast) => (
                    <ToastComponent key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
                ))}
            </div>
        </ToastContext.Provider>
    );
}

// Toast Item
const variantStyles = {
    default: 'bg-[var(--x-card)] border-[var(--x-border)]',
    success: 'bg-emerald-50 border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800',
    warning: 'bg-amber-50 border-amber-200 dark:bg-amber-950 dark:border-amber-800',
    error: 'bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800',
    info: 'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800',
};

const iconColors = {
    default: 'text-[var(--x-foreground)]',
    success: 'text-emerald-600',
    warning: 'text-amber-600',
    error: 'text-red-600',
    info: 'text-blue-600',
};

export function ToastComponent({ toast, onClose }: { toast: Toast; onClose: () => void }) {
    const variant = toast.variant || 'default';

    return (
        <div
            className={cn(
                'flex items-start gap-3 p-4 rounded-lg border shadow-lg',
                'animate-in slide-in-from-right-full fade-in duration-300',
                variantStyles[variant]
            )}
            role="alert"
        >
            {variant !== 'default' && (
                <span className={cn('mt-0.5', iconColors[variant])}>
                    {variant === 'success' && <CheckIcon />}
                    {variant === 'warning' && <WarningIcon />}
                    {variant === 'error' && <ErrorIcon />}
                    {variant === 'info' && <InfoIcon />}
                </span>
            )}

            <div className="flex-1 min-w-0">
                {toast.title && (
                    <p className="font-medium text-sm text-[var(--x-foreground)]">{toast.title}</p>
                )}
                {toast.description && (
                    <p className="text-sm text-[var(--x-mutedForeground)] mt-1">{toast.description}</p>
                )}
                {toast.action && <div className="mt-2">{toast.action}</div>}
            </div>

            <button
                onClick={onClose}
                className="text-[var(--x-mutedForeground)] hover:text-[var(--x-foreground)] transition-colors"
                aria-label="Close"
            >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z" />
                </svg>
            </button>
        </div>
    );
}

// Icons
const CheckIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const WarningIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
);

const ErrorIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
);

const InfoIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
);

// Hook
export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}
