/**
 * Theme configuration for X-UI
 * Supports light and dark modes with glassmorphism effects
 */

import { colors, glassmorphism, shadows } from './colors';

export interface ThemeConfig {
    mode: 'light' | 'dark';
    colors: {
        background: string;
        foreground: string;
        card: string;
        cardForeground: string;
        popover: string;
        popoverForeground: string;
        primary: string;
        primaryForeground: string;
        secondary: string;
        secondaryForeground: string;
        muted: string;
        mutedForeground: string;
        accent: string;
        accentForeground: string;
        destructive: string;
        destructiveForeground: string;
        border: string;
        input: string;
        ring: string;
    };
    glass: {
        background: string;
        backgroundSubtle: string;
        border: string;
        blur: string;
    };
}

export const lightTheme: ThemeConfig = {
    mode: 'light',
    colors: {
        background: colors.neutral[0],
        foreground: colors.neutral[900],
        card: colors.neutral[0],
        cardForeground: colors.neutral[900],
        popover: colors.neutral[0],
        popoverForeground: colors.neutral[900],
        primary: colors.primary[500],
        primaryForeground: colors.neutral[0],
        secondary: colors.secondary[500],
        secondaryForeground: colors.neutral[0],
        muted: colors.neutral[100],
        mutedForeground: colors.neutral[500],
        accent: colors.primary[100],
        accentForeground: colors.primary[700],
        destructive: colors.error[500],
        destructiveForeground: colors.neutral[0],
        border: colors.neutral[200],
        input: colors.neutral[200],
        ring: colors.primary[500],
    },
    glass: {
        background: glassmorphism.light.bg,
        backgroundSubtle: glassmorphism.light.bgSubtle,
        border: glassmorphism.light.border,
        blur: glassmorphism.blur.lg,
    },
};

export const darkTheme: ThemeConfig = {
    mode: 'dark',
    colors: {
        background: colors.neutral[950],
        foreground: colors.neutral[50],
        card: colors.neutral[900],
        cardForeground: colors.neutral[50],
        popover: colors.neutral[900],
        popoverForeground: colors.neutral[50],
        primary: colors.primary[400],
        primaryForeground: colors.neutral[900],
        secondary: colors.secondary[400],
        secondaryForeground: colors.neutral[900],
        muted: colors.neutral[800],
        mutedForeground: colors.neutral[400],
        accent: colors.primary[900],
        accentForeground: colors.primary[300],
        destructive: colors.error[400],
        destructiveForeground: colors.neutral[50],
        border: colors.neutral[700],
        input: colors.neutral[700],
        ring: colors.primary[400],
    },
    glass: {
        background: glassmorphism.dark.bg,
        backgroundSubtle: glassmorphism.dark.bgSubtle,
        border: glassmorphism.dark.border,
        blur: glassmorphism.blur.lg,
    },
};

export const themes = {
    light: lightTheme,
    dark: darkTheme,
} as const;

export type ThemeMode = keyof typeof themes;
