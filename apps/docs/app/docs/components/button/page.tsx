'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import ComponentPreview from '@components/ComponentPreview';
import CodeBlock from '@components/CodeBlock';
import { Button } from '@xdev-asia/x-ui-react';

export default function ButtonPage() {
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
                    Button
                </h1>
                <p style={{
                    fontSize: '18px',
                    color: 'var(--x-mutedForeground)',
                    marginBottom: '40px',
                    lineHeight: 1.7,
                }}>
                    A versatile button component with multiple variants, sizes, and states.
                </p>

                {/* Import */}
                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock
                        language="tsx"
                        code={`import { Button } from '@xdev-asia/x-ui-react';`}
                    />
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
                        title="Solid (Default)"
                        description="Primary action button with filled background."
                        code={`<Button variant="solid">Solid</Button>`}
                    >
                        <Button variant="solid">Solid</Button>
                    </ComponentPreview>

                    <ComponentPreview
                        title="Outline"
                        description="Secondary action with border only."
                        code={`<Button variant="outline">Outline</Button>`}
                    >
                        <Button variant="outline">Outline</Button>
                    </ComponentPreview>

                    <ComponentPreview
                        title="Ghost"
                        description="Subtle button with transparent background."
                        code={`<Button variant="ghost">Ghost</Button>`}
                    >
                        <Button variant="ghost">Ghost</Button>
                    </ComponentPreview>

                    <ComponentPreview
                        title="Glass"
                        description="Glassmorphism style with blur effect."
                        code={`<Button variant="glass">Glass</Button>`}
                    >
                        <Button variant="glass">Glass</Button>
                    </ComponentPreview>

                    <ComponentPreview
                        title="Link"
                        description="Text-only button that looks like a link."
                        code={`<Button variant="link">Link</Button>`}
                    >
                        <Button variant="link">Link</Button>
                    </ComponentPreview>
                </section>

                {/* Color Schemes */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        Color Schemes
                    </h2>

                    <ComponentPreview
                        title="Color Variants"
                        description="Available color schemes for different contexts."
                        code={`<Button colorScheme="primary">Primary</Button>
<Button colorScheme="secondary">Secondary</Button>
<Button colorScheme="success">Success</Button>
<Button colorScheme="warning">Warning</Button>
<Button colorScheme="error">Error</Button>
<Button colorScheme="neutral">Neutral</Button>`}
                    >
                        <Button colorScheme="primary">Primary</Button>
                        <Button colorScheme="secondary">Secondary</Button>
                        <Button colorScheme="success">Success</Button>
                        <Button colorScheme="warning">Warning</Button>
                        <Button colorScheme="error">Error</Button>
                        <Button colorScheme="neutral">Neutral</Button>
                    </ComponentPreview>
                </section>

                {/* Sizes */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        Sizes
                    </h2>

                    <ComponentPreview
                        title="Size Variants"
                        description="Different sizes for various use cases."
                        code={`<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>`}
                    >
                        <Button size="xs">Extra Small</Button>
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                        <Button size="xl">Extra Large</Button>
                    </ComponentPreview>
                </section>

                {/* States */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        States
                    </h2>

                    <ComponentPreview
                        title="Disabled"
                        code={`<Button isDisabled>Disabled</Button>`}
                    >
                        <Button isDisabled>Disabled</Button>
                    </ComponentPreview>

                    <ComponentPreview
                        title="Loading"
                        code={`<Button isLoading>Loading</Button>`}
                    >
                        <Button isLoading>Loading</Button>
                    </ComponentPreview>

                    <ComponentPreview
                        title="Full Width"
                        code={`<Button fullWidth>Full Width Button</Button>`}
                    >
                        <div style={{ width: '100%' }}>
                            <Button fullWidth>Full Width Button</Button>
                        </div>
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
                                    { prop: 'variant', type: "'solid' | 'outline' | 'ghost' | 'glass' | 'link'", def: "'solid'" },
                                    { prop: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", def: "'md'" },
                                    { prop: 'colorScheme', type: "'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral'", def: "'primary'" },
                                    { prop: 'isDisabled', type: 'boolean', def: 'false' },
                                    { prop: 'isLoading', type: 'boolean', def: 'false' },
                                    { prop: 'fullWidth', type: 'boolean', def: 'false' },
                                    { prop: 'leftIcon', type: 'ReactNode', def: '-' },
                                    { prop: 'rightIcon', type: 'ReactNode', def: '-' },
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
                </section>
            </div>
        </DocsLayout>
    );
}
