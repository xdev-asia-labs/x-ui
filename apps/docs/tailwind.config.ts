import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class', '[data-theme="dark"]'],
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        // Include the x-ui-react package for Tailwind to scan its classes
        '../../packages/react/src/**/*.{js,ts,jsx,tsx}',
        '../../packages/core/src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--x-primary)',
                secondary: 'var(--x-secondary)',
                muted: 'var(--x-muted)',
                accent: 'var(--x-accent)',
                destructive: 'var(--x-destructive)',
                success: 'var(--x-success)',
                warning: 'var(--x-warning)',
                error: 'var(--x-error)',
            },
            backgroundColor: {
                card: 'var(--x-card)',
                muted: 'var(--x-muted)',
            },
            textColor: {
                foreground: 'var(--x-foreground)',
                muted: 'var(--x-mutedForeground)',
            },
            borderColor: {
                DEFAULT: 'var(--x-border)',
                input: 'var(--x-input)',
            },
            ringColor: {
                DEFAULT: 'var(--x-ring)',
            },
            borderRadius: {
                DEFAULT: 'var(--x-radius)',
            },
            animation: {
                'spin-slow': 'spin 1.2s linear infinite',
                'indeterminate': 'indeterminate 1.5s infinite ease-in-out',
            },
            keyframes: {
                indeterminate: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(400%)' },
                },
            },
        },
    },
    plugins: [],
}

export default config
