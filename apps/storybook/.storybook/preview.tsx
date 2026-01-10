import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '@xdev-asia/x-ui-react';
import '../styles/globals.css';

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
            <ThemeProvider defaultTheme="dark">
                <div style={{ padding: '24px' }}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
};

export default preview;
