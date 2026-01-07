'use client';

import React, { forwardRef, HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface BottomSheetProps extends HTMLAttributes<HTMLDivElement> {
    /** Whether sheet is open */
    isOpen: boolean;
    /** Close callback */
    onClose: () => void;
    /** Snap points */
    snapPoints?: number[];
    /** Default snap index */
    defaultSnapIndex?: number;
    /** Show drag indicator */
    showDragIndicator?: boolean;
    children?: ReactNode;
}

/**
 * Bottom Sheet component
 */
export const BottomSheet = forwardRef<HTMLDivElement, BottomSheetProps>(
    (
        {
            isOpen,
            onClose,
            snapPoints = [0.5, 0.9],
            defaultSnapIndex = 0,
            showDragIndicator = true,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const [currentSnap, setCurrentSnap] = useState(defaultSnapIndex);
        const sheetRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (isOpen) {
                document.body.style.overflow = 'hidden';
                setCurrentSnap(defaultSnapIndex);
            } else {
                document.body.style.overflow = '';
            }
            return () => { document.body.style.overflow = ''; };
        }, [isOpen, defaultSnapIndex]);

        useEffect(() => {
            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === 'Escape') onClose();
            };
            if (isOpen) document.addEventListener('keydown', handleEsc);
            return () => document.removeEventListener('keydown', handleEsc);
        }, [isOpen, onClose]);

        if (!isOpen) return null;

        const heightPercent = snapPoints[currentSnap];

        return (
            <div className="fixed inset-0 z-50">
                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                    onClick={onClose}
                />

                {/* Sheet */}
                <div
                    ref={ref || sheetRef}
                    className={cn(
                        'absolute bottom-0 left-0 right-0 bg-[var(--x-card)] rounded-t-2xl shadow-2xl',
                        'transition-all duration-300 ease-out',
                        className
                    )}
                    style={{ height: `${heightPercent * 100}vh` }}
                    {...props}
                >
                    {/* Drag indicator */}
                    {showDragIndicator && (
                        <div className="flex justify-center py-3">
                            <div
                                className="w-10 h-1 rounded-full bg-[var(--x-muted)] cursor-grab"
                                onClick={() => setCurrentSnap((prev) => (prev + 1) % snapPoints.length)}
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="px-4 pb-4 overflow-auto" style={{ maxHeight: `calc(${heightPercent * 100}vh - 48px)` }}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
);

BottomSheet.displayName = 'BottomSheet';
