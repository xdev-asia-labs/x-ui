import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import { useTheme as useThemeHook, ThemeConfig, ThemeMode } from '@xdev-asia/x-ui-core';

interface ThemeContextValue {
    theme: ThemeConfig;
    mode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
    toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: ThemeMode;
    storageKey?: string;
}

/**
 * ThemeProvider for React Native
 * Provides theme context to all X-UI native components
 */
export function ThemeProvider({
    children,
    defaultTheme = 'light',
    storageKey = 'x-ui-theme',
}: ThemeProviderProps) {
    const themeState = useThemeHook({ defaultTheme, storageKey });
    const value = useMemo(() => themeState, [themeState]);

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
