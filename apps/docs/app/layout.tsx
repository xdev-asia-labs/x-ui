import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'X-UI | Modern React Component Library',
    description: 'A beautiful, accessible, and performant component library for React and React Native. Build stunning interfaces with glassmorphism, smooth animations, and modern design patterns.',
    keywords: ['React', 'React Native', 'UI Library', 'Component Library', 'TypeScript', 'Glassmorphism', 'Modern UI', 'XDev Asia'],
    authors: [{ name: 'XDev Asia' }],
    creator: 'XDev Asia',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://x-ui.dev',
        siteName: 'X-UI',
        title: 'X-UI | Modern React Component Library',
        description: 'A beautiful, accessible, and performant component library for React and React Native.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'X-UI Component Library',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'X-UI | Modern React Component Library',
        description: 'A beautiful, accessible, and performant component library for React and React Native.',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta name="theme-color" content="#0a0a0f" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
