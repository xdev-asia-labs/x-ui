'use client';

import React, { useState, useCallback } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface ColorPickerProps {
    value?: string;
    defaultValue?: string;
    onChange?: (color: string) => void;
    presets?: string[];
    showInput?: boolean;
    disabled?: boolean;
    className?: string;
}

const defaultPresets = [
    '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16',
    '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9',
    '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef',
    '#ec4899', '#f43f5e', '#64748b', '#000000', '#ffffff',
];

export function ColorPicker({
    value: controlledValue,
    defaultValue = '#3b82f6',
    onChange,
    presets = defaultPresets,
    showInput = true,
    disabled = false,
    className,
}: ColorPickerProps) {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const value = controlledValue ?? internalValue;

    const handleChange = useCallback((newColor: string) => {
        if (disabled) return;
        if (controlledValue === undefined) {
            setInternalValue(newColor);
        }
        onChange?.(newColor);
    }, [disabled, controlledValue, onChange]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (/^#[0-9A-Fa-f]{0,6}$/.test(newValue)) {
            handleChange(newValue);
        }
    };

    return (
        <div className={cn('x-color-picker', disabled && 'opacity-50', className)}>
            {/* Color preview and native picker */}
            <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                    <div
                        className="w-10 h-10 rounded-lg border-2 border-[var(--x-border)] shadow-sm"
                        style={{ backgroundColor: value }}
                    />
                    <input
                        type="color"
                        value={value}
                        onChange={(e) => handleChange(e.target.value)}
                        disabled={disabled}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                </div>
                {showInput && (
                    <input
                        type="text"
                        value={value}
                        onChange={handleInputChange}
                        disabled={disabled}
                        placeholder="#000000"
                        className={cn(
                            'x-color-picker-input flex-1 px-3 py-2 rounded-lg text-sm font-mono',
                            'bg-[var(--x-muted)] border border-[var(--x-border)]',
                            'text-[var(--x-foreground)]',
                            'focus:outline-none focus:ring-2 focus:ring-indigo-500',
                            disabled && 'cursor-not-allowed'
                        )}
                    />
                )}
            </div>

            {/* Preset colors */}
            {presets.length > 0 && (
                <div className="x-color-picker-presets grid grid-cols-10 gap-1">
                    {presets.map((color) => (
                        <button
                            key={color}
                            type="button"
                            disabled={disabled}
                            onClick={() => handleChange(color)}
                            className={cn(
                                'w-6 h-6 rounded-md border-2 transition-transform hover:scale-110',
                                value.toLowerCase() === color.toLowerCase()
                                    ? 'border-[var(--x-foreground)] ring-2 ring-[var(--x-foreground)] ring-offset-1'
                                    : 'border-transparent',
                                disabled && 'cursor-not-allowed'
                            )}
                            style={{ backgroundColor: color }}
                            title={color}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
