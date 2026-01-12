'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'vi' | 'en';

interface LanguageContextValue {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

// Translations
const translations: Record<Language, Record<string, string>> = {
    vi: {
        // Navigation
        'nav.docs': 'Tài liệu',
        'nav.features': 'Tính năng',
        'nav.icons': 'Icons',
        'nav.components': 'Components',
        'nav.gettingStarted': 'Bắt đầu',
        'nav.theming': 'Theme',
        'nav.colors': 'Màu sắc & Tokens',

        // Getting Started
        'getting.title': 'Bắt đầu',
        'getting.description': 'X-UI là thư viện component hiện đại cho React với thiết kế glassmorphism, animations mượt mà và hỗ trợ dark/light mode.',
        'getting.install': 'Cài đặt',
        'getting.install.desc': 'Cài đặt package qua npm hoặc pnpm:',
        'getting.setup': 'Setup ThemeProvider',
        'getting.setup.desc': 'Wrap ứng dụng của bạn với ThemeProvider để sử dụng theme system:',
        'getting.usage': 'Sử dụng Components',
        'getting.usage.desc': 'Import và sử dụng các components:',
        'getting.features': 'Tính năng',
        'getting.feature.darkmode': 'Chuyển đổi theme mượt mà với CSS variables',
        'getting.feature.glass': 'Hiệu ứng glass modern với backdrop blur',
        'getting.feature.crossplatform': 'Responsive cho mọi kích thước màn hình',
        'getting.feature.typescript': 'Type-safe với IntelliSense đầy đủ',
        'getting.feature.accessible': 'WAI-ARIA compliant components',

        // Theming
        'theming.title': 'Theming',
        'theming.description': 'X-UI hỗ trợ dark/light mode với khả năng tùy biến cao thông qua CSS variables và React context.',
        'theming.provider': 'ThemeProvider',
        'theming.provider.desc': 'Wrap ứng dụng với ThemeProvider để enable theme system:',
        'theming.props': 'Props',
        'theming.hook': 'useXTheme Hook',
        'theming.hook.desc': 'Sử dụng hook để truy cập và thay đổi theme:',
        'theming.returns': 'Returns',
        'theming.cssVariables': 'CSS Variables',
        'theming.cssVariables.desc': 'ThemeProvider tự động set các CSS variables, bạn có thể sử dụng trong CSS:',
        'theming.modeSpecific': 'Mode-specific Styling',
        'theming.modeSpecific.desc': 'Class .light hoặc .dark được thêm vào document root:',

        // Colors
        'colors.title': 'Màu sắc & Design Tokens',
        'colors.description': 'Bảng màu và design tokens của X-UI, được tối ưu cho cả light và dark mode.',
        'colors.semantic': 'Semantic Colors',
        'colors.glass': 'Glass Tokens',
        'colors.usage': 'Sử dụng trong CSS',

        // Button
        'button.title': 'Button',
        'button.description': 'Button component với nhiều variants, sizes, color schemes và hiệu ứng glassmorphism.',
        'button.variants': 'Variants',
        'button.solid.desc': 'Button style mặc định với background đặc',
        'button.outline.desc': 'Button viền, transparent background',
        'button.ghost.desc': 'Minimal button, không border',
        'button.glass.desc': 'Glassmorphism effect với backdrop blur',
        'button.link.desc': 'Button style như link text',
        'button.colorSchemes': 'Color Schemes',
        'button.colorSchemes.desc': '6 color schemes có sẵn',
        'button.sizes': 'Sizes',
        'button.sizes.desc': '5 kích thước: xs, sm, md (default), lg, xl',
        'button.states': 'States',
        'button.api': 'API Reference',

        // Input
        'input.title': 'Input',
        'input.description': 'Input component với nhiều variants, hỗ trợ label, helper text, validation và icons.',
        'input.basic': 'Basic Usage',
        'input.variants': 'Variants',
        'input.sizes': 'Sizes',
        'input.states': 'States',
        'input.api': 'API Reference',

        // Card
        'card.title': 'Card',
        'card.description': 'Card component với hiệu ứng glassmorphism và các compound components.',
        'card.basic': 'Basic Usage',
        'card.withFooter': 'With Footer',
        'card.variants': 'Variants',
        'card.interactive': 'Interactive Card',
        'card.api': 'API Reference',
        'card.compound': 'Compound Components',

        // Common
        'common.default': 'Default',
        'common.disabled': 'Disabled',
        'common.loading': 'Loading',
        'common.fullWidth': 'Full Width',
        'common.type': 'Type',
        'common.prop': 'Prop',
    },
    en: {
        // Navigation
        'nav.docs': 'Docs',
        'nav.features': 'Features',
        'nav.icons': 'Icons',
        'nav.components': 'Components',
        'nav.gettingStarted': 'Getting Started',
        'nav.theming': 'Theming',
        'nav.colors': 'Colors & Tokens',

        // Getting Started
        'getting.title': 'Getting Started',
        'getting.description': 'X-UI is a modern component library for React featuring glassmorphism design, smooth animations, and dark/light mode support.',
        'getting.install': 'Installation',
        'getting.install.desc': 'Install the package via npm or pnpm:',
        'getting.setup': 'Setup ThemeProvider',
        'getting.setup.desc': 'Wrap your app with ThemeProvider to use the theme system:',
        'getting.usage': 'Using Components',
        'getting.usage.desc': 'Import and use components:',
        'getting.features': 'Features',
        'getting.feature.darkmode': 'Smooth theme transitions with CSS variables',
        'getting.feature.glass': 'Modern glass effect with backdrop blur',
        'getting.feature.crossplatform': 'Responsive for all screen sizes',
        'getting.feature.typescript': 'Type-safe with full IntelliSense',
        'getting.feature.accessible': 'WAI-ARIA compliant components',

        // Theming
        'theming.title': 'Theming',
        'theming.description': 'X-UI supports dark/light mode with high customizability through CSS variables and React context.',
        'theming.provider': 'ThemeProvider',
        'theming.provider.desc': 'Wrap your app with ThemeProvider to enable the theme system:',
        'theming.props': 'Props',
        'theming.hook': 'useXTheme Hook',
        'theming.hook.desc': 'Use this hook to access and change the theme:',
        'theming.returns': 'Returns',
        'theming.cssVariables': 'CSS Variables',
        'theming.cssVariables.desc': 'ThemeProvider automatically sets CSS variables that you can use in your CSS:',
        'theming.modeSpecific': 'Mode-specific Styling',
        'theming.modeSpecific.desc': 'Class .light or .dark is added to the document root:',

        // Colors
        'colors.title': 'Colors & Design Tokens',
        'colors.description': 'Color palette and design tokens for X-UI, optimized for both light and dark modes.',
        'colors.semantic': 'Semantic Colors',
        'colors.glass': 'Glass Tokens',
        'colors.usage': 'Usage in CSS',

        // Button
        'button.title': 'Button',
        'button.description': 'Button component with multiple variants, sizes, color schemes and glassmorphism effects.',
        'button.variants': 'Variants',
        'button.solid.desc': 'Default button style with solid background',
        'button.outline.desc': 'Bordered button with transparent background',
        'button.ghost.desc': 'Minimal button without border',
        'button.glass.desc': 'Glassmorphism effect with backdrop blur',
        'button.link.desc': 'Button styled as a text link',
        'button.colorSchemes': 'Color Schemes',
        'button.colorSchemes.desc': '6 color schemes available',
        'button.sizes': 'Sizes',
        'button.sizes.desc': '5 sizes: xs, sm, md (default), lg, xl',
        'button.states': 'States',
        'button.api': 'API Reference',

        // Input
        'input.title': 'Input',
        'input.description': 'Input component with multiple variants, supporting labels, helper text, validation and icons.',
        'input.basic': 'Basic Usage',
        'input.variants': 'Variants',
        'input.sizes': 'Sizes',
        'input.states': 'States',
        'input.api': 'API Reference',

        // Card
        'card.title': 'Card',
        'card.description': 'Card component with glassmorphism effects and compound components.',
        'card.basic': 'Basic Usage',
        'card.withFooter': 'With Footer',
        'card.variants': 'Variants',
        'card.interactive': 'Interactive Card',
        'card.api': 'API Reference',
        'card.compound': 'Compound Components',

        // Common
        'common.default': 'Default',
        'common.disabled': 'Disabled',
        'common.loading': 'Loading',
        'common.fullWidth': 'Full Width',
        'common.type': 'Type',
        'common.prop': 'Prop',
    }
};

interface LanguageProviderProps {
    children: ReactNode;
    defaultLanguage?: Language;
}

export function LanguageProvider({ children, defaultLanguage = 'vi' }: LanguageProviderProps) {
    const [language, setLanguageState] = useState<Language>(defaultLanguage);

    useEffect(() => {
        const stored = localStorage.getItem('x-ui-docs-lang') as Language | null;
        if (stored && (stored === 'vi' || stored === 'en')) {
            setLanguageState(stored);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('x-ui-docs-lang', lang);
    };

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

// Default translation function for SSR
const defaultT = (key: string): string => {
    // Return Vietnamese translation as default for SSR
    return translations['vi'][key] || key;
};

export function useLanguage(): LanguageContextValue {
    const context = useContext(LanguageContext);
    if (!context) {
        // Return default values for SSR/SSG
        return {
            language: 'vi',
            setLanguage: () => { },
            t: defaultT,
        };
    }
    return context;
}

export { LanguageContext };
