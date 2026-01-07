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
                    color: 'rgb(var(--x-foreground))',
                    letterSpacing: '-0.5px',
                }}>
                    Getting Started
                </h1>
                <p style={{
                    fontSize: '18px',
                    color: 'rgb(var(--x-mutedForeground))',
                    marginBottom: '40px',
                    lineHeight: 1.7,
                }}>
                    X-UI là thư viện component hiện đại cho React và React Native với thiết kế
                    glassmorphism, animations mượt mà và hỗ trợ dark/light mode.
                </p>

                {/* Installation */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'rgb(var(--x-foreground))',
                    }}>
                        Cài đặt
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'rgb(var(--x-mutedForeground))',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        Cài đặt package qua npm hoặc pnpm:
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
                        color: 'rgb(var(--x-foreground))',
                    }}>
                        Setup ThemeProvider
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'rgb(var(--x-mutedForeground))',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        Wrap ứng dụng của bạn với ThemeProvider để sử dụng theme system:
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
                        color: 'rgb(var(--x-foreground))',
                    }}>
                        Sử dụng Components
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'rgb(var(--x-mutedForeground))',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        Import và sử dụng các components:
                    </p>
                    <CodeBlock
                        code={`import { Button, Card, Input } from '@xdev-asia/x-ui-react';

function MyComponent() {
    return (
        <Card>
            <Input placeholder="Enter your email" />
            <Button variant="primary" size="md">
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
                        color: 'rgb(var(--x-foreground))',
                    }}>
                        Tính năng
                    </h2>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                    }}>
                        {[
                            { icon: '🎨', title: 'Dark/Light Mode', desc: 'Chuyển đổi theme mượt mà với CSS variables' },
                            { icon: '✨', title: 'Glassmorphism', desc: 'Hiệu ứng glass modern với backdrop blur' },
                            { icon: '📱', title: 'Cross-platform', desc: 'Hỗ trợ React và React Native' },
                            { icon: '🎯', title: 'TypeScript', desc: 'Type-safe với IntelliSense đầy đủ' },
                            { icon: '♿', title: 'Accessible', desc: 'WAI-ARIA compliant components' },
                        ].map((feature, i) => (
                            <li key={i} style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '16px',
                                padding: '16px',
                                marginBottom: '8px',
                                borderRadius: '12px',
                                background: 'var(--x-glass-bg, rgba(30, 41, 59, 0.3))',
                                border: '1px solid var(--x-glass-border, rgba(255,255,255,0.05))',
                            }}>
                                <span style={{ fontSize: '24px' }}>{feature.icon}</span>
                                <div>
                                    <h4 style={{
                                        margin: '0 0 4px',
                                        fontSize: '15px',
                                        fontWeight: 600,
                                        color: 'rgb(var(--x-foreground))',
                                    }}>
                                        {feature.title}
                                    </h4>
                                    <p style={{
                                        margin: 0,
                                        fontSize: '14px',
                                        color: 'rgb(var(--x-mutedForeground))',
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
