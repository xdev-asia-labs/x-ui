import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://x-ui.xdev.asia';

    // Static pages
    const routes = [
        '',
        '/docs/getting-started/installation',
        '/docs/getting-started/usage',
        '/docs/getting-started/theming',
        '/docs/getting-started/typescript',
        '/docs/getting-started/responsive',
        '/docs/getting-started/mcp',
        '/docs/components/button',
        '/docs/components/card',
        '/docs/components/input',
        '/docs/components/avatar',
        '/docs/components/badge',
        '/docs/components/tag',
        '/docs/components/table',
        '/docs/components/checkbox',
        '/docs/components/radio',
        '/docs/components/switch',
        '/docs/components/select',
        '/docs/components/tabs',
        '/docs/components/spinner',
        '/docs/components/progress',
        '/docs/components/skeleton',
        '/docs/components/tooltip',
        '/docs/components/accordion',
        '/docs/components/alert-dialog',
        '/docs/components/datepicker',
        '/docs/components/dropdown',
        '/docs/components/pagination',
        '/docs/components/popover',
        '/docs/components/grid',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));
}
