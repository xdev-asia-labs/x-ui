'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Spinner } from '@xdev-asia/x-ui-react';

export default function SpinnerPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Spinner
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A loading spinner for indicating async operations.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Spinner } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Example
                    </h2>
                    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <Spinner size="sm" />
                        <Spinner size="md" />
                        <Spinner size="lg" />
                    </div>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>size</code> - 'sm' | 'md' | 'lg' | 'xl'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>color</code> - Spinner color</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>label</code> - Accessible label</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
