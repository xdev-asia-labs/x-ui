import { useState, useEffect, useCallback } from 'react';
import { themes, ThemeMode, ThemeConfig } from '../tokens/theme';

interface UseThemeOptions {
    defaultTheme?: ThemeMode;
    storageKey?: string;
}

interface UseThemeReturn {
    theme: ThemeConfig;
    mode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
    toggleMode: () => void;
}

/**
 * Hook for managing theme state
 * Works on React (web)
 */
export function useTheme(options: UseThemeOptions = {}): UseThemeReturn {
    const { defaultTheme = 'light', storageKey = 'x-ui-theme' } = options;
    const [mode, setModeState] = useState<ThemeMode>(defaultTheme);

    useEffect(() => {
        // Try to get stored theme preference
        if (typeof window !== 'undefined' && window.localStorage) {
            const stored = localStorage.getItem(storageKey) as ThemeMode | null;
            if (stored && themes[stored]) {
                setModeState(stored);
            }
        }
    }, [storageKey]);

    const setMode = useCallback(
        (newMode: ThemeMode) => {
            setModeState(newMode);
            if (typeof window !== 'undefined' && window.localStorage) {
                localStorage.setItem(storageKey, newMode);
            }
        },
        [storageKey]
    );

    const toggleMode = useCallback(() => {
        setMode(mode === 'light' ? 'dark' : 'light');
    }, [mode, setMode]);

    return {
        theme: themes[mode],
        mode,
        setMode,
        toggleMode,
    };
}
