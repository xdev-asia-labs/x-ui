import type { Preview } from '@storybook/react';
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
                { name: 'dark', value: '#0a0a0f' },
                { name: 'light', value: '#ffffff' },
            ],
        },
    },
};

export default preview;
