'use client';

import React, { useState, useRef, useCallback } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface SliderProps {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    onChange?: (value: number) => void;
    onChangeEnd?: (value: number) => void;
    disabled?: boolean;
    colorScheme?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md' | 'lg';
    showValue?: boolean;
    className?: string;
}

const colorSchemes = {
    primary: 'bg-indigo-500',
    secondary: 'bg-purple-500',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    error: 'bg-red-500',
};

const sizes = {
    sm: { track: 'h-1', thumb: 'w-3 h-3' },
    md: { track: 'h-2', thumb: 'w-4 h-4' },
    lg: { track: 'h-3', thumb: 'w-5 h-5' },
};

export function Slider({
    value: controlledValue,
    defaultValue = 0,
    min = 0,
    max = 100,
    step = 1,
    onChange,
    onChangeEnd,
    disabled = false,
    colorScheme = 'primary',
    size = 'md',
    showValue = false,
    className,
}: SliderProps) {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const value = controlledValue ?? internalValue;
    const trackRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const percentage = ((value - min) / (max - min)) * 100;

    const updateValue = useCallback((clientX: number) => {
        if (!trackRef.current || disabled) return;

        const rect = trackRef.current.getBoundingClientRect();
        const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const rawValue = min + percent * (max - min);
        const steppedValue = Math.round(rawValue / step) * step;
        const clampedValue = Math.max(min, Math.min(max, steppedValue));

        if (controlledValue === undefined) {
            setInternalValue(clampedValue);
        }
        onChange?.(clampedValue);
    }, [min, max, step, disabled, controlledValue, onChange]);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (disabled) return;
        isDragging.current = true;
        updateValue(e.clientX);

        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging.current) {
                updateValue(e.clientX);
            }
        };

        const handleMouseUp = () => {
            isDragging.current = false;
            onChangeEnd?.(value);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (disabled) return;

        let newValue = value;
        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowUp':
                newValue = Math.min(max, value + step);
                break;
            case 'ArrowLeft':
            case 'ArrowDown':
                newValue = Math.max(min, value - step);
                break;
            case 'Home':
                newValue = min;
                break;
            case 'End':
                newValue = max;
                break;
            default:
                return;
        }

        e.preventDefault();
        if (controlledValue === undefined) {
            setInternalValue(newValue);
        }
        onChange?.(newValue);
        onChangeEnd?.(newValue);
    };

    return (
        <div className={cn('x-slider flex items-center gap-3', className)}>
            <div
                ref={trackRef}
                className={cn(
                    'x-slider-track relative flex-1 rounded-full cursor-pointer',
                    'bg-[var(--x-muted)]',
                    sizes[size].track,
                    disabled && 'opacity-50 cursor-not-allowed'
                )}
                onMouseDown={handleMouseDown}
            >
                {/* Fill */}
                <div
                    className={cn(
                        'x-slider-fill absolute inset-y-0 left-0 rounded-full',
                        colorSchemes[colorScheme]
                    )}
                    style={{ width: `${percentage}%` }}
                />

                {/* Thumb */}
                <div
                    role="slider"
                    tabIndex={disabled ? -1 : 0}
                    aria-valuemin={min}
                    aria-valuemax={max}
                    aria-valuenow={value}
                    aria-disabled={disabled}
                    onKeyDown={handleKeyDown}
                    className={cn(
                        'x-slider-thumb absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full',
                        'bg-white shadow-lg border-2 transition-transform',
                        'hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2',
                        `border-${colorScheme === 'primary' ? 'indigo' : colorScheme}-500`,
                        sizes[size].thumb,
                        disabled && 'cursor-not-allowed'
                    )}
                    style={{ left: `${percentage}%` }}
                />
            </div>

            {showValue && (
                <span className="x-slider-value text-sm font-medium text-[var(--x-foreground)] min-w-[3ch] text-right">
                    {value}
                </span>
            )}
        </div>
    );
}
