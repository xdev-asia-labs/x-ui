'use client';

import React, { useState } from 'react';
import {
    Activity, Airplay, AlarmClock, AlertCircle, AlignJustify, Anchor, Aperture, Archive, ArrowRight, AtSign, Search,
    Button, Input, Card, CardHeader, CardTitle, CardContent, Badge, Avatar, Switch, Checkbox, Progress, Tag, Spinner
} from '@xdev-asia/x-ui-react';

export default function ComponentShowcase() {
    const [switchValue, setSwitchValue] = useState(true);
    const [checkValue, setCheckValue] = useState(true);

    return (
        <section id="components" className="py-24 relative overflow-hidden">
            {/* Mesh background for section */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    background: `
                        radial-gradient(ellipse 50% 40% at 30% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 60%),
                        radial-gradient(ellipse 40% 50% at 70% 60%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)
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
                        }}
                    >
                        ✨ Component Library
                    </span>
                    <h2
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 800,
                            marginBottom: '16px',
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
                        fontSize: '1.125rem',
                        maxWidth: '500px',
                        margin: '0 auto',
                        lineHeight: 1.6,
                    }}>
                        A glimpse into the comprehensive component library with Liquid Glass design.
                    </p>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '24px',
                }}>
                    {/* Buttons */}
                    <div className="liquid-glass-elevated animate-slide-up stagger-1" style={{ padding: '28px', opacity: 0 }}>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{
                                fontSize: '16px',
                                fontWeight: 600,
                                color: 'var(--x-foreground)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}>
                                <span style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '10px',
                                    background: 'var(--gradient-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <rect x="3" y="8" width="18" height="8" rx="4" />
                                    </svg>
                                </span>
                                Buttons
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Button>Default</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="glass">Glass</Button>
                            <Button colorScheme="secondary">Secondary</Button>
                            <Button isLoading>Loading</Button>
                        </div>
                    </div>

                    {/* Inputs */}
                    <div className="liquid-glass-elevated animate-slide-up stagger-2" style={{ padding: '28px', opacity: 0 }}>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{
                                fontSize: '16px',
                                fontWeight: 600,
                                color: 'var(--x-foreground)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}>
                                <span style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <rect x="3" y="6" width="18" height="12" rx="2" />
                                    </svg>
                                </span>
                                Form Inputs
                            </h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Input placeholder="Default input" />
                            <Input variant="glass" placeholder="Glass input" leftIcon={<Search size={18} />} />
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="liquid-glass-elevated animate-slide-up stagger-3" style={{ padding: '28px', opacity: 0 }}>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{
                                fontSize: '16px',
                                fontWeight: 600,
                                color: 'var(--x-foreground)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}>
                                <span style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <rect x="3" y="3" width="18" height="18" rx="3" />
                                        <path d="M3 9h18" />
                                    </svg>
                                </span>
                                Cards
                            </h3>
                        </div>
                        <Card variant="filled" padding="md">
                            <div className="flex items-center gap-3">
                                <Avatar fallback="JD" size="md" />
                                <div>
                                    <div className="font-semibold text-sm">John Doe</div>
                                    <div className="text-xs text-[var(--x-mutedForeground)]">Software Engineer</div>
                                </div>
                                <Badge colorScheme="success" className="ml-auto">Pro</Badge>
                            </div>
                        </Card>
                    </div>

                    {/* Tags & Badges */}
                    <div className="liquid-glass-elevated animate-slide-up stagger-4" style={{ padding: '28px', opacity: 0 }}>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{
                                fontSize: '16px',
                                fontWeight: 600,
                                color: 'var(--x-foreground)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}>
                                <span style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <rect x="6" y="9" width="12" height="6" rx="3" />
                                    </svg>
                                </span>
                                Tags & Badges
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <Badge>Default</Badge>
                            <Badge colorScheme="primary">Primary</Badge>
                            <Badge colorScheme="success">Success</Badge>
                            <Badge colorScheme="warning">Warning</Badge>
                            <Badge colorScheme="error">Error</Badge>
                            <Tag closable onClose={() => { }}>Closable</Tag>
                        </div>
                    </div>

                    {/* Form Controls */}
                    <div className="liquid-glass-elevated animate-slide-up stagger-5" style={{ padding: '28px', opacity: 0 }}>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{
                                fontSize: '16px',
                                fontWeight: 600,
                                color: 'var(--x-foreground)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}>
                                <span style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <rect x="3" y="11" width="18" height="2" rx="1" />
                                        <circle cx="12" cy="12" r="3" fill="white" />
                                    </svg>
                                </span>
                                Form Controls
                            </h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Switch checked={switchValue} onChange={() => setSwitchValue(!switchValue)} label="Enable notifications" />
                            <Checkbox checked={checkValue} onChange={() => setCheckValue(!checkValue)} label="Accept terms" />
                        </div>
                    </div>

                    {/* Feedback */}
                    <div className="liquid-glass-elevated animate-slide-up" style={{ padding: '28px', opacity: 0, animationDelay: '0.6s' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{
                                fontSize: '16px',
                                fontWeight: 600,
                                color: 'var(--x-foreground)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}>
                                <span style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v6l4 2" />
                                    </svg>
                                </span>
                                Feedback
                            </h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Progress value={65} showLabel />
                            <Progress value={85} colorScheme="success" />
                            <div className="flex items-center gap-4 pt-2">
                                <Spinner size="sm" />
                                <Spinner size="md" />
                                <Spinner size="lg" />
                            </div>
                        </div>
                    </div>

                    {/* Icons */}
                    <div
                        className="liquid-glass-elevated animate-slide-up"
                        style={{
                            padding: '28px',
                            gridColumn: '1 / -1',
                            opacity: 0,
                            animationDelay: '0.7s',
                        }}
                    >
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{
                                fontSize: '16px',
                                fontWeight: 600,
                                color: 'var(--x-foreground)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}>
                                <span style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                                    </svg>
                                </span>
                                Icons (Custom SVG System)
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-6 text-[var(--x-foreground)]">
                            <div className="liquid-glass p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer">
                                <Activity />
                            </div>
                            <div className="liquid-glass p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer">
                                <Airplay />
                            </div>
                            <div className="liquid-glass p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer">
                                <AlarmClock />
                            </div>
                            <div className="liquid-glass p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer">
                                <AlertCircle />
                            </div>
                            <div className="liquid-glass p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer">
                                <AlignJustify />
                            </div>
                            <div className="liquid-glass p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer">
                                <Anchor />
                            </div>
                            <div className="liquid-glass p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer">
                                <Aperture />
                            </div>
                            <div className="liquid-glass p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer">
                                <Archive />
                            </div>
                            <div className="liquid-glass p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer">
                                <ArrowRight />
                            </div>
                            <div className="liquid-glass p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer">
                                <AtSign />
                            </div>
                            <div className="liquid-glass p-3 rounded-xl hover:scale-110 transition-transform cursor-pointer">
                                <Search />
                            </div>
                        </div>
                    </div>

                    {/* MCP Server / AI-Powered Development */}
                    <div
                        className="liquid-glass-elevated animate-slide-up"
                        style={{
                            padding: '28px',
                            gridColumn: '1 / -1',
                            opacity: 0,
                            animationDelay: '0.8s',
                        }}
                    >
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{
                                fontSize: '16px',
                                fontWeight: 600,
                                color: 'var(--x-foreground)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}>
                                <span style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '10px',
                                    background: 'linear-gradient(135deg, #f472b6 0%, #c026d3 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a2 2 0 0 1 0 4h-1.27a7 7 0 0 1-1.73 2.73V22a2 2 0 0 1-4 0v-1H9v1a2 2 0 0 1-4 0v-1.27A7 7 0 0 1 3.27 18H2a2 2 0 0 1 0-4h1a7 7 0 0 1 7-7h1V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2z" />
                                        <circle cx="12" cy="14" r="3" fill="white" />
                                    </svg>
                                </span>
                                🤖 AI-Powered Development (MCP Server)
                            </h3>
                            <p style={{
                                color: 'var(--x-mutedForeground)',
                                fontSize: '14px',
                                marginTop: '12px',
                                lineHeight: 1.6,
                            }}>
                                X-UI includes an MCP (Model Context Protocol) server for seamless AI integration.
                                Generate components, access design tokens, and get usage examples through your favorite AI assistant.
                            </p>
                        </div>
                        <div className="grid gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                            {/* Tool: generate_component */}
                            <Card variant="glass" padding="md">
                                <div className="flex items-center gap-3 mb-3">
                                    <Badge colorScheme="primary">Tool</Badge>
                                    <span className="font-semibold text-sm" style={{ color: 'var(--x-foreground)' }}>generate_component</span>
                                </div>
                                <p style={{ color: 'var(--x-mutedForeground)', fontSize: '13px', lineHeight: 1.5 }}>
                                    Generate new X-UI components with variants, sizes, and platform support (React/Native).
                                </p>
                            </Card>
                            {/* Tool: get_design_tokens */}
                            <Card variant="glass" padding="md">
                                <div className="flex items-center gap-3 mb-3">
                                    <Badge colorScheme="success">Tool</Badge>
                                    <span className="font-semibold text-sm" style={{ color: 'var(--x-foreground)' }}>get_design_tokens</span>
                                </div>
                                <p style={{ color: 'var(--x-mutedForeground)', fontSize: '13px', lineHeight: 1.5 }}>
                                    Retrieve design tokens (colors, spacing, typography) for consistent styling.
                                </p>
                            </Card>
                            {/* Tool: get_component_usage */}
                            <Card variant="glass" padding="md">
                                <div className="flex items-center gap-3 mb-3">
                                    <Badge colorScheme="warning">Tool</Badge>
                                    <span className="font-semibold text-sm" style={{ color: 'var(--x-foreground)' }}>get_component_usage</span>
                                </div>
                                <p style={{ color: 'var(--x-mutedForeground)', fontSize: '13px', lineHeight: 1.5 }}>
                                    Get code examples and usage patterns for any X-UI component.
                                </p>
                            </Card>
                        </div>
                        {/* Installation Guide */}
                        <div style={{ marginTop: '20px', padding: '16px', borderRadius: '12px', background: 'rgba(0,0,0,0.3)' }}>
                            <p style={{ color: 'var(--x-foreground)', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>
                                📦 Quick Start
                            </p>
                            <code style={{
                                display: 'block',
                                padding: '12px',
                                borderRadius: '8px',
                                background: 'rgba(0,0,0,0.4)',
                                color: '#a5b4fc',
                                fontSize: '12px',
                                fontFamily: 'monospace',
                            }}>
                                npx @xdev-asia/x-ui-mcp-server
                            </code>
                            <p style={{ color: 'var(--x-mutedForeground)', fontSize: '12px', marginTop: '8px' }}>
                                Add to your AI assistant's MCP configuration to enable X-UI component generation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


