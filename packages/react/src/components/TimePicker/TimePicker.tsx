'use client';

import React, { useState, useMemo } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface TimePickerProps {
    value?: string; // HH:mm format
    defaultValue?: string;
    onChange?: (time: string) => void;
    use24Hour?: boolean;
    minuteStep?: number;
    disabled?: boolean;
    className?: string;
}

export function TimePicker({
    value: controlledValue,
    defaultValue = '12:00',
    onChange,
    use24Hour = true,
    minuteStep = 5,
    disabled = false,
    className,
}: TimePickerProps) {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const value = controlledValue ?? internalValue;

    const [hour, minute] = value.split(':').map(Number);
    const [period, setPeriod] = useState<'AM' | 'PM'>(hour >= 12 ? 'PM' : 'AM');

    const hours = useMemo(() => {
        if (use24Hour) {
            return Array.from({ length: 24 }, (_, i) => i);
        }
        return Array.from({ length: 12 }, (_, i) => i === 0 ? 12 : i);
    }, [use24Hour]);

    const minutes = useMemo(() => {
        return Array.from({ length: Math.ceil(60 / minuteStep) }, (_, i) => i * minuteStep);
    }, [minuteStep]);

    const updateTime = (newHour: number, newMinute: number) => {
        if (disabled) return;
        const timeStr = `${String(newHour).padStart(2, '0')}:${String(newMinute).padStart(2, '0')}`;
        if (controlledValue === undefined) {
            setInternalValue(timeStr);
        }
        onChange?.(timeStr);
    };

    const handleHourChange = (newHour: number) => {
        let actualHour = newHour;
        if (!use24Hour) {
            if (period === 'PM' && newHour !== 12) actualHour = newHour + 12;
            if (period === 'AM' && newHour === 12) actualHour = 0;
        }
        updateTime(actualHour, minute);
    };

    const handleMinuteChange = (newMinute: number) => {
        updateTime(hour, newMinute);
    };

    const handlePeriodChange = (newPeriod: 'AM' | 'PM') => {
        if (disabled) return;
        setPeriod(newPeriod);
        let newHour = hour;
        if (newPeriod === 'AM' && hour >= 12) newHour = hour - 12;
        if (newPeriod === 'PM' && hour < 12) newHour = hour + 12;
        updateTime(newHour, minute);
    };

    const displayHour = use24Hour ? hour : (hour % 12 || 12);

    return (
        <div className={cn('x-time-picker inline-flex items-center gap-2', className)}>
            {/* Hour selector */}
            <div className="relative">
                <select
                    value={displayHour}
                    onChange={(e) => handleHourChange(Number(e.target.value))}
                    disabled={disabled}
                    className={cn(
                        'x-time-picker-hour appearance-none px-3 py-2 pr-8 rounded-lg text-center',
                        'bg-[var(--x-muted)] border border-[var(--x-border)]',
                        'text-[var(--x-foreground)] font-medium',
                        'focus:outline-none focus:ring-2 focus:ring-indigo-500',
                        disabled && 'opacity-50 cursor-not-allowed'
                    )}
                >
                    {hours.map((h) => (
                        <option key={h} value={h}>
                            {String(h).padStart(2, '0')}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-[var(--x-mutedForeground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            <span className="text-lg font-bold text-[var(--x-foreground)]">:</span>

            {/* Minute selector */}
            <div className="relative">
                <select
                    value={minute}
                    onChange={(e) => handleMinuteChange(Number(e.target.value))}
                    disabled={disabled}
                    className={cn(
                        'x-time-picker-minute appearance-none px-3 py-2 pr-8 rounded-lg text-center',
                        'bg-[var(--x-muted)] border border-[var(--x-border)]',
                        'text-[var(--x-foreground)] font-medium',
                        'focus:outline-none focus:ring-2 focus:ring-indigo-500',
                        disabled && 'opacity-50 cursor-not-allowed'
                    )}
                >
                    {minutes.map((m) => (
                        <option key={m} value={m}>
                            {String(m).padStart(2, '0')}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-[var(--x-mutedForeground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {/* AM/PM toggle */}
            {!use24Hour && (
                <div className="flex rounded-lg overflow-hidden border border-[var(--x-border)]">
                    <button
                        onClick={() => handlePeriodChange('AM')}
                        disabled={disabled}
                        className={cn(
                            'px-3 py-2 text-sm font-medium transition-colors',
                            period === 'AM'
                                ? 'bg-indigo-500 text-white'
                                : 'bg-[var(--x-muted)] text-[var(--x-mutedForeground)] hover:bg-[var(--x-muted)]',
                            disabled && 'opacity-50 cursor-not-allowed'
                        )}
                    >
                        AM
                    </button>
                    <button
                        onClick={() => handlePeriodChange('PM')}
                        disabled={disabled}
                        className={cn(
                            'px-3 py-2 text-sm font-medium transition-colors',
                            period === 'PM'
                                ? 'bg-indigo-500 text-white'
                                : 'bg-[var(--x-muted)] text-[var(--x-mutedForeground)] hover:bg-[var(--x-muted)]',
                            disabled && 'opacity-50 cursor-not-allowed'
                        )}
                    >
                        PM
                    </button>
                </div>
            )}
        </div>
    );
}
