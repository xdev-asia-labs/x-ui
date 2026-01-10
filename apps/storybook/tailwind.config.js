/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './stories/**/*.{js,ts,jsx,tsx}',
        '../../packages/react/src/**/*.{js,ts,jsx,tsx}',
        '../../packages/core/src/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: 'rgb(var(--x-background) / <alpha-value>)',
                foreground: 'rgb(var(--x-foreground) / <alpha-value>)',
                primary: {
                    DEFAULT: 'rgb(var(--x-primary) / <alpha-value>)',
                    foreground: 'rgb(var(--x-primaryForeground) / <alpha-value>)',
                },
                secondary: {
                    DEFAULT: 'rgb(var(--x-secondary) / <alpha-value>)',
                    foreground: 'rgb(var(--x-secondaryForeground) / <alpha-value>)',
                },
                muted: {
                    DEFAULT: 'rgb(var(--x-muted) / <alpha-value>)',
                    foreground: 'rgb(var(--x-mutedForeground) / <alpha-value>)',
                },
                accent: {
                    DEFAULT: 'rgb(var(--x-accent) / <alpha-value>)',
                    foreground: 'rgb(var(--x-accentForeground) / <alpha-value>)',
                },
                destructive: {
                    DEFAULT: 'rgb(var(--x-destructive) / <alpha-value>)',
                    foreground: 'rgb(var(--x-destructiveForeground) / <alpha-value>)',
                },
                border: 'rgb(var(--x-border) / <alpha-value>)',
                input: 'rgb(var(--x-input) / <alpha-value>)',
                ring: 'rgb(var(--x-ring) / <alpha-value>)',
                card: {
                    DEFAULT: 'rgb(var(--x-card) / <alpha-value>)',
                    foreground: 'rgb(var(--x-cardForeground) / <alpha-value>)',
                },
            },
        },
    },
    plugins: [],
};
