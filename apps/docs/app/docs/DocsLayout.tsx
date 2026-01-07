'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../components/Logo';
import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle from '../components/LanguageToggle';
import { LanguageProvider, useLanguage } from '../i18n/LanguageProvider';

interface NavItem {
    titleKey: string;
    href: string;
    children?: NavItem[];
}

const navigation: NavItem[] = [
    { titleKey: 'nav.gettingStarted', href: '/docs' },
    { titleKey: 'nav.theming', href: '/docs/theming' },
    { titleKey: 'nav.colors', href: '/docs/colors' },
    {
        titleKey: 'nav.components',
        href: '/docs/components',
        children: [
            { titleKey: 'Button', href: '/docs/components/button' },
            { titleKey: 'Input', href: '/docs/components/input' },
            { titleKey: 'Card', href: '/docs/components/card' },
            { titleKey: 'Avatar', href: '/docs/components/avatar' },
            { titleKey: 'Badge', href: '/docs/components/badge' },
            { titleKey: 'Modal', href: '/docs/components/modal' },
        ],
    },
];

function DocsLayoutContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { t } = useLanguage();

    const getNavTitle = (titleKey: string) => {
        const translated = t(titleKey);
        return translated === titleKey ? titleKey : translated;
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: 'rgb(var(--x-background))',
        }}>
            {/* Header */}
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: '1rem 1.5rem',
                background: 'var(--header-bg, rgba(10, 10, 15, 0.8))',
                backdropFilter: 'blur(16px)',
                borderBottom: '1px solid var(--header-border, rgba(255,255,255,0.05))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Mobile menu button */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        style={{
                            display: 'none',
                            padding: '8px',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'rgb(var(--x-foreground))',
                        }}
                        className="mobile-menu-btn"
                        aria-label="Toggle menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                    </button>

                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                        <Logo size={28} />
                        <span style={{ fontWeight: 700, fontSize: '18px', color: 'rgb(var(--x-foreground))' }}>
                            X-UI
                        </span>
                    </Link>
                    <span style={{
                        fontSize: '12px',
                        padding: '2px 8px',
                        borderRadius: '999px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: 'rgb(59, 130, 246)',
                        fontWeight: 500,
                    }}>
                        Docs
                    </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <LanguageToggle />
                    <ThemeToggle />
                    <a
                        href="https://github.com/xdev-asia/x-ui"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(255,255,255,0.05)',
                            color: 'rgb(var(--x-foreground))',
                            transition: 'all 0.2s',
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>
            </header>

            <div style={{ display: 'flex', flex: 1, paddingTop: '73px' }}>
                {/* Sidebar */}
                <aside
                    style={{
                        width: '280px',
                        minWidth: '280px',
                        height: 'calc(100vh - 73px)',
                        position: 'sticky',
                        top: '73px',
                        borderRight: '1px solid var(--x-glass-border, rgba(255,255,255,0.05))',
                        padding: '24px',
                        overflowY: 'auto',
                        background: 'var(--x-glass-bg, rgba(30, 41, 59, 0.2))',
                    }}
                    className="docs-sidebar"
                >
                    <nav>
                        {navigation.map((item) => (
                            <div key={item.href} style={{ marginBottom: '8px' }}>
                                <Link
                                    href={item.href}
                                    style={{
                                        display: 'block',
                                        padding: '10px 16px',
                                        borderRadius: '8px',
                                        fontSize: '14px',
                                        fontWeight: pathname === item.href ? 600 : 500,
                                        color: pathname === item.href
                                            ? 'rgb(var(--x-primary))'
                                            : 'rgb(var(--x-mutedForeground))',
                                        background: pathname === item.href
                                            ? 'rgba(59, 130, 246, 0.1)'
                                            : 'transparent',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    {getNavTitle(item.titleKey)}
                                </Link>
                                {item.children && (
                                    <div style={{ marginLeft: '12px', marginTop: '4px' }}>
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                style={{
                                                    display: 'block',
                                                    padding: '8px 16px',
                                                    borderRadius: '6px',
                                                    fontSize: '13px',
                                                    fontWeight: pathname === child.href ? 600 : 400,
                                                    color: pathname === child.href
                                                        ? 'rgb(var(--x-primary))'
                                                        : 'rgb(var(--x-mutedForeground))',
                                                    background: pathname === child.href
                                                        ? 'rgba(59, 130, 246, 0.08)'
                                                        : 'transparent',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.2s',
                                                }}
                                            >
                                                {getNavTitle(child.titleKey)}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <main style={{
                    flex: 1,
                    padding: '40px 48px',
                    maxWidth: '900px',
                }}>
                    {children}
                </main>
            </div>

            <style jsx global>{`
                @media (max-width: 768px) {
                    .docs-sidebar {
                        display: none;
                    }
                    .mobile-menu-btn {
                        display: block !important;
                    }
                }
            `}</style>
        </div>
    );
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <DocsLayoutContent>{children}</DocsLayoutContent>
        </LanguageProvider>
    );
}

// Export useLanguage for use in page components
export { useLanguage } from '../i18n/LanguageProvider';
