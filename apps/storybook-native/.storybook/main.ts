import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../stories/**/*.stories.@(ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    viteFinal: async (config) => {
        config.resolve = config.resolve || {};
        config.resolve.alias = {
            ...config.resolve.alias,
            'react-native': path.dirname(require.resolve('react-native-web/package.json')),
        };
        config.define = {
            ...config.define,
            __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
        };
        // Handle "use client" directive in react-native-web
        config.build = config.build || {};
        config.build.rollupOptions = config.build.rollupOptions || {};
        config.build.rollupOptions.onwarn = (warning, warn) => {
            // Ignore "use client" directive warnings
            if (warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
                warning.message.includes('use client')) {
                return;
            }
            warn(warning);
        };
        return config;
    },
};

export default config;
