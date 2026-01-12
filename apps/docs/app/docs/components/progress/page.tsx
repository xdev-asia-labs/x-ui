'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Progress } from '@xdev-asia/x-ui-react';

export default function ProgressPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Progress
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A progress bar indicating loading or completion status.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Progress } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Example
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <Progress value={25} />
                        <Progress value={50} />
                        <Progress value={75} />
                    </div>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>value</code> - Current progress (0-100)</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>size</code> - 'sm' | 'md' | 'lg'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>color</code> - Progress bar color</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>isIndeterminate</code> - Animated loading state</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
