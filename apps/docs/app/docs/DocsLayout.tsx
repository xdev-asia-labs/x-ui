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
    icon?: React.ReactNode;
    children?: NavItem[];
}

// SVG Icons for navigation
const icons = {
    book: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
    ),
    palette: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="13.5" cy="6.5" r="1.5" fill="currentColor" />
            <circle cx="17.5" cy="10.5" r="1.5" fill="currentColor" />
            <circle cx="8.5" cy="7.5" r="1.5" fill="currentColor" />
            <circle cx="6.5" cy="12.5" r="1.5" fill="currentColor" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
        </svg>
    ),
    colors: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    ),
    cube: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <path d="m3.27 6.96 8.73 5.04 8.73-5.04M12 22.08V12" />
        </svg>
    ),
    button: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="8" width="18" height="8" rx="4" />
        </svg>
    ),
    input: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="6" width="18" height="12" rx="2" />
            <line x1="7" y1="12" x2="7" y2="12" strokeLinecap="round" />
        </svg>
    ),
    card: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M3 9h18" />
        </svg>
    ),
    avatar: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="8" r="4" />
            <path d="M20 21a8 8 0 1 0-16 0" />
        </svg>
    ),
    badge: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="6" y="9" width="12" height="6" rx="3" />
        </svg>
    ),
    modal: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="4" width="20" height="16" rx="3" />
            <path d="M6 8h12M6 12h8" />
        </svg>
    ),
};

const navigation: NavItem[] = [
    { titleKey: 'nav.gettingStarted', href: '/docs', icon: icons.book },
    { titleKey: 'nav.theming', href: '/docs/theming', icon: icons.palette },
    { titleKey: 'nav.colors', href: '/docs/colors', icon: icons.colors },
    {
        titleKey: 'nav.components',
        href: '/docs/components',
        icon: icons.cube,
        children: [
            // Forms
            { titleKey: 'Button', href: '/docs/components/button', icon: icons.button },
            { titleKey: 'Input', href: '/docs/components/input', icon: icons.input },
            { titleKey: 'Checkbox', href: '/docs/components/checkbox' },
            { titleKey: 'Radio', href: '/docs/components/radio' },
            { titleKey: 'Switch', href: '/docs/components/switch' },
            { titleKey: 'Select', href: '/docs/components/select' },
            { titleKey: 'TextArea', href: '/docs/components/textarea' },
            { titleKey: 'DatePicker', href: '/docs/components/datepicker' },
            { titleKey: 'IconButton', href: '/docs/components/iconbutton' },
            // Data Display
            { titleKey: 'Avatar', href: '/docs/components/avatar' },
            { titleKey: 'Badge', href: '/docs/components/badge' },
            { titleKey: 'Card', href: '/docs/components/card', icon: icons.card },
            { titleKey: 'Tag', href: '/docs/components/tag' },
            { titleKey: 'Table', href: '/docs/components/table' },
            // Layout
            { titleKey: 'Box', href: '/docs/components/box' },
            { titleKey: 'Stack', href: '/docs/components/stack' },
            { titleKey: 'Divider', href: '/docs/components/divider' },
            // Feedback
            { titleKey: 'Progress', href: '/docs/components/progress' },
            { titleKey: 'Spinner', href: '/docs/components/spinner' },
            { titleKey: 'Skeleton', href: '/docs/components/skeleton' },
            { titleKey: 'Toast', href: '/docs/components/toast' },
            { titleKey: 'Tooltip', href: '/docs/components/tooltip' },
            // Navigation
            { titleKey: 'Tabs', href: '/docs/components/tabs' },
            { titleKey: 'Pagination', href: '/docs/components/pagination' },
            // Overlay
            { titleKey: 'Modal', href: '/docs/components/modal', icon: icons.modal },
            { titleKey: 'Drawer', href: '/docs/components/drawer' },
            { titleKey: 'Dropdown', href: '/docs/components/dropdown' },
            { titleKey: 'Popover', href: '/docs/components/popover' },
            { titleKey: 'Accordion', href: '/docs/components/accordion' },
            { titleKey: 'AlertDialog', href: '/docs/components/alertdialog' },
            { titleKey: 'BottomSheet', href: '/docs/components/bottomsheet' },
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

    const isActive = (href: string) => pathname === href;
    const isChildActive = (item: NavItem) =>
        item.children?.some(child => child.href === pathname) || false;

    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Mesh Gradient Background */}
            <div className="mesh-background" />
            <div className="aurora-bg" />

            {/* Header - Liquid Glass */}
            <header
                className="liquid-glass-elevated"
                style={{
                    position: 'fixed',
                    top: 12,
                    left: 12,
                    right: 12,
                    zIndex: 100,
                    padding: '12px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Mobile menu button */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="mobile-menu-btn"
                        style={{
                            display: 'none',
                            padding: '8px',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--x-foreground)',
                        }}
                        aria-label="Toggle menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                    </button>

                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                        <Logo size={28} />
                        <span style={{ fontWeight: 700, fontSize: '18px', color: 'var(--x-foreground)' }}>
                            X-UI
                        </span>
                    </Link>
                    <span
                        className="liquid-pill"
                        style={{
                            fontSize: '12px',
                            padding: '4px 12px',
                            background: 'var(--gradient-primary)',
                            color: 'white',
                            border: 'none',
                        }}
                    >
                        Docs
                    </span>
                </div>

                {/* Navigation Links */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <Link
                        href="/#features"
                        style={{
                            color: 'var(--x-mutedForeground)',
                            fontSize: '14px',
                            fontWeight: 500,
                            textDecoration: 'none',
                            transition: 'color 0.2s',
                        }}
                    >
                        Features
                    </Link>
                    <Link
                        href="/icons"
                        style={{
                            color: 'var(--x-mutedForeground)',
                            fontSize: '14px',
                            fontWeight: 500,
                            textDecoration: 'none',
                            transition: 'color 0.2s',
                        }}
                    >
                        Icons
                    </Link>
                    <a
                        href="/storybook/"
                        style={{
                            color: 'var(--x-mutedForeground)',
                            fontSize: '14px',
                            fontWeight: 500,
                            textDecoration: 'none',
                            transition: 'color 0.2s',
                        }}
                    >
                        Storybook
                    </a>
                    <Link
                        href="/#components"
                        style={{
                            color: 'var(--x-mutedForeground)',
                            fontSize: '14px',
                            fontWeight: 500,
                            textDecoration: 'none',
                            transition: 'color 0.2s',
                        }}
                    >
                        Components
                    </Link>
                </nav>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <LanguageToggle />
                    <ThemeToggle />
                    <a
                        href="https://github.com/xdev-asia-labs/x-ui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="liquid-glass"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            color: 'var(--x-foreground)',
                            textDecoration: 'none',
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>
            </header>

            <div style={{ display: 'flex', flex: 1, paddingTop: '88px' }}>
                {/* Sidebar - Liquid Glass */}
                <aside
                    className="liquid-glass-elevated docs-sidebar"
                    style={{
                        width: '280px',
                        minWidth: '280px',
                        height: 'calc(100vh - 100px)',
                        position: 'fixed',
                        top: '88px',
                        left: '12px',
                        padding: '20px 16px',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                    }}
                >
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {navigation.map((item, index) => (
                            <div
                                key={item.href}
                                className={`animate-slide-in-left stagger-${index + 1}`}
                                style={{ opacity: 0 }}
                            >
                                <Link
                                    href={item.href}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        padding: '12px 16px',
                                        borderRadius: '14px',
                                        fontSize: '14px',
                                        fontWeight: isActive(item.href) || isChildActive(item) ? 600 : 500,
                                        color: isActive(item.href)
                                            ? 'white'
                                            : 'var(--x-mutedForeground)',
                                        background: isActive(item.href)
                                            ? 'var(--gradient-primary)'
                                            : 'transparent',
                                        boxShadow: isActive(item.href)
                                            ? '0 4px 20px rgba(99, 102, 241, 0.35)'
                                            : 'none',
                                        textDecoration: 'none',
                                        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isActive(item.href)) {
                                            e.currentTarget.style.background = 'var(--glass-bg-hover)';
                                            e.currentTarget.style.color = 'var(--x-foreground)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isActive(item.href)) {
                                            e.currentTarget.style.background = 'transparent';
                                            e.currentTarget.style.color = 'var(--x-mutedForeground)';
                                        }
                                    }}
                                >
                                    <span style={{ opacity: 0.9 }}>{item.icon}</span>
                                    {getNavTitle(item.titleKey)}
                                </Link>
                                {item.children && (
                                    <div style={{ marginLeft: '12px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    padding: '10px 16px',
                                                    borderRadius: '12px',
                                                    fontSize: '13px',
                                                    fontWeight: isActive(child.href) ? 600 : 400,
                                                    color: isActive(child.href)
                                                        ? 'white'
                                                        : 'var(--x-mutedForeground)',
                                                    background: isActive(child.href)
                                                        ? 'var(--gradient-primary)'
                                                        : 'transparent',
                                                    boxShadow: isActive(child.href)
                                                        ? '0 4px 16px rgba(99, 102, 241, 0.3)'
                                                        : 'none',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                                }}
                                                onMouseEnter={(e) => {
                                                    if (!isActive(child.href)) {
                                                        e.currentTarget.style.background = 'var(--glass-bg-hover)';
                                                        e.currentTarget.style.color = 'var(--x-foreground)';
                                                    }
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (!isActive(child.href)) {
                                                        e.currentTarget.style.background = 'transparent';
                                                        e.currentTarget.style.color = 'var(--x-mutedForeground)';
                                                    }
                                                }}
                                            >
                                                <span style={{ opacity: 0.7 }}>{child.icon}</span>
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
                    marginLeft: '304px',
                    padding: '32px 48px',
                    maxWidth: '900px',
                }}>
                    <div className="animate-fade-in">
                        {children}
                    </div>
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
                    main {
                        margin-left: 0 !important;
                        padding: 20px !important;
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
