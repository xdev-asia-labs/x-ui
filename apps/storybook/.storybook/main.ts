import type { StorybookConfig } from '@storybook/react-vite';

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
    staticDirs: ['../public'],
    viteFinal: async (config) => {
        return config;
    },
};

export default config;
