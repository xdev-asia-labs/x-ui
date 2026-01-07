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
        <section id="components" className="section" style={{
            background: 'linear-gradient(180deg, rgba(139,92,246,0.02) 0%, transparent 100%)',
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
                        Component Showcase
                    </h2>
                    <p style={{ color: 'var(--x-mutedForeground)', fontSize: '1.125rem', maxWidth: '500px', margin: '0 auto' }}>
                        A glimpse into the comprehensive component library.
                    </p>
                </div>

                {/* Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '24px',
                }}>
                    {/* Buttons */}
                    <Card variant="glass" padding="lg">
                        <CardHeader>
                            <CardTitle>Buttons</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-3">
                            <Button>Default</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="glass">Glass</Button>
                            <Button colorScheme="secondary">Secondary</Button>
                            <Button isLoading>Loading</Button>
                        </CardContent>
                    </Card>

                    {/* Inputs */}
                    <Card variant="glass" padding="lg">
                        <CardHeader>
                            <CardTitle>Form Inputs</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4">
                            <Input placeholder="Default input" />
                            <Input variant="glass" placeholder="Glass input" leftIcon={<Search size={18} />} />
                        </CardContent>
                    </Card>

                    {/* Cards */}
                    <Card variant="glass" padding="lg">
                        <CardHeader>
                            <CardTitle>Cards</CardTitle>
                        </CardHeader>
                        <CardContent>
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
                        </CardContent>
                    </Card>

                    {/* Tags & Badges */}
                    <Card variant="glass" padding="lg">
                        <CardHeader>
                            <CardTitle>Tags & Badges</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            <Badge>Default</Badge>
                            <Badge colorScheme="primary">Primary</Badge>
                            <Badge colorScheme="success">Success</Badge>
                            <Badge colorScheme="warning">Warning</Badge>
                            <Badge colorScheme="error">Error</Badge>
                            <Tag closable onClose={() => { }}>Closable</Tag>
                        </CardContent>
                    </Card>

                    {/* Form Controls */}
                    <Card variant="glass" padding="lg">
                        <CardHeader>
                            <CardTitle>Form Controls</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4">
                            <Switch checked={switchValue} onChange={() => setSwitchValue(!switchValue)} label="Enable notifications" />
                            <Checkbox checked={checkValue} onChange={() => setCheckValue(!checkValue)} label="Accept terms" />
                        </CardContent>
                    </Card>

                    {/* Feedback */}
                    <Card variant="glass" padding="lg">
                        <CardHeader>
                            <CardTitle>Feedback</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4">
                            <Progress value={65} showLabel />
                            <Progress value={85} colorScheme="success" />
                            <div className="flex items-center gap-4">
                                <Spinner size="sm" />
                                <Spinner size="md" />
                                <Spinner size="lg" />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Icons */}
                    <Card variant="glass" padding="lg" style={{ gridColumn: '1 / -1' }}>
                        <CardHeader>
                            <CardTitle>Icons (Custom SVG System)</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-6 text-[var(--x-foreground)]">
                            <Activity />
                            <Airplay />
                            <AlarmClock />
                            <AlertCircle />
                            <AlignJustify />
                            <Anchor />
                            <Aperture />
                            <Archive />
                            <ArrowRight />
                            <AtSign />
                            <Search />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
