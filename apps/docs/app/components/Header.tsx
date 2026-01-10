'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@xdev-asia/x-ui-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '/docs', label: 'Docs' },
        { href: '/#features', label: 'Features' },
        { href: '/icons', label: 'Icons' },
        { href: '/storybook/', label: 'Storybook', external: true },
        { href: '/#components', label: 'Components' },
    ];

    return (
        <>
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
            }}>
                <div className="container" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    {/* Logo */}
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}>
                        <Logo size={36} />
                        <span style={{ fontWeight: 700, fontSize: '20px', letterSpacing: '-0.5px', color: 'var(--x-foreground)', whiteSpace: 'nowrap' }}>
                            X-UI
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="desktop-nav" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '24px',
                    }}>
                        {navLinks.map((link) => (
                            link.external ? (
                                <a key={link.href} href={link.href} style={{ color: 'var(--x-mutedForeground)', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s', textDecoration: 'none' }}>
                                    {link.label}
                                </a>
                            ) : (
                                <Link key={link.href} href={link.href} style={{ color: 'var(--x-mutedForeground)', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s', textDecoration: 'none' }}>
                                    {link.label}
                                </Link>
                            )
                        ))}
                        <ThemeToggle />
                        <a href="https://github.com/xdev-asia-labs/x-ui" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" style={{ borderRadius: '9999px' }}>
                                GitHub
                            </Button>
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="mobile-nav-controls" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="mobile-menu-btn"
                            style={{
                                padding: '8px',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'var(--x-foreground)',
                            }}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 12h18M3 6h18M3 18h18" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="mobile-menu-overlay"
                    style={{
                        position: 'fixed',
                        top: '72px',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(10, 10, 15, 0.95)',
                        backdropFilter: 'blur(20px)',
                        zIndex: 99,
                        padding: '24px',
                    }}
                >
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {navLinks.map((link) => (
                            link.external ? (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        color: 'var(--x-foreground)',
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        textDecoration: 'none',
                                        padding: '16px',
                                        borderRadius: '12px',
                                        background: 'rgba(255,255,255,0.05)',
                                        transition: 'background 0.2s',
                                    }}
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        color: 'var(--x-foreground)',
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        textDecoration: 'none',
                                        padding: '16px',
                                        borderRadius: '12px',
                                        background: 'rgba(255,255,255,0.05)',
                                        transition: 'background 0.2s',
                                    }}
                                >
                                    {link.label}
                                </Link>
                            )
                        ))}
                        <a
                            href="https://github.com/xdev-asia-labs/x-ui"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--x-foreground)',
                                fontSize: '18px',
                                fontWeight: 500,
                                textDecoration: 'none',
                                padding: '16px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)',
                                textAlign: 'center',
                                marginTop: '8px',
                            }}
                        >
                            ⭐ GitHub
                        </a>
                    </nav>
                </div>
            )}

            <style jsx global>{`
                /* Desktop: show desktop nav, hide mobile controls */
                @media (min-width: 768px) {
                    .desktop-nav {
                        display: flex !important;
                    }
                    .mobile-nav-controls {
                        display: none !important;
                    }
                    .mobile-menu-overlay {
                        display: none !important;
                    }
                }
                
                /* Mobile: hide desktop nav, show mobile controls */
                @media (max-width: 767px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-nav-controls {
                        display: flex !important;
                    }
                }
            `}</style>
        </>
    );
}
