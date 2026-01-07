import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '@xdev-asia/x-ui-react';

// Global CSS
const styles = `
:root {
    --x-background: 10 10 15;
    --x-foreground: 248 250 252;
    --x-primary: 59 130 246;
    --x-primaryForeground: 255 255 255;
    --x-secondary: 30 41 59;
    --x-secondaryForeground: 248 250 252;
    --x-muted: 15 23 42;
    --x-mutedForeground: 148 163 184;
    --x-accent: 99 102 241;
    --x-accentForeground: 255 255 255;
    --x-destructive: 239 68 68;
    --x-destructiveForeground: 255 255 255;
    --x-border: 30 41 59;
    --x-input: 30 41 59;
    --x-ring: 59 130 246;
    --x-card: 15 23 42;
    --x-cardForeground: 248 250 252;
    --x-glass-bg: rgba(30, 41, 59, 0.4);
    --x-glass-bg-subtle: rgba(30, 41, 59, 0.6);
    --x-glass-border: rgba(255, 255, 255, 0.08);
    --x-glass-blur: blur(16px);
}

body {
    margin: 0;
    background: rgb(var(--x-background));
    color: rgb(var(--x-foreground));
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
`;

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: 'rgb(10, 10, 15)' },
                { name: 'light', value: 'rgb(250, 250, 252)' },
            ],
        },
    },
    decorators: [
        (Story) => (
            <>
                <style>{styles}</style>
                <ThemeProvider defaultTheme="dark">
                    <div style={{ padding: '24px' }}>
                        <Story />
                    </div>
                </ThemeProvider>
            </>
        ),
    ],
};

export default preview;
