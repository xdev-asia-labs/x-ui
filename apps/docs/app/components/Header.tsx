'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@xdev-asia/x-ui-react';
import Logo from './Logo';

export default function Header() {
    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: '1rem 2rem',
            background: 'rgba(10, 10, 15, 0.6)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                {/* Logo */}
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                    <Logo size={36} />
                    <span style={{ fontWeight: 700, fontSize: '20px', letterSpacing: '-0.5px', color: 'var(--x-foreground)' }}>
                        X-UI
                    </span>
                </Link>

                {/* Nav */}
                <nav className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                    <Link href="/#features" style={{ color: 'var(--x-mutedForeground)', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s', textDecoration: 'none' }} className="hover:text-white">Features</Link>
                    <Link href="/icons" style={{ color: 'var(--x-mutedForeground)', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s', textDecoration: 'none' }} className="hover:text-white">Icons</Link>
                    <Link href="/#components" style={{ color: 'var(--x-mutedForeground)', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s', textDecoration: 'none' }} className="hover:text-white">Components</Link>
                    <a href="https://github.com/xdev-asia/x-ui" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="rounded-full">
                            GitHub
                        </Button>
                    </a>
                </nav>
            </div>
        </header>
    );
}
