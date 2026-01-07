'use client';

import React, { forwardRef, HTMLAttributes, ReactNode, useEffect } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
    /** Whether drawer is open */
    isOpen: boolean;
    /** Close callback */
    onClose: () => void;
    /** Drawer position */
    placement?: 'left' | 'right' | 'top' | 'bottom';
    /** Size */
    size?: 'sm' | 'md' | 'lg' | 'full';
    /** Show overlay */
    showOverlay?: boolean;
    /** Close on overlay click */
    closeOnOverlayClick?: boolean;
    children?: ReactNode;
}

const sizeStyles = {
    left: { sm: 'w-64', md: 'w-80', lg: 'w-96', full: 'w-full' },
    right: { sm: 'w-64', md: 'w-80', lg: 'w-96', full: 'w-full' },
    top: { sm: 'h-48', md: 'h-64', lg: 'h-80', full: 'h-full' },
    bottom: { sm: 'h-48', md: 'h-64', lg: 'h-80', full: 'h-full' },
};

const placementStyles = {
    left: 'inset-y-0 left-0',
    right: 'inset-y-0 right-0',
    top: 'inset-x-0 top-0',
    bottom: 'inset-x-0 bottom-0',
};

const animationStyles = {
    left: { open: 'translate-x-0', closed: '-translate-x-full' },
    right: { open: 'translate-x-0', closed: 'translate-x-full' },
    top: { open: 'translate-y-0', closed: '-translate-y-full' },
    bottom: { open: 'translate-y-0', closed: 'translate-y-full' },
};

/**
 * Drawer/Sidebar component
 */
export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
    (
        {
            isOpen,
            onClose,
            placement = 'left',
            size = 'md',
            showOverlay = true,
            closeOnOverlayClick = true,
            className,
            children,
            ...props
        },
        ref
    ) => {
        // Lock body scroll
        useEffect(() => {
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return () => {
                document.body.style.overflow = '';
            };
        }, [isOpen]);

        // Handle escape
        useEffect(() => {
            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === 'Escape') onClose();
            };
            if (isOpen) document.addEventListener('keydown', handleEsc);
            return () => document.removeEventListener('keydown', handleEsc);
        }, [isOpen, onClose]);

        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 z-50">
                {/* Overlay */}
                {showOverlay && (
                    <div
                        className="absolute inset-0 bg-black/50 transition-opacity"
                        onClick={closeOnOverlayClick ? onClose : undefined}
                    />
                )}

                {/* Drawer */}
                <div
                    ref={ref}
                    className={cn(
                        'fixed bg-[var(--x-card)] shadow-2xl',
                        'transition-transform duration-300 ease-out',
                        placementStyles[placement],
                        placement === 'left' || placement === 'right' ? 'h-full' : 'w-full',
                        sizeStyles[placement][size],
                        animationStyles[placement].open,
                        className
                    )}
                    {...props}
                >
                    {children}
                </div>
            </div>
        );
    }
);

Drawer.displayName = 'Drawer';

// Drawer subcomponents
export const DrawerHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn('px-6 py-4 border-b border-[var(--x-border)]', className)} {...props}>
            <h2 className="text-lg font-semibold text-[var(--x-foreground)]">{children}</h2>
        </div>
    )
);
DrawerHeader.displayName = 'DrawerHeader';

export const DrawerBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn('flex-1 px-6 py-4 overflow-auto', className)} {...props}>
            {children}
        </div>
    )
);
DrawerBody.displayName = 'DrawerBody';

export const DrawerFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn('px-6 py-4 border-t border-[var(--x-border)] flex gap-3 justify-end', className)} {...props}>
            {children}
        </div>
    )
);
DrawerFooter.displayName = 'DrawerFooter';
