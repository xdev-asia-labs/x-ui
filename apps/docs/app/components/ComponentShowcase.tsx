'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
    Activity, Airplay, AlarmClock, AlertCircle, AlignJustify, Anchor, Aperture, Archive, ArrowRight, AtSign, Search,
    Button, Input, Card, CardTitle, CardDescription, Badge, Avatar, Switch, Checkbox, Progress, Tag, Spinner,
    Grid, Col
} from '@xdev-asia/x-ui-react';

const icons = [
    Activity, Airplay, AlarmClock, AlertCircle, AlignJustify, Anchor, Aperture, Archive, ArrowRight, AtSign, Search
];

function TiltCard({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        ref.current.style.zIndex = '10';
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;
        ref.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        ref.current.style.zIndex = '1';
    };

    return (
        <div
            ref={ref}
            className={`liquid-glass-elevated animate-slide-up ${className}`}
            style={{
                padding: '28px',
                opacity: 0,
                animationDelay: `${delay}s`,
                transition: 'transform 0.1s ease-out, z-index 0s linear 0.1s',
                transformStyle: 'preserve-3d',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
}

export default function ComponentShowcase() {
    const [switchValue, setSwitchValue] = useState(true);
    const [checkValue, setCheckValue] = useState(true);

    return (
        <section id="components" className="py-24 relative overflow-hidden">
            {/* Improved Mesh background */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    background: `
                        radial-gradient(ellipse 60% 40% at 20% 30%, rgba(99, 102, 241, 0.12) 0%, transparent 60%),
                        radial-gradient(ellipse 50% 50% at 80% 70%, rgba(236, 72, 153, 0.08) 0%, transparent 60%)
                    `,
                    pointerEvents: 'none',
                }}
            />

            <div className="container relative">
                {/* Section header */}
                <div className="text-center mb-20 animate-fade-in">
                    <span
                        className="liquid-pill inline-block mb-6"
                        style={{
                            background: 'var(--gradient-primary)',
                            color: 'white',
                            fontSize: '12px',
                            padding: '6px 16px',
                            border: 'none',
                            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)'
                        }}
                    >
                        ✨ Component Library
                    </span>
                    <h2
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 800,
                            marginBottom: '20px',
                            letterSpacing: '-0.03em',
                            background: 'linear-gradient(135deg, var(--x-foreground) 0%, var(--x-mutedForeground) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}
                    >
                        Component Showcase
                    </h2>
                    <p style={{
                        color: 'var(--x-mutedForeground)',
                        fontSize: '1.25rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.6,
                    }}>
                        Interact with our comprehensive library of 50+ professionally crafted components.
                    </p>
                </div>

                {/* Masonry Grid Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '32px',
                }}>
                    {/* Buttons */}
                    <TiltCard delay={0.1}>
                        <div style={{ marginBottom: '24px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--x-foreground)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="8" width="18" height="8" rx="4" /></svg>
                                </span>
                                Buttons
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Button>Default</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="glass">Glass</Button>
                            <Button colorScheme="secondary">Secondary</Button>
                            <Button isLoading>Loading</Button>
                        </div>
                    </TiltCard>

                    {/* Inputs */}
                    <TiltCard delay={0.2}>
                        <div style={{ marginBottom: '24px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--x-foreground)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="6" width="18" height="12" rx="2" /></svg>
                                </span>
                                Form Inputs
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5">
                            <Input placeholder="Default input" />
                            <Input variant="glass" placeholder="Glass input" leftIcon={<Search size={18} />} />
                        </div>
                    </TiltCard>

                    {/* Cards */}
                    <TiltCard delay={0.3}>
                        <div style={{ marginBottom: '24px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--x-foreground)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 9h18" /></svg>
                                </span>
                                Cards
                            </h3>
                        </div>
                        <Card variant="filled" padding="md">
                            <div className="flex items-center gap-4">
                                <Avatar fallback="JD" size="md" src="https://i.pravatar.cc/150?u=1" />
                                <div>
                                    <div className="font-semibold text-sm">John Doe</div>
                                    <div className="text-xs text-[var(--x-mutedForeground)]">Software Engineer</div>
                                </div>
                                <Badge colorScheme="success" className="ml-auto">Pro</Badge>
                            </div>
                        </Card>
                    </TiltCard>

                    {/* Tags & Badges */}
                    <TiltCard delay={0.4}>
                        <div style={{ marginBottom: '24px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--x-foreground)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="6" y="9" width="12" height="6" rx="3" /></svg>
                                </span>
                                Tags & Badges
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Badge>Default</Badge>
                            <Badge colorScheme="primary">Primary</Badge>
                            <Badge colorScheme="success">Success</Badge>
                            <Badge colorScheme="warning">Warning</Badge>
                            <Badge colorScheme="error">Error</Badge>
                            <Tag onClose={() => { }}>Closable</Tag>
                        </div>
                    </TiltCard>

                    {/* Form Controls */}
                    <TiltCard delay={0.5}>
                        <div style={{ marginBottom: '24px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--x-foreground)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="11" width="18" height="2" rx="1" /><circle cx="12" cy="12" r="3" fill="white" /></svg>
                                </span>
                                Controls
                            </h3>
                        </div>
                        <div className="flex flex-col gap-6">
                            <Switch checked={switchValue} onChange={() => setSwitchValue(!switchValue)} label="Enable notifications" size="lg" />
                            <Checkbox checked={checkValue} onChange={() => setCheckValue(!checkValue)} label="Accept terms and conditions" />
                        </div>
                    </TiltCard>

                    {/* Feedback */}
                    <TiltCard delay={0.6}>
                        <div style={{ marginBottom: '24px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--x-foreground)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                </span>
                                Feedback
                            </h3>
                        </div>
                        <div className="flex flex-col gap-6">
                            <Progress value={65} showLabel />
                            <div className="flex items-center gap-6 pt-2">
                                <Spinner size="sm" />
                                <Spinner size="md" color="secondary" />
                                <Spinner size="lg" color="primary" />
                            </div>
                        </div>
                    </TiltCard>


                </div>
            </div>
        </section >
    );
}


