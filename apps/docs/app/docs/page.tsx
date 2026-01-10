'use client';

import React from 'react';
import DocsLayout from './DocsLayout';
import CodeBlock from '../components/CodeBlock';

export default function GettingStartedPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '700px' }}>
                <h1 style={{
                    fontSize: '36px',
                    fontWeight: 800,
                    marginBottom: '16px',
                    color: 'var(--x-foreground)',
                    letterSpacing: '-0.5px',
                }}>
                    Getting Started
                </h1>
                <p style={{
                    fontSize: '18px',
                    color: 'var(--x-mutedForeground)',
                    marginBottom: '40px',
                    lineHeight: 1.7,
                }}>
                    Get up and running with X-UI in minutes. A modern, beautiful component library for React.
                </p>

                {/* Installation */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        Installation
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'var(--x-mutedForeground)',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        Install X-UI and its peer dependencies using your preferred package manager.
                    </p>
                    <CodeBlock
                        language="bash"
                        code={`# npm
npm install @xdev-asia/x-ui-react

# pnpm
pnpm add @xdev-asia/x-ui-react

# yarn
yarn add @xdev-asia/x-ui-react`}
                    />
                </section>

                {/* Setup */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        Setup ThemeProvider
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'var(--x-mutedForeground)',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        Wrap your application with ThemeProvider to enable theming and dark mode support.
                    </p>
                    <CodeBlock
                        code={`import { ThemeProvider } from '@xdev-asia/x-ui-react';

export default function App({ children }) {
    return (
        <ThemeProvider defaultTheme="dark">
            {children}
        </ThemeProvider>
    );
}`}
                    />
                </section>

                {/* Usage */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        Usage
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'var(--x-mutedForeground)',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        Import and use components directly in your application.
                    </p>
                    <CodeBlock
                        code={`import { Button, Card, Input } from '@xdev-asia/x-ui-react';

function MyComponent() {
    return (
        <Card>
            <Input placeholder="Enter your email" />
            <Button variant="solid" size="md">
                Subscribe
            </Button>
        </Card>
    );
}`}
                    />
                </section>

                {/* Features */}
                <section>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        Key Features
                    </h2>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                    }}>
                        {[
                            { icon: '🌓', title: 'Dark/Light Mode', desc: 'Built-in theme support with automatic persistence' },
                            { icon: '✨', title: 'Glassmorphism', desc: 'Modern liquid glass design system' },
                            { icon: '📱', title: 'Cross-platform', desc: 'Works on React and React Native' },
                            { icon: '🎯', title: 'TypeScript', desc: 'Full TypeScript support with complete types' },
                            { icon: '♿', title: 'Accessible', desc: 'WAI-ARIA compliant components' },
                        ].map((feature, i) => (
                            <li key={i} style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '16px',
                                padding: '16px',
                                marginBottom: '8px',
                                borderRadius: '12px',
                                background: 'rgba(30, 41, 59, 0.3)',
                                border: '1px solid rgba(255,255,255,0.05)',
                            }}>
                                <span style={{ fontSize: '24px' }}>{feature.icon}</span>
                                <div>
                                    <h4 style={{
                                        margin: '0 0 4px',
                                        fontSize: '15px',
                                        fontWeight: 600,
                                        color: 'var(--x-foreground)',
                                    }}>
                                        {feature.title}
                                    </h4>
                                    <p style={{
                                        margin: 0,
                                        fontSize: '14px',
                                        color: 'var(--x-mutedForeground)',
                                    }}>
                                        {feature.desc}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
