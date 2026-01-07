'use client';

import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import { cn, generateId } from '@xdev-asia/x-ui-core';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Variant style */
    variant?: 'outline' | 'filled' | 'glass';
    /** Whether auto-resize */
    autoResize?: boolean;
    /** Error state */
    isInvalid?: boolean;
    /** Disabled state */
    isDisabled?: boolean;
    /** Label */
    label?: string;
    /** Error message */
    errorMessage?: string;
    /** Helper text */
    helperText?: string;
}

const variantStyles = {
    outline: 'border border-[var(--x-input)] bg-transparent focus:border-[var(--x-ring)]',
    filled: 'border border-transparent bg-[var(--x-muted)] focus:bg-transparent focus:border-[var(--x-ring)]',
    glass: 'border border-[var(--x-glass-border)] bg-[var(--x-glass-bg)] backdrop-blur-lg focus:border-[var(--x-ring)]',
};

/**
 * TextArea component
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    (
        {
            variant = 'outline',
            autoResize = false,
            isInvalid = false,
            isDisabled = false,
            label,
            errorMessage,
            helperText,
            className,
            id,
            rows = 4,
            ...props
        },
        ref
    ) => {
        const inputId = id || generateId('textarea');

        const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
            if (autoResize) {
                const target = e.currentTarget;
                target.style.height = 'auto';
                target.style.height = `${target.scrollHeight}px`;
            }
        };

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-[var(--x-foreground)] mb-1.5"
                    >
                        {label}
                    </label>
                )}

                <textarea
                    ref={ref}
                    id={inputId}
                    rows={rows}
                    className={cn(
                        'w-full px-4 py-3 rounded-lg resize-y transition-colors duration-200',
                        'text-[var(--x-foreground)] placeholder:text-[var(--x-mutedForeground)]',
                        'focus:outline-none focus:ring-2 focus:ring-[var(--x-ring)]/30',
                        'disabled:opacity-50 disabled:cursor-not-allowed',
                        variantStyles[variant],
                        isInvalid && 'border-[var(--x-destructive)] focus:border-[var(--x-destructive)]',
                        autoResize && 'resize-none overflow-hidden',
                        className
                    )}
                    disabled={isDisabled}
                    aria-invalid={isInvalid}
                    onInput={handleInput}
                    {...props}
                />

                {errorMessage && isInvalid && (
                    <p className="mt-1.5 text-sm text-[var(--x-destructive)]">{errorMessage}</p>
                )}

                {helperText && !isInvalid && (
                    <p className="mt-1.5 text-sm text-[var(--x-mutedForeground)]">{helperText}</p>
                )}
            </div>
        );
    }
);

TextArea.displayName = 'TextArea';
