'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const footerLinks = {
    product: [
        { label: 'Components', href: '#components' },
        { label: 'Icons', href: '/icons' },
        { label: 'Documentation', href: '#' },
    ],
    resources: [
        { label: 'GitHub', href: 'https://github.com/xdev-asia/x-ui', external: true },
        { label: 'npm', href: 'https://www.npmjs.com/org/xdev-asia', external: true },
    ],
};

export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid var(--x-glass-border)',
            background: 'var(--x-glass-bg)',
            backdropFilter: 'blur(20px)',
            paddingTop: '60px',
            paddingBottom: '40px',
        }}>
            <div className="container">
                {/* Main footer content */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '48px',
                    marginBottom: '60px',
                }}>
                    {/* Brand */}
                    <div>
                        <Link href="/" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '16px',
                            textDecoration: 'none'
                        }}>
                            <Logo size={36} />
                            <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--x-foreground)' }}>X-UI</span>
                        </Link>
                        <p style={{
                            color: 'var(--x-mutedForeground)',
                            fontSize: '14px',
                            lineHeight: 1.7,
                            maxWidth: '280px',
                        }}>
                            Beautiful, accessible, and performant components for React and React Native.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: 'var(--x-mutedForeground)',
                            marginBottom: '16px',
                        }}>
                            Product
                        </h4>
                        <ul className="flex flex-col gap-3 list-none p-0 m-0">
                            {footerLinks.product.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} style={{
                                        color: 'var(--x-foreground)',
                                        fontSize: '14px',
                                        opacity: 0.8,
                                        transition: 'color 0.2s ease',
                                        textDecoration: 'none',
                                    }} className="hover:text-blue-400">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            color: 'var(--x-mutedForeground)',
                            marginBottom: '16px',
                        }}>
                            Resources
                        </h4>
                        <ul className="flex flex-col gap-3 list-none p-0 m-0">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        target={link.external ? '_blank' : undefined}
                                        rel={link.external ? 'noopener noreferrer' : undefined}
                                        style={{
                                            color: 'var(--x-foreground)',
                                            fontSize: '14px',
                                            opacity: 0.8,
                                            textDecoration: 'none',
                                        }}
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '24px',
                    borderTop: '1px solid var(--x-glass-border)',
                    flexWrap: 'wrap',
                    gap: '16px',
                }}>
                    <p style={{
                        color: 'var(--x-mutedForeground)',
                        fontSize: '13px',
                    }}>
                        © {new Date().getFullYear()} XDev Asia. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
