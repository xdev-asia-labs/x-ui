'use client';

import React, { useState } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface CalendarProps {
    value?: Date;
    defaultValue?: Date;
    onChange?: (date: Date) => void;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    className?: string;
}

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

export function Calendar({
    value: controlledValue,
    defaultValue = new Date(),
    onChange,
    minDate,
    maxDate,
    disabled = false,
    className,
}: CalendarProps) {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [viewDate, setViewDate] = useState(controlledValue || defaultValue);
    const value = controlledValue ?? internalValue;

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const handlePrevMonth = () => {
        setViewDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setViewDate(new Date(year, month + 1, 1));
    };

    const handleDateClick = (day: number) => {
        if (disabled) return;
        const newDate = new Date(year, month, day);

        if (minDate && newDate < minDate) return;
        if (maxDate && newDate > maxDate) return;

        if (controlledValue === undefined) {
            setInternalValue(newDate);
        }
        onChange?.(newDate);
    };

    const isSelected = (day: number) => {
        return (
            value.getDate() === day &&
            value.getMonth() === month &&
            value.getFullYear() === year
        );
    };

    const isToday = (day: number) => {
        const today = new Date();
        return (
            today.getDate() === day &&
            today.getMonth() === month &&
            today.getFullYear() === year
        );
    };

    const isDisabled = (day: number) => {
        const date = new Date(year, month, day);
        if (minDate && date < minDate) return true;
        if (maxDate && date > maxDate) return true;
        return false;
    };

    // Build calendar grid
    const days: (number | null)[] = [];

    // Previous month days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
        days.push(null);
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    return (
        <div className={cn('x-calendar p-4 rounded-xl bg-[var(--x-card)] border border-[var(--x-border)]', className)}>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={handlePrevMonth}
                    disabled={disabled}
                    className="p-2 rounded-lg hover:bg-[var(--x-muted)] transition-colors text-[var(--x-mutedForeground)]"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <span className="font-semibold text-[var(--x-foreground)]">
                    {MONTHS[month]} {year}
                </span>
                <button
                    onClick={handleNextMonth}
                    disabled={disabled}
                    className="p-2 rounded-lg hover:bg-[var(--x-muted)] transition-colors text-[var(--x-mutedForeground)]"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
                {DAYS.map((day) => (
                    <div key={day} className="text-center text-xs font-medium text-[var(--x-mutedForeground)] py-2">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => (
                    <button
                        key={index}
                        disabled={day === null || disabled || isDisabled(day)}
                        onClick={() => day && handleDateClick(day)}
                        className={cn(
                            'h-9 w-9 rounded-lg text-sm transition-all flex items-center justify-center',
                            day === null && 'invisible',
                            day !== null && !isSelected(day) && !isDisabled(day) &&
                            'hover:bg-[var(--x-muted)] text-[var(--x-foreground)]',
                            isSelected(day!) && 'bg-indigo-500 text-white font-medium',
                            isToday(day!) && !isSelected(day!) && 'ring-1 ring-indigo-500',
                            isDisabled(day!) && 'text-[var(--x-mutedForeground)] opacity-50 cursor-not-allowed'
                        )}
                    >
                        {day}
                    </button>
                ))}
            </div>
        </div>
    );
}
