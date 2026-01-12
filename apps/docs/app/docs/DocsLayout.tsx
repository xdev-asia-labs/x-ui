'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from '../components/Header';

interface NavItem {
    title: string;
    href: string;
    icon?: React.ReactNode;
}

interface NavCategory {
    title: string;
    icon?: React.ReactNode;
    items: NavItem[];
}

// SVG Icons
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
    search: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
        </svg>
    ),
};

// Top-level navigation
const topNav: NavItem[] = [
    { title: 'Getting Started', href: '/docs', icon: icons.book },
    { title: 'MCP for AI', href: '/docs/getting-started/mcp', icon: icons.book },
    { title: 'Theming', href: '/docs/theming', icon: icons.palette },
    { title: 'Colors & Tokens', href: '/docs/colors', icon: icons.colors },
];

// Component categories
const componentCategories: NavCategory[] = [
    {
        title: 'Forms',
        items: [
            { title: 'Button', href: '/docs/components/button' },
            { title: 'IconButton', href: '/docs/components/iconbutton' },
            { title: 'Input', href: '/docs/components/input' },
            { title: 'TextArea', href: '/docs/components/textarea' },
            { title: 'Select', href: '/docs/components/select' },
            { title: 'Autocomplete', href: '/docs/components/autocomplete' },
            { title: 'Checkbox', href: '/docs/components/checkbox' },
            { title: 'Radio', href: '/docs/components/radio' },
            { title: 'Switch', href: '/docs/components/switch' },
            { title: 'Slider', href: '/docs/components/slider' },
            { title: 'DatePicker', href: '/docs/components/datepicker' },
            { title: 'TimePicker', href: '/docs/components/timepicker' },
            { title: 'Calendar', href: '/docs/components/calendar' },
            { title: 'ColorPicker', href: '/docs/components/colorpicker' },
            { title: 'FileUpload', href: '/docs/components/fileupload' },
        ],
    },
    {
        title: 'Data Display',
        items: [
            { title: 'Avatar', href: '/docs/components/avatar' },
            { title: 'Badge', href: '/docs/components/badge' },
            { title: 'Card', href: '/docs/components/card' },
            { title: 'Carousel', href: '/docs/components/carousel' },
            { title: 'Tag', href: '/docs/components/tag' },
            { title: 'Table', href: '/docs/components/table' },
            { title: 'DataGrid', href: '/docs/components/datagrid' },
            { title: 'TreeView', href: '/docs/components/treeview' },
        ],
    },
    {
        title: 'Layout',
        items: [
            { title: 'Box', href: '/docs/components/box' },
            { title: 'Stack', href: '/docs/components/stack' },
            { title: 'Grid', href: '/docs/components/grid' },
            { title: 'Divider', href: '/docs/components/divider' },
        ],
    },
    {
        title: 'Feedback',
        items: [
            { title: 'Progress', href: '/docs/components/progress' },
            { title: 'Spinner', href: '/docs/components/spinner' },
            { title: 'Skeleton', href: '/docs/components/skeleton' },
            { title: 'Toast', href: '/docs/components/toast' },
            { title: 'Tooltip', href: '/docs/components/tooltip' },
        ],
    },
    {
        title: 'Navigation',
        items: [
            { title: 'Tabs', href: '/docs/components/tabs' },
            { title: 'Pagination', href: '/docs/components/pagination' },
            { title: 'Stepper', href: '/docs/components/stepper' },
        ],
    },
    {
        title: 'Overlay',
        items: [
            { title: 'Modal', href: '/docs/components/modal' },
            { title: 'Drawer', href: '/docs/components/drawer' },
            { title: 'Dropdown', href: '/docs/components/dropdown' },
            { title: 'Popover', href: '/docs/components/popover' },
            { title: 'Accordion', href: '/docs/components/accordion' },
            { title: 'AlertDialog', href: '/docs/components/alertdialog' },
            { title: 'BottomSheet', href: '/docs/components/bottomsheet' },
        ],
    },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedCategories, setExpandedCategories] = useState<string[]>(componentCategories.map(c => c.title));

    const isActive = (href: string) => pathname === href;

    // Filter components based on search
    const filteredCategories = useMemo(() => {
        if (!searchQuery.trim()) return componentCategories;

        const query = searchQuery.toLowerCase();
        return componentCategories
            .map(category => ({
                ...category,
                items: category.items.filter(item =>
                    item.title.toLowerCase().includes(query)
                ),
            }))
            .filter(category => category.items.length > 0);
    }, [searchQuery]);

    const toggleCategory = (title: string) => {
        setExpandedCategories(prev =>
            prev.includes(title)
                ? prev.filter(t => t !== title)
                : [...prev, title]
        );
    };

    const NavLink = ({ item, indent = false }: { item: NavItem; indent?: boolean }) => (
        <Link
            href={item.href}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: indent ? '8px 12px 8px 24px' : '10px 14px',
                borderRadius: '10px',
                fontSize: indent ? '13px' : '14px',
                fontWeight: isActive(item.href) ? 600 : 400,
                color: isActive(item.href) ? 'white' : 'var(--x-mutedForeground)',
                background: isActive(item.href) ? 'var(--gradient-primary)' : 'transparent',
                boxShadow: isActive(item.href) ? '0 4px 16px rgba(99, 102, 241, 0.3)' : 'none',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
                if (!isActive(item.href)) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
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
            {item.icon && <span style={{ opacity: 0.8 }}>{item.icon}</span>}
            {item.title}
        </Link>
    );

    return (
        <div className="min-h-screen flex flex-col relative">
            {/* Background */}
            <div className="mesh-background" />
            <div className="aurora-bg" />

            {/* Header */}
            <Header />

            <div style={{ display: 'flex', flex: 1, paddingTop: '80px' }}>
                {/* Sidebar */}
                <aside
                    className="liquid-glass-elevated docs-sidebar"
                    style={{
                        width: '280px',
                        minWidth: '280px',
                        height: 'calc(100vh - 100px)',
                        position: 'fixed',
                        top: '88px',
                        left: '12px',
                        padding: '16px',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                    }}
                >
                    {/* Search */}
                    <div style={{ marginBottom: '16px' }}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '10px 14px',
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                            }}
                        >
                            <span style={{ color: 'var(--x-mutedForeground)' }}>{icons.search}</span>
                            <input
                                type="text"
                                placeholder="Search components..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    flex: 1,
                                    background: 'transparent',
                                    border: 'none',
                                    outline: 'none',
                                    color: 'var(--x-foreground)',
                                    fontSize: '14px',
                                }}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: 'var(--x-mutedForeground)',
                                        cursor: 'pointer',
                                        padding: '2px',
                                    }}
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>

                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {/* Top Navigation */}
                        {!searchQuery && topNav.map((item) => (
                            <NavLink key={item.href} item={item} />
                        ))}

                        {/* Components Header */}
                        {!searchQuery && (
                            <div style={{
                                padding: '16px 14px 8px',
                                fontSize: '11px',
                                fontWeight: 600,
                                color: 'var(--x-mutedForeground)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                            }}>
                                Components
                            </div>
                        )}

                        {/* Component Categories */}
                        {filteredCategories.map((category) => (
                            <div key={category.title} style={{ marginBottom: '4px' }}>
                                <button
                                    onClick={() => toggleCategory(category.title)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        padding: '8px 14px',
                                        borderRadius: '8px',
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: 'var(--x-mutedForeground)',
                                        fontSize: '12px',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.3px',
                                        transition: 'all 0.2s',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                    }}
                                >
                                    <span>{category.title}</span>
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        style={{
                                            transform: expandedCategories.includes(category.title) ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.2s',
                                        }}
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>
                                {expandedCategories.includes(category.title) && (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '2px' }}>
                                        {category.items.map((item) => (
                                            <NavLink key={item.href} item={item} indent />
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* No results */}
                        {searchQuery && filteredCategories.length === 0 && (
                            <div style={{
                                padding: '24px',
                                textAlign: 'center',
                                color: 'var(--x-mutedForeground)',
                                fontSize: '14px',
                            }}>
                                No components found for "{searchQuery}"
                            </div>
                        )}
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
                    main {
                        margin-left: 0 !important;
                        padding: 20px !important;
                    }
                }
            `}</style>
        </div>
    );
}
