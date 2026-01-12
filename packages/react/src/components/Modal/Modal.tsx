'use client';

import React, { forwardRef, HTMLAttributes, ReactNode, useEffect, useRef, useCallback } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    /** Whether modal is open */
    isOpen: boolean;
    /** Close callback */
    onClose: () => void;
    /** Modal size */
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /** Center vertically */
    isCentered?: boolean;
    /** Close on overlay click */
    closeOnOverlayClick?: boolean;
    /** Close on escape key */
    closeOnEsc?: boolean;
    /** Show close button */
    showCloseButton?: boolean;
    children?: ReactNode;
}

const sizeStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full mx-4',
};

/**
 * Modal dialog component
 */
export const Modal = forwardRef<HTMLDivElement, ModalProps>(
    (
        {
            isOpen,
            onClose,
            size = 'md',
            isCentered = true,
            closeOnOverlayClick = true,
            closeOnEsc = true,
            showCloseButton = true,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const modalRef = useRef<HTMLDivElement>(null);

        // Handle escape key
        useEffect(() => {
            if (!isOpen || !closeOnEsc) return;

            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === 'Escape') onClose();
            };

            document.addEventListener('keydown', handleEsc);
            return () => document.removeEventListener('keydown', handleEsc);
        }, [isOpen, closeOnEsc, onClose]);

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

        if (!isOpen) return null;

        return (
            <div
                className="x-modal-overlay fixed inset-0 z-50 overflow-y-auto"
                aria-modal="true"
                role="dialog"
            >
                {/* Overlay */}
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                    onClick={closeOnOverlayClick ? onClose : undefined}
                />

                {/* Modal container */}
                <div
                    className={cn(
                        'flex min-h-full p-4',
                        isCentered ? 'items-center justify-center' : 'items-start justify-center pt-16'
                    )}
                >
                    <div
                        ref={ref || modalRef}
                        className={cn(
                            'x-modal',
                            `x-modal-${size}`,
                            'relative w-full bg-[var(--x-card)] rounded-xl shadow-2xl',
                            'animate-in zoom-in-95 fade-in duration-200',
                            sizeStyles[size],
                            className
                        )}
                        {...props}
                    >
                        {showCloseButton && (
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-1 rounded-lg text-[var(--x-mutedForeground)] hover:text-[var(--x-foreground)] hover:bg-[var(--x-muted)] transition-colors"
                                aria-label="Close modal"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        )}
                        {children}
                    </div>
                </div>
            </div>
        );
    }
);

Modal.displayName = 'Modal';

// Subcomponents
export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn('x-modal-header', 'px-6 pt-6 pb-2', className)} {...props}>
            <h2 className="text-xl font-semibold text-[var(--x-foreground)]">{children}</h2>
        </div>
    )
);
ModalHeader.displayName = 'ModalHeader';

export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn('x-modal-body', 'px-6 py-4 text-[var(--x-foreground)]', className)} {...props}>
            {children}
        </div>
    )
);
ModalBody.displayName = 'ModalBody';

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn('x-modal-footer', 'px-6 pb-6 pt-2 flex items-center justify-end gap-3', className)} {...props}>
            {children}
        </div>
    )
);
ModalFooter.displayName = 'ModalFooter';
