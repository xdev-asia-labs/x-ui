'use client';

import React from 'react';
import DocsLayout, { useLanguage } from './DocsLayout';
import CodeBlock from '../components/CodeBlock';

export default function GettingStartedPage() {
    const { t } = useLanguage();

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
                    {t('getting.title')}
                </h1>
                <p style={{
                    fontSize: '18px',
                    color: 'rgb(var(--x-mutedForeground))',
                    marginBottom: '40px',
                    lineHeight: 1.7,
                }}>
                    {t('getting.description')}
                </p>

                {/* Installation */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'rgb(var(--x-foreground))',
                    }}>
                        {t('getting.install')}
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'rgb(var(--x-mutedForeground))',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        {t('getting.install.desc')}
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
                        {t('getting.setup')}
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'rgb(var(--x-mutedForeground))',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        {t('getting.setup.desc')}
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
                        {t('getting.usage')}
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'rgb(var(--x-mutedForeground))',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        {t('getting.usage.desc')}
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
                        color: 'rgb(var(--x-foreground))',
                    }}>
                        {t('getting.features')}
                    </h2>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                    }}>
                        {[
                            { icon: '🌓', title: 'Dark/Light Mode', desc: t('getting.feature.darkmode') },
                            { icon: '✨', title: 'Glassmorphism', desc: t('getting.feature.glass') },
                            { icon: '📱', title: 'Cross-platform', desc: t('getting.feature.crossplatform') },
                            { icon: '🎯', title: 'TypeScript', desc: t('getting.feature.typescript') },
                            { icon: '♿', title: 'Accessible', desc: t('getting.feature.accessible') },
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
