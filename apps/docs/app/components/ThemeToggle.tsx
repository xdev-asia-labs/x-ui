'use client';

import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem('x-ui-docs-theme') as 'light' | 'dark' | null;
        if (stored) {
            setTheme(stored);
            document.documentElement.setAttribute('data-theme', stored);
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            setTheme('light');
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('x-ui-docs-theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    if (!mounted) {
        return (
            <button
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'transparent',
                    cursor: 'pointer',
                }}
                aria-label="Toggle theme"
            />
        );
    }

    return (
        <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.05)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}
        >
            {/* Sun Icon */}
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    position: 'absolute',
                    color: '#fbbf24',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: theme === 'light' ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0)',
                    opacity: theme === 'light' ? 1 : 0,
                }}
            >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>

            {/* Moon Icon */}
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                    position: 'absolute',
                    color: '#a78bfa',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: theme === 'dark' ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0)',
                    opacity: theme === 'dark' ? 1 : 0,
                }}
            >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
        </button>
    );
}
