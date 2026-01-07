'use client';

import React from 'react';
import DocsLayout, { useLanguage } from '../DocsLayout';

const colorGroups = [
    {
        nameKey: 'colors.semantic',
        colors: [
            { name: '--x-background', light: 'rgb(250, 250, 252)', dark: 'rgb(10, 10, 15)', desc: 'Page background' },
            { name: '--x-foreground', light: 'rgb(15, 23, 42)', dark: 'rgb(248, 250, 252)', desc: 'Primary text' },
            { name: '--x-primary', light: 'rgb(37, 99, 235)', dark: 'rgb(59, 130, 246)', desc: 'Primary brand color' },
            { name: '--x-secondary', light: 'rgb(241, 245, 249)', dark: 'rgb(30, 41, 59)', desc: 'Secondary surfaces' },
            { name: '--x-muted', light: 'rgb(248, 250, 252)', dark: 'rgb(15, 23, 42)', desc: 'Muted backgrounds' },
            { name: '--x-mutedForeground', light: 'rgb(100, 116, 139)', dark: 'rgb(148, 163, 184)', desc: 'Secondary text' },
            { name: '--x-accent', light: 'rgb(79, 70, 229)', dark: 'rgb(99, 102, 241)', desc: 'Accent/highlight' },
            { name: '--x-destructive', light: 'rgb(239, 68, 68)', dark: 'rgb(239, 68, 68)', desc: 'Error/danger' },
            { name: '--x-border', light: 'rgb(226, 232, 240)', dark: 'rgb(30, 41, 59)', desc: 'Border color' },
        ]
    },
    {
        nameKey: 'colors.glass',
        colors: [
            { name: '--x-glass-bg', light: 'rgba(255,255,255,0.8)', dark: 'rgba(30,41,59,0.4)', desc: 'Glass background' },
            { name: '--x-glass-border', light: 'rgba(0,0,0,0.08)', dark: 'rgba(255,255,255,0.08)', desc: 'Glass border' },
        ]
    }
];

export default function ColorsPage() {
    const { t } = useLanguage();

    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{
                    fontSize: '36px',
                    fontWeight: 800,
                    marginBottom: '16px',
                    color: 'rgb(var(--x-foreground))',
                    letterSpacing: '-0.5px',
                }}>
                    {t('colors.title')}
                </h1>
                <p style={{
                    fontSize: '18px',
                    color: 'rgb(var(--x-mutedForeground))',
                    marginBottom: '40px',
                    lineHeight: 1.7,
                }}>
                    {t('colors.description')}
                </p>

                {colorGroups.map((group, gi) => (
                    <section key={gi} style={{ marginBottom: '48px' }}>
                        <h2 style={{
                            fontSize: '24px',
                            fontWeight: 700,
                            marginBottom: '20px',
                            color: 'rgb(var(--x-foreground))',
                        }}>
                            {t(group.nameKey)}
                        </h2>

                        <div style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '1px solid var(--x-glass-border, rgba(255,255,255,0.08))',
                        }}>
                            {/* Header */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 100px 100px 1fr',
                                gap: '16px',
                                padding: '12px 20px',
                                background: 'var(--x-glass-bg, rgba(30, 41, 59, 0.3))',
                                borderBottom: '1px solid var(--x-glass-border)',
                                fontSize: '12px',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                color: 'rgb(var(--x-mutedForeground))',
                            }}>
                                <span>Token</span>
                                <span>Light</span>
                                <span>Dark</span>
                                <span>Description</span>
                            </div>

                            {/* Rows */}
                            {group.colors.map((color, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 100px 100px 1fr',
                                        gap: '16px',
                                        padding: '16px 20px',
                                        alignItems: 'center',
                                        borderBottom: i < group.colors.length - 1
                                            ? '1px solid var(--x-glass-border, rgba(255,255,255,0.05))'
                                            : 'none',
                                    }}
                                >
                                    <code style={{
                                        fontSize: '13px',
                                        color: 'rgb(59, 130, 246)',
                                        fontFamily: 'monospace',
                                    }}>
                                        {color.name}
                                    </code>
                                    <div style={{
                                        width: '80px',
                                        height: '32px',
                                        borderRadius: '6px',
                                        background: color.light,
                                        border: '1px solid rgba(0,0,0,0.1)',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                    }} title={color.light} />
                                    <div style={{
                                        width: '80px',
                                        height: '32px',
                                        borderRadius: '6px',
                                        background: color.dark,
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                                    }} title={color.dark} />
                                    <span style={{
                                        fontSize: '14px',
                                        color: 'rgb(var(--x-mutedForeground))',
                                    }}>
                                        {color.desc}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                {/* Usage */}
                <section>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'rgb(var(--x-foreground))',
                    }}>
                        {t('colors.usage')}
                    </h2>
                    <div style={{
                        padding: '20px',
                        borderRadius: '12px',
                        background: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid rgba(255,255,255,0.08)',
                    }}>
                        <pre style={{
                            margin: 0,
                            fontSize: '13px',
                            lineHeight: 1.7,
                            fontFamily: '"JetBrains Mono", monospace',
                            color: '#e2e8f0',
                        }}>
                            {`.my-component {
    background: rgb(var(--x-background));
    color: rgb(var(--x-foreground));
    border: 1px solid rgb(var(--x-border));
}

.glass-effect {
    background: var(--x-glass-bg);
    border: 1px solid var(--x-glass-border);
    backdrop-filter: blur(16px);
}`}
                        </pre>
                    </div>
                </section>
            </div>
        </DocsLayout>
    );
}
