'use client';

import React from 'react';
import { Card, CardTitle, CardDescription } from '@xdev-asia/x-ui-react';

const features = [
    {
        icon: '🎨',
        title: 'Beautiful Design',
        description: 'Glassmorphism, gradients, and micro-animations create stunning visual experiences.',
    },
    {
        icon: '🌙',
        title: 'Dark Mode First',
        description: 'Built with dark mode as the default, with seamless light mode support.',
    },
    {
        icon: '📱',
        title: 'Cross-Platform',
        description: 'One codebase for modern React web applications. Responsive and accessible.',
    },
    {
        icon: '♿',
        title: 'Accessible',
        description: 'WCAG 2.1 AA compliant with full keyboard navigation and screen reader support.',
    },
    {
        icon: '🤖',
        title: 'AI-Ready',
        description: 'MCP server integration for AI-powered component generation and suggestions.',
    },
    {
        icon: '⚡',
        title: 'Blazing Fast',
        description: 'Tree-shakable, optimized bundle under 50kb. No performance compromise.',
    },
];

export default function Features() {
    return (
        <section id="features" className="section" style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,102,255,0.02) 100%)',
        }}>
            <div className="container">
                {/* Section header */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 className="text-gradient" style={{
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        marginBottom: '16px',
                        letterSpacing: '-0.02em',
                    }}>
                        Everything You Need
                    </h2>
                    <p style={{ color: 'var(--x-mutedForeground)', fontSize: '1.125rem', maxWidth: '500px', margin: '0 auto' }}>
                        Built with modern best practices and designed for developer experience.
                    </p>
                </div>

                {/* Features grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '24px',
                }}>
                    {features.map((feature, index) => (
                        <Card
                            key={feature.title}
                            variant="glass"
                            padding="lg"
                            isInteractive
                            className="animate-fade-in"
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '14px',
                                background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.1) 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '28px',
                                marginBottom: '20px',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                {feature.icon}
                            </div>
                            <CardTitle style={{ marginBottom: '12px' }}>
                                {feature.title}
                            </CardTitle>
                            <CardDescription style={{ lineHeight: 1.6 }}>
                                {feature.description}
                            </CardDescription>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
