import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '@xdev-asia/x-ui-react';
import '../src/styles.css';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#0f172a' },
                { name: 'light', value: '#ffffff' },
            ],
        },
    },
    decorators: [
        (Story, context) => (
            <ThemeProvider defaultTheme={context.globals.theme || 'dark'}>
                <div style={{ padding: '2rem' }}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme',
            defaultValue: 'dark',
            toolbar: {
                icon: 'circlehollow',
                items: ['light', 'dark'],
                showName: true,
            },
        },
    },
};

export default preview;
