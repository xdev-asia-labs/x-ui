'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Box } from '@xdev-asia/x-ui-react';

export default function BoxPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '750px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Box
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A primitive layout component for building UI. Renders a div by default.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Box } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Examples
                    </h2>
                    <Box style={{ padding: '20px', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '12px' }}>
                        Box with custom padding and background
                    </Box>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>as</code> - Element to render (div, span, etc.)</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>className</code> - CSS class names</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>style</code> - Inline styles</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
