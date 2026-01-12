import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const xuiTheme = create({
    base: 'dark',

    // Brand
    brandTitle: 'X-UI Component Library',
    brandUrl: 'https://x-ui.xdev.asia',
    brandImage: '/logo.png',
    brandTarget: '_blank',

    // Colors - matching docs site
    colorPrimary: '#6366f1',
    colorSecondary: '#8b5cf6',

    // UI
    appBg: 'rgb(10, 10, 15)',
    appContentBg: 'rgb(15, 23, 42)',
    appPreviewBg: 'rgb(10, 10, 15)',
    appBorderColor: 'rgba(255, 255, 255, 0.1)',
    appBorderRadius: 12,

    // Text colors
    textColor: 'rgb(248, 250, 252)',
    textInverseColor: 'rgb(15, 23, 42)',
    textMutedColor: 'rgb(148, 163, 184)',

    // Toolbar default and active colors
    barTextColor: 'rgb(148, 163, 184)',
    barSelectedColor: '#8b5cf6',
    barHoverColor: '#a78bfa',
    barBg: 'rgb(15, 23, 42)',

    // Form colors
    inputBg: 'rgba(255, 255, 255, 0.05)',
    inputBorder: 'rgba(255, 255, 255, 0.1)',
    inputTextColor: 'rgb(248, 250, 252)',
    inputBorderRadius: 8,

    // Button
    buttonBg: 'rgba(99, 102, 241, 0.2)',
    buttonBorder: 'rgba(99, 102, 241, 0.3)',

    // Boolean
    booleanBg: 'rgba(139, 92, 246, 0.2)',
    booleanSelectedBg: '#8b5cf6',

    // Grid
    gridCellSize: 12,
});

addons.setConfig({
    theme: xuiTheme,
    sidebar: {
        showRoots: true,
    },
    toolbar: {
        title: { hidden: false },
        zoom: { hidden: false },
        eject: { hidden: false },
        copy: { hidden: false },
        fullscreen: { hidden: false },
    },
});
