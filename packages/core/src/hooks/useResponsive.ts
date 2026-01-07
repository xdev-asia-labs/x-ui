import { useState, useEffect, useCallback } from 'react';
import { breakpoints } from '../tokens/colors';

type BreakpointKey = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ResponsiveValue<T> {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    '2xl'?: T;
}

/**
 * Get current breakpoint value based on screen width
 */
function getCurrentBreakpoint(): BreakpointKey {
    if (typeof window === 'undefined') return 'sm';

    const width = window.innerWidth;
    if (width >= breakpoints['2xl']) return '2xl';
    if (width >= breakpoints.xl) return 'xl';
    if (width >= breakpoints.lg) return 'lg';
    if (width >= breakpoints.md) return 'md';
    return 'sm';
}

/**
 * Resolve responsive value for current breakpoint
 */
export function resolveResponsiveValue<T>(
    value: T | ResponsiveValue<T>,
    breakpoint: BreakpointKey
): T | undefined {
    if (typeof value !== 'object' || value === null || !('base' in value || 'sm' in value)) {
        return value as T;
    }

    const responsiveValue = value as ResponsiveValue<T>;
    const breakpointOrder: BreakpointKey[] = ['sm', 'md', 'lg', 'xl', '2xl'];
    const currentIndex = breakpointOrder.indexOf(breakpoint);

    // Find the closest defined value at or below current breakpoint
    for (let i = currentIndex; i >= 0; i--) {
        const bp = breakpointOrder[i];
        if (responsiveValue[bp] !== undefined) {
            return responsiveValue[bp];
        }
    }

    return responsiveValue.base;
}

/**
 * Hook for responsive values
 * Returns the appropriate value based on current screen size
 */
export function useResponsive<T>(value: T | ResponsiveValue<T>): T | undefined {
    const [breakpoint, setBreakpoint] = useState<BreakpointKey>(getCurrentBreakpoint);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            setBreakpoint(getCurrentBreakpoint());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return resolveResponsiveValue(value, breakpoint);
}

/**
 * Hook for responsive props object
 * Resolves all responsive values in a props object
 */
export function useResponsiveProps<T extends Record<string, any>>(
    props: { [K in keyof T]: T[K] | ResponsiveValue<T[K]> }
): T {
    const [breakpoint, setBreakpoint] = useState<BreakpointKey>(getCurrentBreakpoint);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            setBreakpoint(getCurrentBreakpoint());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const resolvedProps: Record<string, any> = {};

    for (const key in props) {
        resolvedProps[key] = resolveResponsiveValue(props[key], breakpoint);
    }

    return resolvedProps as T;
}

/**
 * Hook for checking breakpoint conditions
 */
export function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState<BreakpointKey>(getCurrentBreakpoint);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            setBreakpoint(getCurrentBreakpoint());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        breakpoint,
        isMobile: breakpoint === 'sm',
        isTablet: breakpoint === 'md',
        isDesktop: breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === '2xl',
        isLargeScreen: breakpoint === 'xl' || breakpoint === '2xl',
        isAbove: (bp: BreakpointKey) => {
            const order: BreakpointKey[] = ['sm', 'md', 'lg', 'xl', '2xl'];
            return order.indexOf(breakpoint) >= order.indexOf(bp);
        },
        isBelow: (bp: BreakpointKey) => {
            const order: BreakpointKey[] = ['sm', 'md', 'lg', 'xl', '2xl'];
            return order.indexOf(breakpoint) < order.indexOf(bp);
        },
    };
}

/**
 * Create responsive style object
 * Helper for inline responsive styles
 */
export function responsive<T>(values: ResponsiveValue<T>): ResponsiveValue<T> {
    return values;
}

export type { BreakpointKey };
