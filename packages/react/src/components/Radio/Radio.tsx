'use client';

import React, { forwardRef, InputHTMLAttributes, ReactNode, createContext, useContext, useId } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

// Radio Group Context
interface RadioGroupContextValue {
    name: string;
    value?: string;
    onChange?: (value: string) => void;
    size: 'sm' | 'md' | 'lg';
    colorScheme: 'primary' | 'secondary' | 'success';
    isDisabled: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

// Radio Group
export interface RadioGroupProps {
    name: string;
    value?: string;
    onChange?: (value: string) => void;
    size?: 'sm' | 'md' | 'lg';
    colorScheme?: 'primary' | 'secondary' | 'success';
    isDisabled?: boolean;
    orientation?: 'horizontal' | 'vertical';
    children: ReactNode;
    className?: string;
}

export function RadioGroup({
    name,
    value,
    onChange,
    size = 'md',
    colorScheme = 'primary',
    isDisabled = false,
    orientation = 'vertical',
    children,
    className,
}: RadioGroupProps) {
    return (
        <RadioGroupContext.Provider value={{ name, value, onChange, size, colorScheme, isDisabled }}>
            <div
                role="radiogroup"
                className={cn(
                    'flex gap-3',
                    orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
                    className
                )}
            >
                {children}
            </div>
        </RadioGroupContext.Provider>
    );
}

// Radio
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    /** Radio value */
    value: string;
    /** Label text */
    label?: ReactNode;
    /** Description */
    description?: string;
    /** Size override */
    size?: 'sm' | 'md' | 'lg';
    /** Color override */
    colorScheme?: 'primary' | 'secondary' | 'success';
    /** Disabled override */
    isDisabled?: boolean;
}

const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
};

const colorStyles = {
    primary: 'checked:border-[var(--x-primary)] checked:bg-[var(--x-primary)]',
    secondary: 'checked:border-[var(--x-secondary)] checked:bg-[var(--x-secondary)]',
    success: 'checked:border-emerald-500 checked:bg-emerald-500',
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
    (
        {
            value,
            label,
            description,
            size: sizeProp,
            colorScheme: colorProp,
            isDisabled: disabledProp,
            className,
            id,
            ...props
        },
        ref
    ) => {
        const group = useContext(RadioGroupContext);
        const reactId = useId();
        const inputId = id || `radio${reactId}`;

        const size = sizeProp || group?.size || 'md';
        const colorScheme = colorProp || group?.colorScheme || 'primary';
        const isDisabled = disabledProp ?? group?.isDisabled ?? false;
        const isChecked = group ? group.value === value : props.checked;

        const handleChange = () => {
            if (group?.onChange) {
                group.onChange(value);
            }
        };

        return (
            <label
                htmlFor={inputId}
                className={cn(
                    'inline-flex items-start gap-3 cursor-pointer',
                    isDisabled && 'opacity-50 cursor-not-allowed',
                    className
                )}
            >
                <div className="relative flex items-center justify-center">
                    <input
                        ref={ref}
                        type="radio"
                        id={inputId}
                        name={group?.name}
                        value={value}
                        checked={isChecked}
                        onChange={handleChange}
                        className={cn(
                            'appearance-none border-2 border-[var(--x-border)] rounded-full transition-all duration-200',
                            'focus:outline-none focus:ring-2 focus:ring-[var(--x-ring)]/30 focus:ring-offset-2',
                            colorStyles[colorScheme],
                            sizeStyles[size]
                        )}
                        disabled={isDisabled}
                        {...props}
                    />
                    <div
                        className={cn(
                            'absolute w-1/2 h-1/2 bg-white rounded-full opacity-0 transition-opacity',
                            isChecked && 'opacity-100'
                        )}
                    />
                </div>

                {(label || description) && (
                    <div className="flex flex-col">
                        {label && <span className="text-sm font-medium text-[var(--x-foreground)]">{label}</span>}
                        {description && <span className="text-xs text-[var(--x-mutedForeground)]">{description}</span>}
                    </div>
                )}
            </label>
        );
    }
);

Radio.displayName = 'Radio';
