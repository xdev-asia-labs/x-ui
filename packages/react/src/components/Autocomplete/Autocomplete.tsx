'use client';

import React, { useState, useRef, useEffect, useMemo, KeyboardEvent } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface AutocompleteOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface AutocompleteProps {
    options: AutocompleteOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    onInputChange?: (input: string) => void;
    placeholder?: string;
    disabled?: boolean;
    loading?: boolean;
    emptyMessage?: string;
    className?: string;
}

export function Autocomplete({
    options,
    value: controlledValue,
    defaultValue = '',
    onChange,
    onInputChange,
    placeholder = 'Search...',
    disabled = false,
    loading = false,
    emptyMessage = 'No results found',
    className,
}: AutocompleteProps) {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const [inputValue, setInputValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const value = controlledValue ?? internalValue;

    const filteredOptions = useMemo(() => {
        if (!inputValue) return options;
        const query = inputValue.toLowerCase();
        return options.filter(opt =>
            opt.label.toLowerCase().includes(query) ||
            opt.value.toLowerCase().includes(query)
        );
    }, [options, inputValue]);

    const selectedOption = options.find(opt => opt.value === value);

    useEffect(() => {
        if (selectedOption) {
            setInputValue(selectedOption.label);
        }
    }, [selectedOption]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        setIsOpen(true);
        setHighlightedIndex(-1);
        onInputChange?.(newValue);
    };

    const handleSelect = (option: AutocompleteOption) => {
        if (option.disabled) return;

        setInputValue(option.label);
        setIsOpen(false);

        if (controlledValue === undefined) {
            setInternalValue(option.value);
        }
        onChange?.(option.value);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setIsOpen(true);
                setHighlightedIndex(prev =>
                    prev < filteredOptions.length - 1 ? prev + 1 : prev
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setHighlightedIndex(prev => prev > 0 ? prev - 1 : prev);
                break;
            case 'Enter':
                e.preventDefault();
                if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
                    handleSelect(filteredOptions[highlightedIndex]);
                }
                break;
            case 'Escape':
                setIsOpen(false);
                break;
        }
    };

    const handleBlur = () => {
        setTimeout(() => setIsOpen(false), 150);
    };

    return (
        <div className={cn('x-autocomplete relative', className)}>
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setIsOpen(true)}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                disabled={disabled}
                className={cn(
                    'x-autocomplete-input w-full px-4 py-2.5 rounded-lg',
                    'bg-[var(--x-muted)] border border-[var(--x-border)]',
                    'text-[var(--x-foreground)] placeholder:text-[var(--x-mutedForeground)]',
                    'focus:outline-none focus:ring-2 focus:ring-indigo-500',
                    disabled && 'opacity-50 cursor-not-allowed'
                )}
            />

            {/* Loading indicator */}
            {loading && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                </div>
            )}

            {/* Dropdown */}
            {isOpen && !disabled && (
                <ul
                    ref={listRef}
                    className={cn(
                        'x-autocomplete-list absolute z-50 w-full mt-1 py-1 rounded-lg',
                        'bg-[var(--x-card)] border border-[var(--x-border)]',
                        'shadow-lg max-h-60 overflow-auto'
                    )}
                >
                    {filteredOptions.length === 0 ? (
                        <li className="px-4 py-2 text-sm text-[var(--x-mutedForeground)]">
                            {emptyMessage}
                        </li>
                    ) : (
                        filteredOptions.map((option, index) => (
                            <li
                                key={option.value}
                                onClick={() => handleSelect(option)}
                                className={cn(
                                    'x-autocomplete-option px-4 py-2 text-sm cursor-pointer',
                                    'transition-colors',
                                    index === highlightedIndex && 'bg-[var(--x-muted)]',
                                    option.value === value && 'text-indigo-500 font-medium',
                                    option.disabled && 'opacity-50 cursor-not-allowed',
                                    !option.disabled && 'hover:bg-[var(--x-muted)] text-[var(--x-foreground)]'
                                )}
                            >
                                {option.label}
                            </li>
                        ))
                    )}
                </ul>
            )}
        </div>
    );
}
