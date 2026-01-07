'use client';

import React from 'react';
import DocsLayout from '../../DocsLayout';
import ComponentPreview from '../../../components/ComponentPreview';
import CodeBlock from '../../../components/CodeBlock';
import { Input } from '@xdev-asia/x-ui-react';

export default function InputPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '750px' }}>
                <h1 style={{
                    fontSize: '36px',
                    fontWeight: 800,
                    marginBottom: '12px',
                    color: 'rgb(var(--x-foreground))',
                    letterSpacing: '-0.5px',
                }}>
                    Input
                </h1>
                <p style={{
                    fontSize: '18px',
                    color: 'rgb(var(--x-mutedForeground))',
                    marginBottom: '40px',
                    lineHeight: 1.7,
                }}>
                    Input component với nhiều variants, hỗ trợ label, helper text, validation và icons.
                </p>

                {/* Import */}
                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock
                        language="tsx"
                        code={`import { Input } from '@xdev-asia/x-ui-react';`}
                    />
                </section>

                {/* Basic */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'rgb(var(--x-foreground))',
                    }}>
                        Basic Usage
                    </h2>

                    <ComponentPreview
                        title="Default Input"
                        code={`<Input placeholder="Enter your name" />`}
                    >
                        <Input placeholder="Enter your name" />
                    </ComponentPreview>

                    <ComponentPreview
                        title="With Label"
                        code={`<Input 
    label="Email"
    placeholder="you@example.com" 
/>`}
                    >
                        <Input label="Email" placeholder="you@example.com" />
                    </ComponentPreview>

                    <ComponentPreview
                        title="With Helper Text"
                        code={`<Input 
    label="Username"
    placeholder="johndoe"
    helperText="This will be your public display name"
/>`}
                    >
                        <Input
                            label="Username"
                            placeholder="johndoe"
                            helperText="This will be your public display name"
                        />
                    </ComponentPreview>
                </section>

                {/* Variants */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'rgb(var(--x-foreground))',
                    }}>
                        Variants
                    </h2>

                    <ComponentPreview
                        title="Outline (Default)"
                        code={`<Input variant="outline" placeholder="Outline" />`}
                    >
                        <Input variant="outline" placeholder="Outline input" />
                    </ComponentPreview>

                    <ComponentPreview
                        title="Filled"
                        code={`<Input variant="filled" placeholder="Filled" />`}
                    >
                        <Input variant="filled" placeholder="Filled input" />
                    </ComponentPreview>

                    <ComponentPreview
                        title="Flushed"
                        code={`<Input variant="flushed" placeholder="Flushed" />`}
                    >
                        <Input variant="flushed" placeholder="Flushed input" />
                    </ComponentPreview>

                    <ComponentPreview
                        title="Glass"
                        code={`<Input variant="glass" placeholder="Glass" />`}
                    >
                        <Input variant="glass" placeholder="Glass input" />
                    </ComponentPreview>
                </section>

                {/* Sizes */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'rgb(var(--x-foreground))',
                    }}>
                        Sizes
                    </h2>

                    <ComponentPreview
                        title="Size Variants"
                        code={`<Input size="sm" placeholder="Small" />
<Input size="md" placeholder="Medium" />
<Input size="lg" placeholder="Large" />`}
                    >
                        <Input size="sm" placeholder="Small" />
                        <Input size="md" placeholder="Medium" />
                        <Input size="lg" placeholder="Large" />
                    </ComponentPreview>
                </section>

                {/* States */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'rgb(var(--x-foreground))',
                    }}>
                        States
                    </h2>

                    <ComponentPreview
                        title="Disabled"
                        code={`<Input isDisabled placeholder="Disabled input" />`}
                    >
                        <Input isDisabled placeholder="Disabled input" />
                    </ComponentPreview>

                    <ComponentPreview
                        title="Read Only"
                        code={`<Input isReadOnly defaultValue="Read only value" />`}
                    >
                        <Input isReadOnly defaultValue="Read only value" />
                    </ComponentPreview>

                    <ComponentPreview
                        title="Error State"
                        code={`<Input 
    label="Email" 
    isInvalid
    errorMessage="Please enter a valid email"
    defaultValue="invalid-email"
/>`}
                    >
                        <Input
                            label="Email"
                            isInvalid
                            errorMessage="Please enter a valid email"
                            defaultValue="invalid-email"
                        />
                    </ComponentPreview>
                </section>

                {/* API Reference */}
                <section>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'rgb(var(--x-foreground))',
                    }}>
                        API Reference
                    </h2>

                    <div style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '1px solid var(--x-glass-border)',
                    }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontSize: '14px',
                        }}>
                            <thead>
                                <tr style={{
                                    background: 'var(--x-glass-bg)',
                                    borderBottom: '1px solid var(--x-glass-border)'
                                }}>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', color: 'rgb(var(--x-foreground))' }}>Prop</th>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', color: 'rgb(var(--x-foreground))' }}>Type</th>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', color: 'rgb(var(--x-foreground))' }}>Default</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { prop: 'variant', type: "'outline' | 'filled' | 'flushed' | 'glass'", def: "'outline'" },
                                    { prop: 'size', type: "'sm' | 'md' | 'lg'", def: "'md'" },
                                    { prop: 'label', type: 'string', def: '-' },
                                    { prop: 'placeholder', type: 'string', def: '-' },
                                    { prop: 'isDisabled', type: 'boolean', def: 'false' },
                                    { prop: 'isReadOnly', type: 'boolean', def: 'false' },
                                    { prop: 'isInvalid', type: 'boolean', def: 'false' },
                                    { prop: 'errorMessage', type: 'string', def: '-' },
                                    { prop: 'helperText', type: 'string', def: '-' },
                                    { prop: 'leftIcon', type: 'ReactNode', def: '-' },
                                    { prop: 'rightIcon', type: 'ReactNode', def: '-' },
                                    { prop: 'leftAddon', type: 'ReactNode', def: '-' },
                                    { prop: 'rightAddon', type: 'ReactNode', def: '-' },
                                ].map((row, i) => (
                                    <tr key={i} style={{
                                        borderBottom: '1px solid var(--x-glass-border)'
                                    }}>
                                        <td style={{ padding: '12px 16px' }}>
                                            <code style={{ color: 'rgb(59, 130, 246)' }}>{row.prop}</code>
                                        </td>
                                        <td style={{ padding: '12px 16px', color: 'rgb(var(--x-mutedForeground))', fontSize: '13px' }}>{row.type}</td>
                                        <td style={{ padding: '12px 16px', color: 'rgb(var(--x-mutedForeground))' }}>{row.def}</td>
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
