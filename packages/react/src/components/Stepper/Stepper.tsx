'use client';

import React, { ReactNode } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface StepperProps {
    steps: StepItem[];
    activeStep: number;
    orientation?: 'horizontal' | 'vertical';
    colorScheme?: 'primary' | 'secondary' | 'success';
    size?: 'sm' | 'md' | 'lg';
    onStepClick?: (index: number) => void;
    className?: string;
}

export interface StepItem {
    title: string;
    description?: string;
    icon?: ReactNode;
}

const colorSchemes = {
    primary: {
        active: 'bg-indigo-500 border-indigo-500 text-white',
        completed: 'bg-indigo-500 border-indigo-500 text-white',
        line: 'bg-indigo-500',
    },
    secondary: {
        active: 'bg-purple-500 border-purple-500 text-white',
        completed: 'bg-purple-500 border-purple-500 text-white',
        line: 'bg-purple-500',
    },
    success: {
        active: 'bg-emerald-500 border-emerald-500 text-white',
        completed: 'bg-emerald-500 border-emerald-500 text-white',
        line: 'bg-emerald-500',
    },
};

const sizes = {
    sm: { circle: 'w-6 h-6 text-xs', title: 'text-xs', desc: 'text-xs' },
    md: { circle: 'w-8 h-8 text-sm', title: 'text-sm', desc: 'text-xs' },
    lg: { circle: 'w-10 h-10 text-base', title: 'text-base', desc: 'text-sm' },
};

export function Stepper({
    steps,
    activeStep,
    orientation = 'horizontal',
    colorScheme = 'primary',
    size = 'md',
    onStepClick,
    className,
}: StepperProps) {
    const colors = colorSchemes[colorScheme];
    const sizeStyles = sizes[size];
    const isVertical = orientation === 'vertical';

    return (
        <div
            className={cn(
                'x-stepper',
                isVertical ? 'flex flex-col gap-0' : 'flex items-start',
                className
            )}
        >
            {steps.map((step, index) => {
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;
                const isLast = index === steps.length - 1;
                const isClickable = onStepClick !== undefined;

                return (
                    <div
                        key={index}
                        className={cn(
                            'x-step flex',
                            isVertical ? 'flex-row' : 'flex-col items-center flex-1'
                        )}
                    >
                        <div className={cn('flex', isVertical ? 'flex-col items-center' : 'items-center w-full')}>
                            {/* Step circle */}
                            <button
                                type="button"
                                disabled={!isClickable}
                                onClick={() => onStepClick?.(index)}
                                className={cn(
                                    'x-step-circle flex items-center justify-center rounded-full border-2 font-medium transition-all',
                                    sizeStyles.circle,
                                    isActive && colors.active,
                                    isCompleted && colors.completed,
                                    !isActive && !isCompleted && 'border-[var(--x-border)] bg-[var(--x-muted)] text-[var(--x-mutedForeground)]',
                                    isClickable && 'cursor-pointer hover:scale-105',
                                    !isClickable && 'cursor-default'
                                )}
                            >
                                {isCompleted ? (
                                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                ) : step.icon ? (
                                    step.icon
                                ) : (
                                    index + 1
                                )}
                            </button>

                            {/* Connector line */}
                            {!isLast && (
                                <div
                                    className={cn(
                                        'x-step-line',
                                        isVertical ? 'w-0.5 h-8 my-1' : 'flex-1 h-0.5 mx-2',
                                        isCompleted ? colors.line : 'bg-[var(--x-border)]'
                                    )}
                                />
                            )}
                        </div>

                        {/* Step content */}
                        <div className={cn(
                            'x-step-content',
                            isVertical ? 'ml-3 pb-8' : 'mt-2 text-center'
                        )}>
                            <p className={cn(
                                'x-step-title font-medium',
                                sizeStyles.title,
                                isActive ? 'text-[var(--x-foreground)]' : 'text-[var(--x-mutedForeground)]'
                            )}>
                                {step.title}
                            </p>
                            {step.description && (
                                <p className={cn(
                                    'x-step-description mt-0.5',
                                    sizeStyles.desc,
                                    'text-[var(--x-mutedForeground)]'
                                )}>
                                    {step.description}
                                </p>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
