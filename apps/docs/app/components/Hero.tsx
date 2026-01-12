'use client';

import React from 'react';
import { Button, Badge } from '@xdev-asia/x-ui-react';

export default function Hero() {
    return (
        <section className="grid-bg" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '120px 2rem 80px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Aurora Background */}
            <div className="aurora-bg" />

            {/* Floating Orbs (Additional animations) */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)',
                borderRadius: '50%',
                zIndex: -1
            }} className="animate-float" />

            <div className="container animate-fade-in" style={{ textAlign: 'center', maxWidth: '900px', position: 'relative', zIndex: 1 }}>

                {/* Badge */}
                <div style={{ marginBottom: '32px' }} className="animate-slide-up">
                    <Badge
                        variant="glass"
                        colorScheme="primary"
                        size="lg"
                        leftIcon={<span style={{ marginRight: 4 }}>✨</span>}
                    >
                        Modern UI Components
                    </Badge>
                </div>

                {/* Title */}
                <h1 className="animate-slide-up" style={{
                    fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    marginBottom: '24px',
                    letterSpacing: '-0.03em',
                    animationDelay: '100ms'
                }}>
                    Build Beautiful Apps<br />
                    <span className="text-gradient">Faster Than Ever</span>
                </h1>

                {/* Subtitle */}
                <p className="animate-slide-up" style={{
                    fontSize: '1.25rem',
                    color: 'var(--x-mutedForeground)',
                    maxWidth: '640px',
                    margin: '0 auto 48px',
                    lineHeight: 1.7,
                    animationDelay: '200ms'
                }}>
                    X-UI is a modern, cross-platform component library with 50+ components,
                    dark mode support, glassmorphism design, and AI-powered development tools.
                </p>

                {/* CTAs */}
                <div className="animate-slide-up" style={{
                    display: 'flex',
                    gap: '16px',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    animationDelay: '300ms'
                }}>
                    <Button
                        size="lg"
                        style={{ padding: '0 40px', height: '56px', fontSize: '16px', fontWeight: 600, borderRadius: '99px' }}
                    >
                        Get Started
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        style={{ padding: '0 32px', height: '56px', fontSize: '16px', fontWeight: 600, borderRadius: '99px' }}
                    >
                        View on GitHub
                    </Button>
                </div>

                {/* Stats */}
                <div className="animate-slide-up" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '48px',
                    marginTop: '80px',
                    flexWrap: 'wrap',
                    animationDelay: '400ms',
                    padding: '24px',
                    background: 'rgba(255,255,255,0.03)',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    width: '100vw',
                    marginLeft: 'calc(-50vw + 50%)',
                }}>
                    {[
                        { value: '50+', label: 'Components' },
                        { value: '2', label: 'Platforms' },
                        { value: '100%', label: 'TypeScript' },
                        { value: '< 50kb', label: 'Bundle Size' },
                    ].map((stat) => (
                        <div key={stat.label} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--x-foreground)' }}>{stat.value}</div>
                            <div style={{ fontSize: '14px', color: 'var(--x-mutedForeground)', marginTop: '4px' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
