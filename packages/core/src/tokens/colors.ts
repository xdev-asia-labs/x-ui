/**
 * X-UI Design Tokens
 * Modern color palette with Glassmorphism support
 */

export const colors = {
    // Primary - Vibrant blue with depth
    primary: {
        50: '#E6F0FF',
        100: '#CCE0FF',
        200: '#99C2FF',
        300: '#66A3FF',
        400: '#3385FF',
        500: '#0066FF', // Main
        600: '#0052CC',
        700: '#003D99',
        800: '#002966',
        900: '#001433',
    },

    // Secondary - Rich purple
    secondary: {
        50: '#F3E8FF',
        100: '#E9D5FF',
        200: '#D8B4FE',
        300: '#C084FC',
        400: '#A855F7',
        500: '#8B5CF6', // Main
        600: '#7C3AED',
        700: '#6D28D9',
        800: '#5B21B6',
        900: '#4C1D95',
    },

    // Success - Emerald green
    success: {
        50: '#ECFDF5',
        100: '#D1FAE5',
        200: '#A7F3D0',
        300: '#6EE7B7',
        400: '#34D399',
        500: '#10B981', // Main
        600: '#059669',
        700: '#047857',
        800: '#065F46',
        900: '#064E3B',
    },

    // Warning - Warm amber
    warning: {
        50: '#FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
        500: '#F59E0B', // Main
        600: '#D97706',
        700: '#B45309',
        800: '#92400E',
        900: '#78350F',
    },

    // Error - Vivid red
    error: {
        50: '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444', // Main
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D',
    },

    // Neutral - Slate gray for dark mode friendly
    neutral: {
        0: '#FFFFFF',
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
        950: '#020617',
    },
} as const;

export const glassmorphism = {
    // Background blur levels
    blur: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
    },
    // Glass backgrounds for different themes
    light: {
        bg: 'rgba(255, 255, 255, 0.7)',
        bgSubtle: 'rgba(255, 255, 255, 0.4)',
        border: 'rgba(255, 255, 255, 0.3)',
    },
    dark: {
        bg: 'rgba(15, 23, 42, 0.7)',
        bgSubtle: 'rgba(15, 23, 42, 0.4)',
        border: 'rgba(255, 255, 255, 0.1)',
    },
} as const;

export const spacing = {
    0: 0,
    0.5: 2,
    1: 4,
    1.5: 6,
    2: 8,
    2.5: 10,
    3: 12,
    3.5: 14,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    14: 56,
    16: 64,
    20: 80,
    24: 96,
    28: 112,
    32: 128,
} as const;

export const borderRadius = {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 24,
    '3xl': 32,
    full: 9999,
} as const;

export const typography = {
    fontFamily: {
        sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        mono: 'JetBrains Mono, "Fira Code", Consolas, monospace',
    },
    fontSize: {
        xs: { size: 12, lineHeight: 16 },
        sm: { size: 14, lineHeight: 20 },
        base: { size: 16, lineHeight: 24 },
        lg: { size: 18, lineHeight: 28 },
        xl: { size: 20, lineHeight: 28 },
        '2xl': { size: 24, lineHeight: 32 },
        '3xl': { size: 30, lineHeight: 36 },
        '4xl': { size: 36, lineHeight: 40 },
        '5xl': { size: 48, lineHeight: 48 },
        '6xl': { size: 60, lineHeight: 60 },
    },
    fontWeight: {
        thin: '100',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
    },
} as const;

export const shadows = {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    glow: {
        primary: '0 0 20px rgba(0, 102, 255, 0.4)',
        secondary: '0 0 20px rgba(139, 92, 246, 0.4)',
        success: '0 0 20px rgba(16, 185, 129, 0.4)',
    },
} as const;

export const animation = {
    duration: {
        instant: '0ms',
        fast: '150ms',
        normal: '300ms',
        slow: '500ms',
    },
    easing: {
        linear: 'linear',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
} as const;

export const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
} as const;

export type Colors = typeof colors;
export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type Typography = typeof typography;
export type Shadows = typeof shadows;
export type Animation = typeof animation;
export type Breakpoints = typeof breakpoints;
export type Glassmorphism = typeof glassmorphism;
