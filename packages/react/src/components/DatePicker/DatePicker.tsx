'use client';

import React, { useState, useMemo } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface DatePickerProps {
    /** Selected date */
    value?: Date;
    /** On change callback */
    onChange?: (date: Date) => void;
    /** Min date */
    minDate?: Date;
    /** Max date */
    maxDate?: Date;
    /** Placeholder */
    placeholder?: string;
    /** Disabled */
    isDisabled?: boolean;
    /** Size */
    size?: 'sm' | 'md' | 'lg';
    /** Label */
    label?: string;
}

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
    return new Date(year, month, 1).getDay();
}

const sizeStyles = {
    sm: 'h-9 text-sm px-3',
    md: 'h-11 text-sm px-4',
    lg: 'h-13 text-base px-5',
};

export function DatePicker({
    value,
    onChange,
    minDate,
    maxDate,
    placeholder = 'Select date',
    isDisabled = false,
    size = 'md',
    label,
}: DatePickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [viewDate, setViewDate] = useState(value || new Date());

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    const calendarDays = useMemo(() => {
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        const days: (number | null)[] = [];

        // Empty cells for days before first day
        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }

        // Days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }

        return days;
    }, [year, month]);

    const isDateDisabled = (day: number) => {
        const date = new Date(year, month, day);
        if (minDate && date < minDate) return true;
        if (maxDate && date > maxDate) return true;
        return false;
    };

    const isToday = (day: number) => {
        const today = new Date();
        return (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        );
    };

    const isSelected = (day: number) => {
        if (!value) return false;
        return (
            day === value.getDate() &&
            month === value.getMonth() &&
            year === value.getFullYear()
        );
    };

    const handleDayClick = (day: number) => {
        if (isDateDisabled(day)) return;
        const newDate = new Date(year, month, day);
        onChange?.(newDate);
        setIsOpen(false);
    };

    const navigateMonth = (direction: -1 | 1) => {
        setViewDate(new Date(year, month + direction, 1));
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <div className="relative w-full">
            {label && (
                <label className="block text-sm font-medium text-[var(--x-foreground)] mb-2">
                    {label}
                </label>
            )}

            {/* Input Trigger */}
            <button
                type="button"
                onClick={() => !isDisabled && setIsOpen(!isOpen)}
                disabled={isDisabled}
                className={cn(
                    'w-full flex items-center justify-between rounded-xl',
                    'bg-white/[0.06] border border-white/[0.1]',
                    'text-left transition-all duration-200',
                    'hover:bg-white/[0.08] hover:border-white/[0.15]',
                    'focus:outline-none focus:ring-2 focus:ring-[var(--x-ring)]/20',
                    'disabled:opacity-50 disabled:cursor-not-allowed',
                    sizeStyles[size]
                )}
            >
                <span className={value ? 'text-[var(--x-foreground)]' : 'text-[var(--x-mutedForeground)]/60'}>
                    {value ? formatDate(value) : placeholder}
                </span>
                <svg
                    className="w-5 h-5 text-[var(--x-mutedForeground)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                >
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </button>

            {/* Calendar Dropdown */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Calendar */}
                    <div
                        className={cn(
                            'absolute z-50 mt-2 p-4 rounded-2xl',
                            'bg-[rgba(20,20,25,0.98)] backdrop-blur-xl',
                            'border border-white/[0.1]',
                            'shadow-[0_8px_32px_rgba(0,0,0,0.3)]',
                            'animate-in fade-in slide-in-from-top-2 duration-200'
                        )}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <button
                                onClick={() => navigateMonth(-1)}
                                className="p-2 rounded-lg hover:bg-white/[0.1] transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <span className="font-semibold text-[var(--x-foreground)]">
                                {MONTHS[month]} {year}
                            </span>
                            <button
                                onClick={() => navigateMonth(1)}
                                className="p-2 rounded-lg hover:bg-white/[0.1] transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Days of Week */}
                        <div className="grid grid-cols-7 gap-1 mb-2">
                            {DAYS.map((day) => (
                                <div
                                    key={day}
                                    className="w-9 h-8 flex items-center justify-center text-xs font-medium text-[var(--x-mutedForeground)]"
                                >
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1">
                            {calendarDays.map((day, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    disabled={day === null || isDateDisabled(day)}
                                    onClick={() => day && handleDayClick(day)}
                                    className={cn(
                                        'w-9 h-9 flex items-center justify-center rounded-lg text-sm',
                                        'transition-all duration-150',
                                        day === null && 'invisible',
                                        day && !isSelected(day) && !isToday(day) ? 'hover:bg-white/[0.1]' : '',
                                        day && isDateDisabled(day) ? 'opacity-30 cursor-not-allowed' : '',
                                        day && isToday(day) && !isSelected(day) ? 'text-[var(--x-primary)] font-semibold' : '',
                                        day && isSelected(day) ? 'bg-[var(--x-primary)] text-white font-semibold shadow-[0_0_12px_rgba(99,102,241,0.4)]' : ''
                                    )}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>

                        {/* Today Button */}
                        <div className="mt-4 pt-4 border-t border-white/[0.08]">
                            <button
                                type="button"
                                onClick={() => {
                                    const today = new Date();
                                    onChange?.(today);
                                    setViewDate(today);
                                    setIsOpen(false);
                                }}
                                className="w-full py-2 text-sm font-medium text-[var(--x-primary)] hover:bg-white/[0.1] rounded-lg transition-colors"
                            >
                                Today
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default DatePicker;
