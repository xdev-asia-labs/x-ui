'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import ComponentPreview from '@components/ComponentPreview';
import CodeBlock from '@components/CodeBlock';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from '@xdev-asia/x-ui-react';

export default function CardPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '750px' }}>
                <h1 style={{
                    fontSize: '36px',
                    fontWeight: 800,
                    marginBottom: '12px',
                    color: 'var(--x-foreground)',
                    letterSpacing: '-0.5px',
                }}>
                    Card
                </h1>
                <p style={{
                    fontSize: '18px',
                    color: 'var(--x-mutedForeground)',
                    marginBottom: '40px',
                    lineHeight: 1.7,
                }}>
                    A flexible container component for grouping related content.
                </p>

                {/* Import */}
                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock
                        language="tsx"
                        code={`import { 
    Card, 
    CardHeader, 
    CardTitle, 
    CardDescription, 
    CardContent, 
    CardFooter 
} from '@xdev-asia/x-ui-react';`}
                    />
                </section>

                {/* Basic */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        Basic Usage
                    </h2>

                    <ComponentPreview
                        title="Default Card"
                        code={`<Card>
    <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
    </CardHeader>
    <CardContent>
        Your content here
    </CardContent>
</Card>`}
                    >
                        <Card style={{ width: '320px' }}>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card description goes here</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p style={{ margin: 0, color: 'var(--x-mutedForeground)' }}>
                                    Your content here
                                </p>
                            </CardContent>
                        </Card>
                    </ComponentPreview>
                </section>

                {/* With Footer */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        With Footer
                    </h2>

                    <ComponentPreview
                        title="Card with Actions"
                        code={`<Card>
    <CardHeader>
        <CardTitle>Subscription</CardTitle>
        <CardDescription>Manage your subscription</CardDescription>
    </CardHeader>
    <CardContent>
        <p>You are on the Pro plan.</p>
    </CardContent>
    <CardFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Upgrade</Button>
    </CardFooter>
</Card>`}
                    >
                        <Card style={{ width: '320px' }}>
                            <CardHeader>
                                <CardTitle>Subscription</CardTitle>
                                <CardDescription>Manage your subscription</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p style={{ margin: 0, color: 'var(--x-mutedForeground)' }}>
                                    You are on the Pro plan.
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" size="sm">Cancel</Button>
                                <Button size="sm">Upgrade</Button>
                            </CardFooter>
                        </Card>
                    </ComponentPreview>
                </section>

                {/* Variants */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        Variants
                    </h2>

                    <ComponentPreview
                        title="Elevated (Default)"
                        code={`<Card variant="elevated">...</Card>`}
                    >
                        <Card variant="elevated" style={{ width: '280px' }}>
                            <CardTitle>Elevated Card</CardTitle>
                            <CardDescription>With shadow effect</CardDescription>
                        </Card>
                    </ComponentPreview>

                    <ComponentPreview
                        title="Outlined"
                        code={`<Card variant="outlined">...</Card>`}
                    >
                        <Card variant="outlined" style={{ width: '280px' }}>
                            <CardTitle>Outlined Card</CardTitle>
                            <CardDescription>With border</CardDescription>
                        </Card>
                    </ComponentPreview>

                    <ComponentPreview
                        title="Filled"
                        code={`<Card variant="filled">...</Card>`}
                    >
                        <Card variant="filled" style={{ width: '280px' }}>
                            <CardTitle>Filled Card</CardTitle>
                            <CardDescription>With muted background</CardDescription>
                        </Card>
                    </ComponentPreview>

                    <ComponentPreview
                        title="Glass"
                        code={`<Card variant="glass">...</Card>`}
                    >
                        <Card variant="glass" style={{ width: '280px' }}>
                            <CardTitle>Glass Card</CardTitle>
                            <CardDescription>With backdrop blur</CardDescription>
                        </Card>
                    </ComponentPreview>
                </section>

                {/* Interactive */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        Interactive Cards
                    </h2>

                    <ComponentPreview
                        title="Interactive & Selected"
                        code={`<Card isInteractive onClick={() => {}}>
    Hover me!
</Card>

<Card isInteractive isSelected>
    Selected
</Card>`}
                    >
                        <Card isInteractive style={{ width: '200px', cursor: 'pointer' }}>
                            <CardTitle>Hover me!</CardTitle>
                            <CardDescription>Nice hover effect</CardDescription>
                        </Card>
                        <Card isInteractive isSelected style={{ width: '200px' }}>
                            <CardTitle>Selected</CardTitle>
                            <CardDescription>With ring effect</CardDescription>
                        </Card>
                    </ComponentPreview>
                </section>

                {/* API Reference */}
                <section>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        API Reference
                    </h2>

                    <div style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.08)',
                    }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontSize: '14px',
                        }}>
                            <thead>
                                <tr style={{
                                    background: 'rgba(30,41,59,0.4)',
                                    borderBottom: '1px solid rgba(255,255,255,0.08)'
                                }}>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--x-foreground)' }}>Prop</th>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--x-foreground)' }}>Type</th>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--x-foreground)' }}>Default</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { prop: 'variant', type: "'elevated' | 'outlined' | 'filled' | 'glass'", def: "'elevated'" },
                                    { prop: 'padding', type: "'none' | 'sm' | 'md' | 'lg'", def: "'md'" },
                                    { prop: 'isInteractive', type: 'boolean', def: 'false' },
                                    { prop: 'isSelected', type: 'boolean', def: 'false' },
                                    { prop: 'children', type: 'ReactNode', def: '-' },
                                ].map((row, i) => (
                                    <tr key={i} style={{
                                        borderBottom: '1px solid rgba(255,255,255,0.05)'
                                    }}>
                                        <td style={{ padding: '12px 16px' }}>
                                            <code style={{ color: 'rgb(59, 130, 246)' }}>{row.prop}</code>
                                        </td>
                                        <td style={{ padding: '12px 16px', color: 'var(--x-mutedForeground)', fontSize: '13px' }}>{row.type}</td>
                                        <td style={{ padding: '12px 16px', color: 'var(--x-mutedForeground)' }}>{row.def}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        marginTop: '32px',
                        marginBottom: '12px',
                        color: 'var(--x-foreground)',
                    }}>
                        Compound Components
                    </h3>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                    }}>
                        {[
                            { name: 'CardHeader', desc: 'Container for title and description' },
                            { name: 'CardTitle', desc: 'Card title' },
                            { name: 'CardDescription', desc: 'Subtitle / description' },
                            { name: 'CardContent', desc: 'Main content' },
                            { name: 'CardFooter', desc: 'Footer with actions' },
                        ].map((item, i) => (
                            <li key={i} style={{
                                padding: '12px 16px',
                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                display: 'flex',
                                gap: '16px',
                            }}>
                                <code style={{
                                    color: 'rgb(59, 130, 246)',
                                    minWidth: '140px',
                                }}>
                                    {item.name}
                                </code>
                                <span style={{ color: 'var(--x-mutedForeground)' }}>
                                    {item.desc}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
