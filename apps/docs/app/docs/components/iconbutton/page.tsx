'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { IconButton, X, Settings, Menu, Search } from '@xdev-asia/x-ui-react';

export default function IconButtonPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '750px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    IconButton
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A button that displays only an icon, typically for actions like close, menu, or settings.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { IconButton, X, Settings, Menu } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Examples
                    </h2>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <IconButton aria-label="Close" icon={<X />} />
                        <IconButton aria-label="Settings" icon={<Settings />} variant="outline" />
                        <IconButton aria-label="Menu" icon={<Menu />} variant="ghost" />
                        <IconButton aria-label="Search" icon={<Search />} size="lg" />
                    </div>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>icon</code> - Icon element to render</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>aria-label</code> - Accessibility label (required)</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>variant</code> - 'solid' | 'outline' | 'ghost'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>size</code> - 'sm' | 'md' | 'lg'</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
