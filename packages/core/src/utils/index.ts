/**
 * Utility functions for X-UI
 */

/**
 * Merge class names, filtering out falsy values
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}

/**
 * Create variants helper for component styling
 */
export function createVariants<T extends Record<string, Record<string, string>>>(
    variants: T
): T {
    return variants;
}

/**
 * Type-safe object keys
 */
export function objectKeys<T extends object>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
}

/**
 * Clamps a number between min and max values
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

/**
 * Generate unique ID for accessibility
 */
let idCounter = 0;
export function generateId(prefix = 'x-ui'): string {
    return `${prefix}-${++idCounter}`;
}

/**
 * Check if code is running on server
 */
export function isServer(): boolean {
    return typeof window === 'undefined';
}

/**
 * Check if code is running on native platform
 */
export function isNative(): boolean {
    return typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
}
