import { useState, useEffect } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

export interface ResponsiveValue<T> {
    base?: T;
    sm?: T;  // < 640
    md?: T;  // >= 640
    lg?: T;  // >= 1024
    xl?: T;  // >= 1280
}

type BreakpointKey = 'sm' | 'md' | 'lg' | 'xl';

const breakpoints = {
    sm: 0,
    md: 640,
    lg: 1024,
    xl: 1280,
};

function getCurrentBreakpoint(width: number): BreakpointKey {
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
    const breakpointOrder: BreakpointKey[] = ['sm', 'md', 'lg', 'xl'];
    const currentIndex = breakpointOrder.indexOf(breakpoint);

    for (let i = currentIndex; i >= 0; i--) {
        const bp = breakpointOrder[i];
        if (responsiveValue[bp] !== undefined) {
            return responsiveValue[bp];
        }
    }

    return responsiveValue.base;
}

/**
 * Hook for responsive values in React Native
 */
export function useResponsive<T>(value: T | ResponsiveValue<T>): T | undefined {
    const [dimensions, setDimensions] = useState(Dimensions.get('window'));

    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setDimensions(window);
        });

        return () => subscription?.remove();
    }, []);

    const breakpoint = getCurrentBreakpoint(dimensions.width);
    return resolveResponsiveValue(value, breakpoint);
}

/**
 * Hook for screen dimensions and breakpoint info
 */
export function useBreakpoint() {
    const [dimensions, setDimensions] = useState(Dimensions.get('window'));

    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
            setDimensions(window);
        });

        return () => subscription?.remove();
    }, []);

    const breakpoint = getCurrentBreakpoint(dimensions.width);

    return {
        width: dimensions.width,
        height: dimensions.height,
        breakpoint,
        isMobile: breakpoint === 'sm',
        isTablet: breakpoint === 'md',
        isDesktop: breakpoint === 'lg' || breakpoint === 'xl',
        isLandscape: dimensions.width > dimensions.height,
        isPortrait: dimensions.height >= dimensions.width,
    };
}

/**
 * Helper to create responsive value object
 */
export function responsive<T>(values: ResponsiveValue<T>): ResponsiveValue<T> {
    return values;
}

export type { BreakpointKey };
