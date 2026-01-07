/**
 * X-UI Design Tokens for MCP Server
 */

export const designTokens = {
    colors: {
        primary: {
            50: '#E6F0FF',
            100: '#CCE0FF',
            200: '#99C2FF',
            300: '#66A3FF',
            400: '#3385FF',
            500: '#0066FF',
            600: '#0052CC',
            700: '#003D99',
            800: '#002966',
            900: '#001433',
        },
        secondary: {
            50: '#F3E8FF',
            100: '#E9D5FF',
            500: '#8B5CF6',
            700: '#6D28D9',
        },
        success: {
            50: '#ECFDF5',
            500: '#10B981',
            700: '#047857',
        },
        warning: {
            50: '#FFFBEB',
            500: '#F59E0B',
            700: '#B45309',
        },
        error: {
            50: '#FEF2F2',
            500: '#EF4444',
            700: '#B91C1C',
        },
        neutral: {
            0: '#FFFFFF',
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            500: '#64748B',
            700: '#334155',
            900: '#0F172A',
            950: '#020617',
        },
    },

    spacing: {
        0: 0,
        1: 4,
        2: 8,
        3: 12,
        4: 16,
        5: 20,
        6: 24,
        8: 32,
        10: 40,
        12: 48,
        16: 64,
        20: 80,
    },

    typography: {
        fontFamily: {
            sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            mono: 'JetBrains Mono, Consolas, monospace',
        },
        fontSize: {
            xs: 12,
            sm: 14,
            base: 16,
            lg: 18,
            xl: 20,
            '2xl': 24,
            '3xl': 30,
            '4xl': 36,
        },
    },

    borderRadius: {
        none: 0,
        sm: 4,
        md: 8,
        lg: 12,
        xl: 16,
        '2xl': 24,
        full: 9999,
    },

    shadows: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
    },

    glassmorphism: {
        blur: { sm: '4px', md: '8px', lg: '16px' },
        light: { bg: 'rgba(255, 255, 255, 0.7)', border: 'rgba(255, 255, 255, 0.3)' },
        dark: { bg: 'rgba(15, 23, 42, 0.7)', border: 'rgba(255, 255, 255, 0.1)' },
    },
} as const;
