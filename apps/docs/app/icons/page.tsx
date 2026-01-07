'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    Input,
    Card,
    Search,
    Menu,
    X,
    Check,
    ChevronDown,
    ChevronRight,
    Home,
    Settings,
    User,
    Activity,
    AlertCircle,
    Bell,
    ArrowRight,
    Airplay,
    AlarmClock,
    AlignJustify,
    Anchor,
    Aperture,
    Archive,
    AtSign
} from '@xdev-asia/x-ui-react';

const ALL_ICONS: Record<string, React.ComponentType<any>> = {
    Search, Menu, X, Check, ChevronDown, ChevronRight, Home, Settings, User,
    Activity, AlertCircle, Bell, ArrowRight, Airplay, AlarmClock, AlignJustify,
    Anchor, Aperture, Archive, AtSign
};

export default function IconsPage() {
    const [search, setSearch] = useState('');

    // Filter icons based on search
    const filteredIcons = Object.keys(ALL_ICONS).filter(name =>
        name.toLowerCase().includes(search.toLowerCase())
    ).sort();

    const copyToClipboard = (text: string) => {
        if (typeof navigator !== 'undefined') {
            navigator.clipboard.writeText(`<${text} />`);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main style={{ paddingTop: '80px', flex: 1 }}>
                <div className="container" style={{ padding: '60px 24px' }}>

                    {/* Header */}
                    <div className="animate-fade-in" style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h1 className="text-gradient" style={{
                            fontSize: '3rem',
                            fontWeight: 800,
                            marginBottom: '16px',
                        }}>
                            Icons Library
                        </h1>
                        <p style={{ color: 'var(--x-mutedForeground)', fontSize: '1.25rem', marginBottom: '40px' }}>
                            {Object.keys(ALL_ICONS).length} custom SVG icons ready to use.
                        </p>

                        {/* Search */}
                        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                            <Input
                                placeholder="Search icons..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                variant="glass"
                                leftIcon={<Search size={20} />}
                                style={{ height: '50px', fontSize: '1.125rem' }}
                            />
                        </div>
                    </div>

                    {/* Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                        gap: '24px'
                    }}>
                        {filteredIcons.map((iconName) => {
                            const Icon = ALL_ICONS[iconName];

                            return (
                                <Card
                                    key={iconName}
                                    variant="glass"
                                    isInteractive
                                    onClick={() => copyToClipboard(iconName)}
                                    className="flex flex-col items-center justify-center gap-4 py-6"
                                >
                                    <div style={{ color: 'var(--x-foreground)' }}>
                                        <Icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <span style={{
                                        color: 'var(--x-mutedForeground)',
                                        fontSize: '0.875rem',
                                        textAlign: 'center',
                                        wordBreak: 'break-word',
                                    }}>
                                        {iconName}
                                    </span>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Empty State */}
                    {filteredIcons.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '60px', color: 'var(--x-mutedForeground)' }}>
                            <p>No icons found for "{search}"</p>
                        </div>
                    )}

                </div>
            </main>
            <Footer />
        </div>
    );
}
