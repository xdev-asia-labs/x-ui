'use client';

import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import { useTheme as useThemeHook } from '@xdev-asia/x-ui-core';
import { ThemeConfig, ThemeMode } from '@xdev-asia/x-ui-core';

export type Direction = 'ltr' | 'rtl';

interface ThemeContextValue {
    theme: ThemeConfig;
    mode: ThemeMode;
    direction: Direction;
    setMode: (mode: ThemeMode) => void;
    setDirection: (dir: Direction) => void;
    toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: ThemeMode;
    defaultDirection?: Direction;
    storageKey?: string;
}

/**
 * ThemeProvider component
 * Provides theme context to all X-UI components
 */
export function ThemeProvider({
    children,
    defaultTheme = 'light',
    defaultDirection = 'ltr',
    storageKey = 'x-ui-theme',
}: ThemeProviderProps) {
    const themeState = useThemeHook({ defaultTheme, storageKey });
    const [direction, setDirection] = React.useState<Direction>(defaultDirection);

    const value = useMemo(() => ({
        ...themeState,
        direction,
        setDirection,
    }), [themeState, direction]);

    // Apply CSS variables to document
    React.useEffect(() => {
        if (typeof document === 'undefined') return;

        const root = document.documentElement;
        const { colors, glass, mode } = themeState.theme;

        // Set color mode class
        root.classList.remove('light', 'dark');
        root.classList.add(mode);

        // Set direction
        root.dir = direction;
        root.style.setProperty('--x-direction', direction);

        // Set CSS variables
        Object.entries(colors).forEach(([key, value]) => {
            root.style.setProperty(`--x-${key}`, value);
        });

        root.style.setProperty('--x-glass-bg', glass.background);
        root.style.setProperty('--x-glass-bg-subtle', glass.backgroundSubtle);
        root.style.setProperty('--x-glass-border', glass.border);
        root.style.setProperty('--x-glass-blur', glass.blur);
    }, [themeState.theme, direction]);

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

/**
 * Hook to access theme context
 */
export function useXTheme(): ThemeContextValue {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useXTheme must be used within a ThemeProvider');
    }
    return context;
}

export { ThemeContext };
