import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Toast, ToastProps } from './Toast';

export interface ToastMessage {
    id: string;
    title?: string;
    description?: string;
    variant?: ToastProps['variant'];
    duration?: number;
    position?: ToastProps['position'];
}

interface ToastContextValue {
    toasts: ToastMessage[];
    addToast: (toast: Omit<ToastMessage, 'id'>) => string;
    removeToast: (id: string) => void;
    toast: {
        success: (title: string, description?: string) => string;
        error: (title: string, description?: string) => string;
        warning: (title: string, description?: string) => string;
        info: (title: string, description?: string) => string;
    };
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}

interface ToastProviderProps {
    children: ReactNode;
    defaultPosition?: ToastProps['position'];
    defaultDuration?: number;
}

export function ToastProvider({
    children,
    defaultPosition = 'top-right',
    defaultDuration = 5000,
}: ToastProviderProps) {
    const [toasts, setToasts] = useState<ToastMessage[]>([]);

    const addToast = useCallback((toast: Omit<ToastMessage, 'id'>) => {
        const id = Math.random().toString(36).substr(2, 9);
        const newToast: ToastMessage = {
            id,
            duration: defaultDuration,
            position: defaultPosition,
            ...toast,
        };
        setToasts((prev) => [...prev, newToast]);
        return id;
    }, [defaultDuration, defaultPosition]);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const toast = {
        success: (title: string, description?: string) =>
            addToast({ title, description, variant: 'success' }),
        error: (title: string, description?: string) =>
            addToast({ title, description, variant: 'error' }),
        warning: (title: string, description?: string) =>
            addToast({ title, description, variant: 'warning' }),
        info: (title: string, description?: string) =>
            addToast({ title, description, variant: 'info' }),
    };

    // Group toasts by position
    const positions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'] as const;

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast, toast }}>
            {children}
            {positions.map((position) => {
                const positionToasts = toasts.filter((t) => (t.position || defaultPosition) === position);
                if (positionToasts.length === 0) return null;

                return (
                    <div
                        key={position}
                        className={`x-toast-container x-toast-container-${position}`}
                        style={{
                            position: 'fixed',
                            zIndex: 9999,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            padding: '16px',
                            ...(position.includes('top') ? { top: 0 } : { bottom: 0 }),
                            ...(position.includes('left') ? { left: 0 } : {}),
                            ...(position.includes('right') ? { right: 0 } : {}),
                            ...(position.includes('center') ? { left: '50%', transform: 'translateX(-50%)' } : {}),
                        }}
                    >
                        {positionToasts.map((t) => (
                            <Toast
                                key={t.id}
                                variant={t.variant}
                                title={t.title}
                                description={t.description}
                                duration={t.duration}
                                onClose={() => removeToast(t.id)}
                            />
                        ))}
                    </div>
                );
            })}
        </ToastContext.Provider>
    );
}
