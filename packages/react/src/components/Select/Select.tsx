'use client';

import React, {
    forwardRef,
    useState,
    useRef,
    useEffect,
    useCallback,
    useMemo,
    ReactNode,
    useId,
    KeyboardEvent,
} from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
    group?: string;
}

export interface SelectProps {
    /** Options to display */
    options: SelectOption[];
    /** Selected value (single mode) */
    value?: string;
    /** Selected values (multiple mode) */
    values?: string[];
    /** Change handler (single mode) */
    onChange?: (value: string) => void;
    /** Change handler (multiple mode) */
    onValuesChange?: (values: string[]) => void;
    /** Placeholder text */
    placeholder?: string;
    /** Enable search/filter */
    searchable?: boolean;
    /** Search placeholder */
    searchPlaceholder?: string;
    /** Enable multiple selection */
    multiple?: boolean;
    /** Enable tagging (create new options) */
    tagging?: boolean;
    /** Tag creation handler */
    onCreateTag?: (value: string) => void;
    /** Enable clear button */
    clearable?: boolean;
    /** Variant */
    variant?: 'outline' | 'filled' | 'glass';
    /** Size */
    size?: 'sm' | 'md' | 'lg';
    /** Error state */
    isInvalid?: boolean;
    /** Disabled */
    isDisabled?: boolean;
    /** Loading state */
    isLoading?: boolean;
    /** Label */
    label?: string;
    /** Error message */
    errorMessage?: string;
    /** Maximum items to show in multi-select before collapsing */
    maxDisplayItems?: number;
    /** Custom class name */
    className?: string;
    /** ID */
    id?: string;
    /** No results text */
    noResultsText?: string;
    /** Custom option renderer */
    renderOption?: (option: SelectOption, isSelected: boolean) => ReactNode;
}

const variantStyles = {
    outline: 'border border-[var(--x-input)] bg-transparent',
    filled: 'border border-transparent bg-[var(--x-muted)]',
    glass: 'border border-[var(--x-glass-border)] bg-[var(--x-glass-bg)] backdrop-blur-lg',
};

const sizeStyles = {
    sm: { height: 'min-h-[32px]', text: 'text-sm', padding: 'px-3 py-1.5', tag: 'text-xs px-1.5 py-0.5' },
    md: { height: 'min-h-[40px]', text: 'text-sm', padding: 'px-4 py-2', tag: 'text-xs px-2 py-1' },
    lg: { height: 'min-h-[48px]', text: 'text-base', padding: 'px-4 py-2.5', tag: 'text-sm px-2 py-1' },
};

/**
 * Advanced Select component with search, multi-select, tagging support
 * Similar to Select2 functionality
 */
export const Select = forwardRef<HTMLDivElement, SelectProps>(
    (
        {
            options,
            value,
            values = [],
            onChange,
            onValuesChange,
            placeholder = 'Select...',
            searchable = false,
            searchPlaceholder = 'Search...',
            multiple = false,
            tagging = false,
            onCreateTag,
            clearable = false,
            variant = 'outline',
            size = 'md',
            isInvalid = false,
            isDisabled = false,
            isLoading = false,
            label,
            errorMessage,
            maxDisplayItems = 3,
            className,
            id,
            noResultsText = 'No results found',
            renderOption,
        },
        ref
    ) => {
        const reactId = useId();
        const selectId = id || `select${reactId}`;
        const containerRef = useRef<HTMLDivElement>(null);
        const inputRef = useRef<HTMLInputElement>(null);

        const [isOpen, setIsOpen] = useState(false);
        const [searchQuery, setSearchQuery] = useState('');
        const [highlightedIndex, setHighlightedIndex] = useState(-1);

        // Get selected values
        const selectedValues = multiple ? values : value ? [value] : [];

        // Filter options based on search
        const filteredOptions = useMemo(() => {
            if (!searchQuery.trim()) return options;
            const query = searchQuery.toLowerCase();
            return options.filter(
                (opt) =>
                    opt.label.toLowerCase().includes(query) ||
                    opt.value.toLowerCase().includes(query)
            );
        }, [options, searchQuery]);

        // Group options
        const groupedOptions = useMemo(() => {
            const groups: Record<string, SelectOption[]> = {};
            const ungrouped: SelectOption[] = [];

            filteredOptions.forEach((opt) => {
                if (opt.group) {
                    if (!groups[opt.group]) groups[opt.group] = [];
                    groups[opt.group].push(opt);
                } else {
                    ungrouped.push(opt);
                }
            });

            return { groups, ungrouped };
        }, [filteredOptions]);

        // Close on outside click
        useEffect(() => {
            const handleClickOutside = (e: MouseEvent) => {
                if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                    setIsOpen(false);
                    setSearchQuery('');
                }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, []);

        // Focus input when opened
        useEffect(() => {
            if (isOpen && searchable && inputRef.current) {
                inputRef.current.focus();
            }
        }, [isOpen, searchable]);

        const handleToggle = useCallback(() => {
            if (!isDisabled) {
                setIsOpen((prev) => !prev);
                setHighlightedIndex(-1);
            }
        }, [isDisabled]);

        const handleSelect = useCallback(
            (optValue: string) => {
                if (multiple) {
                    const newValues = selectedValues.includes(optValue)
                        ? selectedValues.filter((v) => v !== optValue)
                        : [...selectedValues, optValue];
                    onValuesChange?.(newValues);
                } else {
                    onChange?.(optValue);
                    setIsOpen(false);
                }
                setSearchQuery('');
            },
            [multiple, selectedValues, onChange, onValuesChange]
        );

        const handleRemoveTag = useCallback(
            (optValue: string, e: React.MouseEvent) => {
                e.stopPropagation();
                const newValues = selectedValues.filter((v) => v !== optValue);
                onValuesChange?.(newValues);
            },
            [selectedValues, onValuesChange]
        );

        const handleClear = useCallback(
            (e: React.MouseEvent) => {
                e.stopPropagation();
                if (multiple) {
                    onValuesChange?.([]);
                } else {
                    onChange?.('');
                }
            },
            [multiple, onChange, onValuesChange]
        );

        const handleCreateTag = useCallback(() => {
            if (tagging && searchQuery.trim() && onCreateTag) {
                onCreateTag(searchQuery.trim());
                handleSelect(searchQuery.trim());
            }
        }, [tagging, searchQuery, onCreateTag, handleSelect]);

        const handleKeyDown = useCallback(
            (e: KeyboardEvent) => {
                if (!isOpen) {
                    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                        e.preventDefault();
                        setIsOpen(true);
                    }
                    return;
                }

                switch (e.key) {
                    case 'Escape':
                        setIsOpen(false);
                        setSearchQuery('');
                        break;
                    case 'ArrowDown':
                        e.preventDefault();
                        setHighlightedIndex((prev) =>
                            prev < filteredOptions.length - 1 ? prev + 1 : 0
                        );
                        break;
                    case 'ArrowUp':
                        e.preventDefault();
                        setHighlightedIndex((prev) =>
                            prev > 0 ? prev - 1 : filteredOptions.length - 1
                        );
                        break;
                    case 'Enter':
                        e.preventDefault();
                        if (highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
                            handleSelect(filteredOptions[highlightedIndex].value);
                        } else if (tagging && searchQuery.trim()) {
                            handleCreateTag();
                        }
                        break;
                }
            },
            [isOpen, filteredOptions, highlightedIndex, handleSelect, tagging, searchQuery, handleCreateTag]
        );

        const getDisplayValue = () => {
            if (selectedValues.length === 0) {
                return <span className="text-[var(--x-mutedForeground)]">{placeholder}</span>;
            }

            if (multiple) {
                const displayItems = selectedValues.slice(0, maxDisplayItems);
                const remaining = selectedValues.length - maxDisplayItems;

                return (
                    <div className="flex flex-wrap gap-1">
                        {displayItems.map((val) => {
                            const opt = options.find((o) => o.value === val);
                            return (
                                <span
                                    key={val}
                                    className={cn(
                                        'x-select-tag inline-flex items-center gap-1 rounded bg-[var(--x-primary)]/20 text-[var(--x-primary)]',
                                        sizeStyles[size].tag
                                    )}
                                >
                                    {opt?.label || val}
                                    <button
                                        type="button"
                                        onClick={(e) => handleRemoveTag(val, e)}
                                        className="hover:text-[var(--x-destructive)] ml-0.5"
                                        aria-label={`Remove ${opt?.label || val}`}
                                    >
                                        ×
                                    </button>
                                </span>
                            );
                        })}
                        {remaining > 0 && (
                            <span className={cn('text-[var(--x-mutedForeground)]', sizeStyles[size].tag)}>
                                +{remaining} more
                            </span>
                        )}
                    </div>
                );
            }

            const selectedOption = options.find((o) => o.value === selectedValues[0]);
            return selectedOption?.label || selectedValues[0];
        };

        const renderOptionItem = (opt: SelectOption, index: number) => {
            const isSelected = selectedValues.includes(opt.value);
            const isHighlighted = index === highlightedIndex;

            return (
                <div
                    key={opt.value}
                    className={cn(
                        'x-select-option cursor-pointer px-4 py-2 transition-colors',
                        isHighlighted && 'bg-white/[0.08]',
                        isSelected && 'bg-[var(--x-primary)]/10 text-[var(--x-primary)]',
                        opt.disabled && 'opacity-50 cursor-not-allowed'
                    )}
                    onClick={() => !opt.disabled && handleSelect(opt.value)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    role="option"
                    aria-selected={isSelected}
                    aria-disabled={opt.disabled}
                >
                    {renderOption ? (
                        renderOption(opt, isSelected)
                    ) : (
                        <div className="flex items-center justify-between">
                            <span>{opt.label}</span>
                            {multiple && isSelected && (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </div>
                    )}
                </div>
            );
        };

        let flatIndex = 0;

        return (
            <div className="x-select-wrapper w-full" ref={ref}>
                {label && (
                    <label
                        htmlFor={selectId}
                        className="block text-sm font-medium text-[var(--x-foreground)] mb-1.5"
                    >
                        {label}
                    </label>
                )}

                <div ref={containerRef} className="relative">
                    {/* Trigger */}
                    <div
                        id={selectId}
                        className={cn(
                            'x-select',
                            `x-select-${variant}`,
                            `x-select-${size}`,
                            'w-full rounded-lg cursor-pointer transition-colors duration-200',
                            'text-[var(--x-foreground)]',
                            'flex items-center justify-between gap-2',
                            variantStyles[variant],
                            sizeStyles[size].height,
                            sizeStyles[size].text,
                            sizeStyles[size].padding,
                            isOpen && 'ring-2 ring-[var(--x-ring)]/30 border-[var(--x-ring)]',
                            isInvalid && 'border-[var(--x-destructive)]',
                            isDisabled && 'opacity-50 cursor-not-allowed',
                            className
                        )}
                        onClick={handleToggle}
                        onKeyDown={handleKeyDown}
                        tabIndex={isDisabled ? -1 : 0}
                        role="combobox"
                        aria-expanded={isOpen}
                        aria-haspopup="listbox"
                        aria-disabled={isDisabled}
                    >
                        <div className="flex-1 min-w-0 overflow-hidden">{getDisplayValue()}</div>

                        <div className="flex items-center gap-1">
                            {/* Loading */}
                            {isLoading && (
                                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        fill="none"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                    />
                                </svg>
                            )}

                            {/* Clear button */}
                            {clearable && selectedValues.length > 0 && !isDisabled && (
                                <button
                                    type="button"
                                    onClick={handleClear}
                                    className="p-0.5 hover:text-[var(--x-destructive)] transition-colors"
                                    aria-label="Clear selection"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            )}

                            {/* Chevron */}
                            <svg
                                className={cn(
                                    'w-4 h-4 transition-transform duration-200',
                                    isOpen && 'rotate-180'
                                )}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Dropdown */}
                    {isOpen && (
                        <div
                            className={cn(
                                'x-select-dropdown',
                                'absolute z-50 w-full mt-1 rounded-lg overflow-hidden',
                                'border border-white/[0.1] bg-[var(--x-card)] shadow-xl',
                                'max-h-60 overflow-y-auto'
                            )}
                            role="listbox"
                            aria-multiselectable={multiple}
                        >
                            {/* Search input */}
                            {searchable && (
                                <div className="p-2 border-b border-white/[0.08]">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        className={cn(
                                            'w-full px-3 py-2 rounded-md',
                                            'bg-white/[0.05] border border-white/[0.1]',
                                            'text-[var(--x-foreground)] placeholder:text-[var(--x-mutedForeground)]',
                                            'focus:outline-none focus:border-[var(--x-primary)]',
                                            sizeStyles[size].text
                                        )}
                                        placeholder={searchPlaceholder}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                </div>
                            )}

                            {/* Options */}
                            <div className="py-1">
                                {/* Ungrouped options */}
                                {groupedOptions.ungrouped.map((opt) => {
                                    const idx = flatIndex++;
                                    return renderOptionItem(opt, idx);
                                })}

                                {/* Grouped options */}
                                {Object.entries(groupedOptions.groups).map(([groupName, groupOpts]) => (
                                    <div key={groupName}>
                                        <div className="px-4 py-1.5 text-xs font-semibold text-[var(--x-mutedForeground)] uppercase tracking-wider">
                                            {groupName}
                                        </div>
                                        {groupOpts.map((opt) => {
                                            const idx = flatIndex++;
                                            return renderOptionItem(opt, idx);
                                        })}
                                    </div>
                                ))}

                                {/* No results */}
                                {filteredOptions.length === 0 && (
                                    <div className="px-4 py-3 text-center text-[var(--x-mutedForeground)]">
                                        {tagging && searchQuery.trim() ? (
                                            <button
                                                type="button"
                                                onClick={handleCreateTag}
                                                className="text-[var(--x-primary)] hover:underline"
                                            >
                                                Create "{searchQuery}"
                                            </button>
                                        ) : (
                                            noResultsText
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {errorMessage && isInvalid && (
                    <p className="mt-1.5 text-sm text-[var(--x-destructive)]">{errorMessage}</p>
                )}
            </div>
        );
    }
);

Select.displayName = 'Select';
