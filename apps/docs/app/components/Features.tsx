'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardTitle, CardDescription } from '@xdev-asia/x-ui-react';

// Beautiful gradient SVG icons
const icons = {
    design: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="designGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f472b6" />
                    <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
            </defs>
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#designGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 17L12 22L22 17" stroke="url(#designGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke="url(#designGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    darkMode: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
            </defs>
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="url(#moonGrad)" />
        </svg>
    ),
    responsive: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="respGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
            </defs>
            <rect x="2" y="3" width="20" height="14" rx="2" stroke="url(#respGrad)" strokeWidth="2" />
            <path d="M8 21H16" stroke="url(#respGrad)" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 17V21" stroke="url(#respGrad)" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    accessible: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="accessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#2dd4bf" />
                </linearGradient>
            </defs>
            <circle cx="12" cy="5" r="2" fill="url(#accessGrad)" />
            <path d="M12 8V12M12 12L8 18M12 12L16 18" stroke="url(#accessGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 11H17" stroke="url(#accessGrad)" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    ai: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
            </defs>
            <rect x="3" y="6" width="18" height="12" rx="3" stroke="url(#aiGrad)" strokeWidth="2" />
            <circle cx="9" cy="12" r="2" fill="url(#aiGrad)" />
            <circle cx="15" cy="12" r="2" fill="url(#aiGrad)" />
            <path d="M8 3V6M16 3V6" stroke="url(#aiGrad)" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    fast: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="fastGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
            </defs>
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#fastGrad)" />
        </svg>
    ),
};

const features = [
    {
        icon: icons.design,
        title: 'Beautiful Design',
        description: 'Glassmorphism, gradients, and micro-animations create stunning visual experiences.',
    },
    {
        icon: icons.darkMode,
        title: 'Dark Mode First',
        description: 'Built with dark mode as the default, with seamless light mode support.',
    },
    {
        icon: icons.responsive,
        title: 'Responsive',
        description: 'Works beautifully on all screen sizes from mobile to desktop.',
    },
    {
        icon: icons.accessible,
        title: 'Accessible',
        description: 'WCAG 2.1 AA compliant with full keyboard navigation and screen reader support.',
    },
    {
        icon: icons.ai,
        title: 'AI-Powered',
        description: 'Native MCP server integration for intelligent, context-aware component generation.',
    },
    {
        icon: icons.fast,
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
                {/* Section header with image */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '60px',
                    alignItems: 'center',
                    marginBottom: '80px',
                }}>
                    <div>
                        <h2 className="text-gradient" style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            marginBottom: '24px',
                            letterSpacing: '-0.02em',
                        }}>
                            Everything You Need to Build Modern Apps
                        </h2>
                        <p style={{
                            color: 'var(--x-mutedForeground)',
                            fontSize: '1.125rem',
                            lineHeight: 1.7,
                            marginBottom: '32px',
                        }}>
                            Built with modern best practices and designed for developer experience.
                            From buttons to complex data grids, X-UI has you covered.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            {['50+ Components', 'TypeScript', 'Storybook'].map((tag) => (
                                <div key={tag} style={{
                                    padding: '8px 16px',
                                    background: 'rgba(99, 102, 241, 0.1)',
                                    border: '1px solid rgba(99, 102, 241, 0.2)',
                                    borderRadius: '20px',
                                    fontSize: '14px',
                                    color: 'var(--x-primary)',
                                    fontWeight: 500,
                                }}>
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{
                        position: 'relative',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 40px 80px rgba(0, 0, 0, 0.4)',
                    }}>
                        <Image
                            src="/images/feature-showcase.png"
                            alt="X-UI Component Showcase"
                            width={600}
                            height={400}
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                            }}
                        />
                        {/* Glow overlay */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
                            pointerEvents: 'none',
                        }} />
                    </div>
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

            {/* Responsive styles */}
            <style jsx>{`
                @media (max-width: 900px) {
                    div[style*="grid-template-columns: 1fr 1fr"] {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                    }
                }
            `}</style>
        </section>
    );
}

